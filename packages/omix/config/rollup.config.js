import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import memory from 'rollup-plugin-memory';

const license = require('rollup-plugin-license');
const pkg = require('../package.json');
const licensePlugin = license({
	banner: " omix v" + pkg.version + "  http://omijs.org\r\nOmi === Preact + Scoped CSS + Store System + Native Support in 3kb javascript.\r\nBy dntzhang https://github.com/dntzhang \r\n Github: https://github.com/Tencent/omix\r\n MIT Licensed."
})

export default {
	input: 'src/omix.js',
	output: {
		format: 'iife',
		file: 'dist/omix.dev.js',
		name: 'omix',
		sourcemap: true,
		strict: true
	},
	plugins: [
		memory({
			path: 'src/omix.js',
			contents: `
				import Omi from './omix';
				if (typeof module!='undefined') module.exports = Omi;
				else self.Omi = Omi;
			`
		}),
		nodeResolve({
			main: true
		}),
		babel({
			sourceMap: true,
			exclude: 'node_modules/**',
			babelrc: false,
			presets: [
				['env', {
					modules: false,
					loose: true,
					exclude: ['transform-es2015-typeof-symbol'],
					targets: {
						browsers: ['last 2 versions', 'IE >= 9']
					}
				}]
			],
			plugins: [
				"transform-class-properties"
			]
		}),
		licensePlugin
	]
};
