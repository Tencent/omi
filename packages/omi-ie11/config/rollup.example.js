import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import memory from 'rollup-plugin-memory';

var ENV = process.env.npm_lifecycle_event;


export default {
	input: 'examples/'+ENV+'/main.js',
	output: {
		format: 'iife',
		file: 'examples/'+ENV+'/b.js',
		name: 'omi',
		sourcemap: true,
		strict: true
	},
	plugins: [
		memory({
			path: 'src/omi.js',
			contents: `
				import Omi from './omi';
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
			plugins : [ 
				'transform-decorators-legacy',
				'transform-class-properties',
				["transform-react-jsx", { "pragma":"Omi.h" }] 
			] 
		})
	]
};
