const webpack = require("webpack");
const path = require("path");
const fs = require("fs");
let webpackConfig = require("./webpack.config.js");
const omiConfig = require(path.resolve(".") + "/omi.config.js");

const dir = path.resolve(".");
const compiler = webpack(webpackConfig);
const jsdom = require("jsdom").jsdom;
const window = jsdom().defaultView;
const keys = Object.keys(webpackConfig.entry);
const len = keys.length;
let index = 0;
let list = [];

const build = () => {
	compiler.run((err, stats) => {
		if (err) {
			console.error(err);
			return;
		}

		const jsonStats = stats.toJson();

		if (jsonStats.errors.length > 0) {
			const error = new Error(jsonStats.errors[0]);
			error.errors = jsonStats.errors;
			error.warnings = jsonStats.warnings;
			console.log(jsonStats);
			return;
		}

		getHTMLCSS(keys[index]);
	});
};

const getHTMLCSS = name => {
	window.document.head.innerHTML = "";
	window.document.body.innerHTML = "";
	window.Omi = null;
	let scriptEl = window.document.createElement("script");

	scriptEl.onload = function() {
		fs.unlinkSync(scriptEl.src);
		list.push([
			window.document.head.innerHTML,
			'<div id="__omi">' +
				window.document.body.innerHTML.replace(
					'<script src="' + scriptEl.src + '.js"></script>',
					""
				) +
				"</div>",
			scriptEl.src
		]);
		index++;
		index < len && getHTMLCSS(keys[index]);

		if (index === len) {
			cpLite();
		}
	};
	scriptEl.src = name + ".js";
	window.document.body.appendChild(scriptEl);
};

const cpLite = () => {
	webpackConfig.externals.omi = "Omi";
	const compilerEncludeOmi = webpack(webpackConfig);

	compilerEncludeOmi.run((err, stats) => {
		if (err) {
			console.error(err);
			return;
		}

		const jsonStats = stats.toJson();

		if (jsonStats.errors.length > 0) {
			const error = new Error(jsonStats.errors[0]);
			error.errors = jsonStats.errors;
			error.warnings = jsonStats.warnings;
			console.error(err);
			return;
		}

		list.forEach(item => {
			let name = item[2],
				html = item[1],
				css = item[0];

			const content = fs.readFileSync(name, "utf-8");
			let newContent = JSON.stringify({ component: content });
			newContent = newContent.replace(
				/(\.render\([\s\S]*?\\['|"])(body)(\\['|"]\))/,
				() => {
					return RegExp.$1 + "#__omi" + RegExp.$3;
				}
			);

			if (!fs.existsSync("dist")) {
				fs.mkdirSync("dist");
			}

			let script = fs.readFileSync(
				path.resolve(__dirname, "loadjs.js"),
				"utf-8"
			);
			let tpl = fs.readFileSync(
				path.resolve(".") + "/src/page/tpl.html",
				"utf-8"
			);

			let cdn = omiConfig.cdn;
			if (!cdn) {
				cdn = "https://unpkg.com/omi@1.2.4/dist/omi.min.js";
			}

			fs.writeFileSync(
				"dist/" + name.split(".")[0] + ".html",
				template(
					tpl,
					html,
					css,
					`<script>var __OMI_DATA__=` +
						newContent +
						`</script><script>` +
						script.replace("{{omi-cdn}}", cdn) +
						`</script>`,
					"utf-8"
				)
			);
			fs.unlinkSync(name);
		});

		//http://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
		console.log("\x1b[32m");
		console.log("-------------------------------------------");
		console.log("-------------------------------------------");
		console.log("-----------Successfully Executed-----------");
		console.log("-------------------------------------------");
		console.log("-------------------------------------------");
		console.log("\x1b[37m");
	});
};

const template = (tpl, html, css, js) => {
	return tpl
		.replace("{{html}}", html)
		.replace("{{css}}", css)
		.replace("{{js}}", js);
};

module.exports = build;
