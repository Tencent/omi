import babel from 'rollup-plugin-babel';

export default {
	input: 'devtools/index.js',
	output: {
		format: 'umd',
		file: 'devtools.js',
		name: 'OmiDevTools',
		sourcemap: true,
		globals: {
			Omi: 'Omi'
		}
	},
	external: ['omi'],
	plugins: [
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
			]
		})
	]
};
