import chokidar from 'chokidar';
import ejs from 'ejs';
import frontMatter from 'front-matter';
import fse from 'fs-extra';
import glob from 'glob';
import hljs from 'highlight.js';
import liveServer from 'live-server';
import path from 'path';
import prettier from 'prettier';
import sass from 'sass';
import { marked } from 'marked';
import config from '../site.config.js';

const srcPath = config.build.sourcePath;
const distPath = config.build.outputPath;

export const build = () => {
  // clear destination folder
  fse.emptyDirSync(distPath);

  // copy assets folder
  fse.copySync(`${srcPath}/assets`, `${distPath}/assets`);

  // compile sass
  const css = sass.compile(`${srcPath}/css/main.scss`);
  fse.mkdirsSync(`${distPath}/css/`);
  fse.writeFileSync(`${distPath}/css/main.css`, css.css);

  // read pages
  const files = glob.sync('**/*.@(md|ejs|html)', { cwd: `${srcPath}/pages` });

  files.forEach((file, i) => {
    const fileData = path.parse(file);
    const destPath = path.join(distPath, fileData.dir);

    // create destination directory
    fse.mkdirsSync(destPath);

    // read page file
    const data = fse.readFileSync(`${srcPath}/pages/${file}`, 'utf-8');

    // render page
    const pageData = frontMatter(data);
    const templateConfig = Object.assign({}, config, {
      page: pageData.attributes,
    });
    let pageContent;

    // generate page content according to file type
    switch (fileData.ext) {
      case '.md':
        marked.setOptions({
          highlight: function (code, lang) {
            const language = hljs.getLanguage(lang) ? lang : 'plaintext';
            return hljs.highlight(code, { language }).value;
          },
        });
        pageContent = marked(pageData.body);
        break;
      case '.ejs':
        pageContent = ejs.render(pageData.body, templateConfig, {
          filename: `${srcPath}/pages/${file}`,
        });
        break;
      default:
        pageContent = pageData.body;
    }

    // render layout with page contents
    const layout = pageData.attributes.layout || 'default';
    const layoutFileName = `${srcPath}/layouts/${layout}.ejs`;
    const layoutData = fse.readFileSync(layoutFileName, 'utf-8');
    const completePage = ejs.render(
      layoutData,
      Object.assign({}, templateConfig, {
        body: pageContent,
        filename: layoutFileName,
      })
    );

    const formatted = prettier.format(completePage, { parser: 'html' });

    // save the html file
    fse.writeFileSync(`${destPath}/${fileData.name}.html`, formatted);
  });
};

export const serve = () => {
  liveServer.start({
    port: config.build.port,
    root: config.build.outputPath,
    open: true,
    logLevel: 0,
  });

  chokidar.watch(srcPath).on('change', (e) => {
    build();
    console.info('Waiting for changes...');
  });
};
