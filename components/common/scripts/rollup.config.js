import nodeResolve from "rollup-plugin-node-resolve";

import commonjs from '@rollup/plugin-commonjs';

const license = require("rollup-plugin-license");
const pkg = require("../package.json");
const licensePlugin = license({
  banner: `${pkg.name} v${pkg.version} http://omijs.org\r\nFront End Cross-Frameworks Framework.\r\nBy dntzhang https://github.com/dntzhang \r\n Github: https://github.com/Tencent/omi\r\n MIT Licensed.`
});

export default {
  input: "./src/index.esm.js",
  output: {
    format: "umd",
    file: "./src/index.js",
    name: pkg.name,
    sourcemap: true,
    strict: true
  },
  plugins: [
    nodeResolve({
    	main: true
    }),
    commonjs(),

    licensePlugin
  ],
  external: ['omi']
};
