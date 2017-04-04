var path = require('path');
var webpack = require("webpack");
var commonChunkPlugin = webpack.optimize.CommonsChunkPlugin;

var config  = {
    entry: {
        index: './src/page/a/main.js'
    },
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
                    presets: ['es2015', "stage-0"],
                    //support ie8
                    plugins : [
                        "transform-es3-property-literals",
                        "transform-es3-member-expression-literals"
                    ]
                },
                exclude: /node_modules/
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

    }
    // Create Sourcemaps for the bundle
    //devtool: 'source-map'
};


//config.plugins.push(new webpack.optimize.UglifyJsPlugin());


module.exports = config;