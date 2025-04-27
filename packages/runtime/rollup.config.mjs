// tell Node js this file should be treated as an ES module
import cleanup from 'rollup-plugin-cleanup';
import filesize from 'rollup-plugin-filesize';

export default {
  input: 'src/index.js', // entry point of the framework code
  plugins: [cleanup()], // remove comments from the generated bundle 
  output: [
    {
      file: 'dist/fwk-juti-2025.js',
      format: 'esm',
      plugins: [filesize()],
    },
  ],
}