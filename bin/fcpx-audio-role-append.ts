#!/usr/bin/env node
import * as fs from 'fs';
import Processor from '../processor';

// wav-ixml-append encode -i in.wav -o out.wav -t trackName

// params
const options = require('minimist')(process.argv.slice(2));
console.log(options);
if (options.i && options.o && options.t && options._.length > 0 && options._[0]== 'encode') {
} else {
  console.log(`usage:
    fcpx-audio-role-append encode -i in.wav -o out.wav -t trackName
`);
  process.exit(0);
}

const input = options.i;
const output = options.o;
const trackName = options.t;

const processor = new Processor();
processor.append(input, trackName, output).then((out: string) => {
  if (out) {
    console.log(`${out}`);
  }
});
