var path = require('path');
var webpack = require("webpack");
var commonChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var projectConfig = require('./project.js');

/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
var ENV = process.env.npm_lifecycle_event;

var config  = {
    entry: {
        index: './src/js/index.js',
        other: './src/js/other.js'
    },
    //dist命令使用下面的config
    //output: {
    //    filename: '[name].[chunkhash:8].js'
    //},
    //dev使用下面的
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
            {test: /\.html|\.css$/, loader: "string-loader"},
            {
                test: /\.scss$/,
                use: [
                    //{
                    //    // creates style nodes from JS strings
                    //    loader: "style-loader"
                    //},
                    {
                        loader: "css-loader?-url" // translates CSS into CommonJS
                    }, {
                        loader: "sass-loader" // compiles Sass to CSS
                    }]
            }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    }
    // Create Sourcemaps for the bundle
    //devtool: 'source-map'
};

if(ENV === 'dist') {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
    config.entry = {
        index: './src/js/index.js',
        other: './src/js/other.js',
        omi: ['omi'],
        vendor: ['./src/common/class_list.js']
    }
    config.plugins[1] = new commonChunkPlugin({name: ['omi', 'vendor'], minChunks: Infinity});
    config.output.filename = '[name].[chunkhash:8].js';

    config.module.rules[1] = {test: /\.html|\.css$/, loader: "cdn-replace-loader?cdn="+projectConfig.cdn}
}else{
    config.entry.vendor = ['omi','./src/common/class_list.js'];
    config.output.filename = '[name].js';
    config.plugins[1] = new commonChunkPlugin({
        name:"vendor",
        filename:"vendor.js"
    })
}


module.exports = config;