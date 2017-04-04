var path = require('path');
var webpack = require("webpack");
var commonChunkPlugin = webpack.optimize.CommonsChunkPlugin;

var omiConfig = require(path.resolve('.')+"/omi.config.js");

var config  = {
    entry: omiConfig.entry,
    output: {
        filename: '[name].js'
    },
    //watch: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ["babel-preset-es2015", "babel-preset-stage-0"].map(require.resolve),
                    //support ie8
                    plugins : [
                        "babel-plugin-transform-es3-property-literals",
                        "babel-plugin-transform-es3-member-expression-literals"
                    ].map(require.resolve)
                },
                exclude: /(node_modules|bower_components)/
            },
            {test: /\.html|\.css$/, loader: "string-loader"}
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
    externals: {

    },
    resolve: {
        modules: [
            path.join(__dirname, '..', 'node_modules'),
            'node_modules',
            path.join(__dirname,  'node_modules')
        ]
    },
    resolveLoader: {
        modules: [
            path.join(__dirname, '..', 'node_modules'),
            'node_modules',
            path.join(__dirname,  'node_modules')
        ]
    }
    // Create Sourcemaps for the bundle
    //devtool: 'source-map'
};


config.plugins.push(new webpack.optimize.UglifyJsPlugin());


module.exports = config;