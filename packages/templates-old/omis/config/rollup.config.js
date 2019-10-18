import nodeResolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import memory from "rollup-plugin-memory";

const license = require("rollup-plugin-license");
const pkg = require("../package.json");
const licensePlugin = license({
	banner:
		" omis v" +
		pkg.version +
		"  https://tencent.github.io/omi/\r\nOmi === Preact + Scoped CSS + Store System + Native Support in 3kb javascript.\r\nBy dntzhang https://github.com/dntzhang \r\n Github: https://github.com/Tencent/omis\r\n MIT Licensed."
});

export default {
	input: "src/omis.js",
	output: {
		format: "iife",
		file: "dist/omis.dev.js",
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
