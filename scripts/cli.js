import { program } from 'commander';
import { build, serve } from './build.js';

program
  .version('1.0.0')
  .option('-w, --watch', 'Watch for changes')
  .parse(process.argv);

build();

const options = program.opts();

if (options.watch) {
  console.log('Waiting for changes...');
  serve();
}
