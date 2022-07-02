import nodeResolve from "rollup-plugin-node-resolve";

import typescript from 'rollup-plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss'
const sass = require("sass")
const fs = require('fs')
const license = require("rollup-plugin-license");
const pkg = require("../package.json");
const licensePlugin = license({
  banner: `${pkg.name} v${pkg.version} http://omijs.org\r\nFront End Cross-Frameworks Framework.\r\nBy dntzhang https://github.com/dntzhang \r\n Github: https://github.com/Tencent/omi\r\n MIT Licensed.`
});

const processSass = function(context, payload) {
  return new Promise(( resolve, reject ) => {
    sass.render({
      file: context
    }, function(err, result) {
      if( !err ) {
        resolve(result);
      } else {
        reject(err)
      }
    });
  })
}


export default {
  input: "src/index.tsx",
  output: {
    format: "es",
    file: "./src/index.esm.js",
    name: pkg.name,
    sourcemap: true,
    strict: true
  },
  plugins: [
    nodeResolve({
      main: true
    }),
    postcss({
      extract: true,
      extensions: ['css', 'scss'],
      process: processSass,
    }),
    typescript(),
    commonjs(),

    licensePlugin
  ],
  external: ['omi']
};
