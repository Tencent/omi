import nodeResolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import memory from "rollup-plugin-memory";

const license = require("rollup-plugin-license");
const pkg = require("../package.json");
const licensePlugin = license({
	banner:
		" omiv v" +
		pkg.version +
		"  https://tencent.github.io/omi/\r\n1kb store system for Vue apps.\r\nBy dntzhang https://github.com/dntzhang \r\n Github: https://github.com/Tencent/omi\r\n MIT Licensed."
});

export default {
	external: [
		'react',
		'vue',
		'vuex'
  ],
	input: "src/omiv.js",
	output: {
		format: "iife",
		file: "dist/omiv.dev.js",
		name: "omiv",
		sourcemap: true,
		strict: true,
		globals: {
      'react': 'React'
    },
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
				"transform-class-properties"
			]
		}),
		licensePlugin
	]
};
