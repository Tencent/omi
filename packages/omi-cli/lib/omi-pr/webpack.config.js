const path = require("path");
const webpack = require("webpack");
const commonChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const fs = require("fs");
const omiConfig = require(path.resolve(".") + "/omi.config.js");

let fileList = {};

walk(path.resolve(".") + "/src/page");

var config = {
	entry: fileList,
	output: {
		filename: "[name].js"
	},
	//watch: true,
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				query: {
					presets: ["babel-preset-es2015", "babel-preset-stage-0"].map(
						require.resolve
					),
					//support ie8
					plugins: [
						"babel-plugin-transform-es3-property-literals",
						"babel-plugin-transform-es3-member-expression-literals"
					].map(require.resolve)
				},
				exclude: /(node_modules|bower_components)/
			},
			{ test: /\.html|\.css$/, loader: "string-loader" }
		]
	},
	plugins: [
		// Avoid publishing files when compilation fails
		new webpack.NoEmitOnErrorsPlugin()
	],
	stats: {
		// Nice colored output
		colors: true
	},
	externals: {},
	resolve: {
		modules: [
			path.join(__dirname, "..", "..", "node_modules"),
			path.join(__dirname, "..", "node_modules"),
			"node_modules",
			path.join(__dirname, "node_modules")
		]
	},
	resolveLoader: {
		modules: [
			path.join(__dirname, "..", "..", "node_modules"),
			path.join(__dirname, "..", "node_modules"),
			"node_modules",
			path.join(__dirname, "node_modules")
		]
	}
	// Create Sourcemaps for the bundle
	//devtool: 'source-map'
};

config.plugins.push(new webpack.optimize.UglifyJsPlugin());

function walk(path) {
	var dirList = fs.readdirSync(path);
	dirList.forEach(function(item) {
		if (fs.statSync(path + "/" + item).isDirectory()) {
			fileList[item] = path + "/" + item + "/main.js";
			//walk(path + '/' + item);
		} else {
			//fileList.push(path + '/' + item);
		}
	});
}

omiConfig.webpackProcessing && omiConfig.webpackProcessing(config);

module.exports = config;
