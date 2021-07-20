import { resolve } from 'path'
import Banner from 'vite-plugin-banner'

var pkg = require('./package.json')
var licensePlugin = Banner(
  `${pkg.name} v${pkg.version} http://omijs.org\r\nFront End Cross-Frameworks Framework.\r\nBy dntzhang https://github.com/dntzhang \r\n Github: https://github.com/Tencent/omi\r\n MIT Licensed.`
)

export default {
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
  build: {
    sourcemap: true,
    minify: false,
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'index'
    },
    rollupOptions: {
      external: ['omi'],
      input: ['./src/index.tsx'],
      output: [
        {
          dir: null,
          file: resolve(__dirname, './dist/index.umd.js'),
          format: 'umd',
          globals: {
            omi: 'omi'
          }
        },
        {
          dir: null,
          file: resolve(__dirname, './dist/index.esm.js'),
          format: 'es'
        }
      ],
    },
  },
  plugins: [licensePlugin],
}
