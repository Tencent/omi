import nodeResolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import memory from "rollup-plugin-memory";
import commonjs from "rollup-plugin-commonjs";

var ENV = process.argv[5]

export default {
	input: "examples/" + ENV + "/main.js",
	output: {
		format: "iife",
		file: "examples/" + ENV + "/b.js",
		name: "omiv",
		sourcemap: true,
		strict: true
	},
	plugins: [
		memory({
			path: "src/omiv.js",
			contents: `
				import Omiv from './omiv';
				if (typeof module!='undefined') module.exports = Omiv;
				else self.Omiv = Omiv;
			`
		}),
		nodeResolve({
			main: true
		}),
		commonjs({
				include: 'node_modules/**'
		}),
		babel({
			sourceMap: true,
			exclude: "node_modules/**",
			babelrc: false,
			presets: [
				[
					"env",
					{
						modules: false,
						loose: true,
						exclude: ["transform-es2015-typeof-symbol"],
						targets: {
							browsers: ["last 2 versions", "IE >= 9"]
						}
					}
				]
			],
			plugins: [
				"transform-decorators-legacy",
				"transform-class-properties",
				["transform-react-jsx", { pragma: "Omiv.h" }]
			]
		})
	]
};
