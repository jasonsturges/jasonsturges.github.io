import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const projects = require('./src/data/projects.json');

export default {
  site: {
    title: 'NanoGen',
    description: 'Micro Static Site Generator in Node.js',
    basePath: '',
    projects,
  },
  build: {
    port: 3000,
    sourcePath: './src',
    outputPath: './build',
  },
};
