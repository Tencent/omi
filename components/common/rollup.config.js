import typescript from '@rollup/plugin-typescript'
import license from 'rollup-plugin-license'

const pkg = require('./package.json')
const licensePlugin = license({
  banner: `${pkg.name} v${pkg.version} http://omijs.org\r\nFront End Cross-Frameworks Framework.\r\nBy dntzhang https://github.com/dntzhang \r\n Github: https://github.com/Tencent/omi\r\n MIT Licensed.`
})

export default {
  input: 'src/index.ts',
  output: [
    {
      format: 'es',
      file: './dist/index.esm.js',
      name: pkg.name,
      sourcemap: true,
      strict: true
    },
    {
      format: 'umd',
      file: './dist/index.js',
      name: pkg.name,
      sourcemap: true,
      strict: true
    }
  ],
  plugins: [typescript({ tsconfig: './tsconfig.json' }), licensePlugin],
  external: ['omi', '@ctrl/tinycolor']
}
