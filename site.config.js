import { createRequire } from "module";
const require = createRequire(import.meta.url);
const projects = require("./src/data/projects.json")

export default {
  site: {
    title: 'NanoGen',
    description: 'Micro Static Site Generator in Node.js',
    basePath: process.env.NODE_ENV === 'production' ? '/nanogen' : '',
    projects
  },
  build: {
    outputPath: process.env.NODE_ENV === 'production' ? './docs' : './public'
  }
};
