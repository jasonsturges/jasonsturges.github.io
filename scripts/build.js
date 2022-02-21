import fse from "fs-extra";
import path from "path";
import ejs from "ejs";
import {marked} from "marked";
import frontMatter from "front-matter";
import glob from "glob";
import prettier from "prettier";
import config from "../site.config.js";

const srcPath = './src';
const distPath = config.build.outputPath;

// clear destination folder
fse.emptyDirSync(distPath);

// copy assets folder
fse.copy(`${srcPath}/assets`, `${distPath}/assets`);

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
    page: pageData.attributes
  });
  let pageContent;

  // generate page content according to file type
  switch (fileData.ext) {
    case '.md':
      pageContent = marked(pageData.body);
      break;
    case '.ejs':
      pageContent = ejs.render(pageData.body, templateConfig, {
        filename: `${srcPath}/pages/${file}`
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
      filename: layoutFileName
    })
  );

  const formatted = prettier.format(completePage, { parser: 'html' });

  // save the html file
  fse.writeFileSync(`${destPath}/${fileData.name}.html`, formatted);
});
