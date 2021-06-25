import nodeResolve from "rollup-plugin-node-resolve"

import typescript from 'rollup-plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
const license = require("rollup-plugin-license")
const pkg = require("../package.json")
const licensePlugin = license({
  banner: `${pkg.name} v${pkg.version} http://omijs.org\r\nFront End Cross-Frameworks Framework.\r\nBy dntzhang https://github.com/dntzhang \r\n Github: https://github.com/Tencent/omi\r\n MIT Licensed.`
});

export default {
  input: "src/index.ts",
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
    typescript(),
    commonjs(),

    licensePlugin
  ],
  //external: ['omi']
};
