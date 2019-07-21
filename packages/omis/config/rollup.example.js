import nodeResolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import memory from "rollup-plugin-memory";
import commonjs from "rollup-plugin-commonjs";

//var ENV = process.env.npm_lifecycle_event;

var ENV = process.argv[5]

export default {
	input: "examples/" + ENV + "/main.js",
	output: {
		format: "iife",
		file: "examples/" + ENV + "/b.js",
		name: "omis",
		sourcemap: true,
		strict: true
	},
	plugins: [
		memory({
			path: "src/omis.js",
			contents: `
				import Omis from './omis';
				if (typeof module!='undefined') module.exports = Omis;
				else self.Omis = Omis;
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
				["transform-react-jsx", { pragma: "Omis.h" }]
			]
		})
	]
};
