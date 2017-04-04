var path = require('path');
var webpack = require("webpack");
var commonChunkPlugin = webpack.optimize.CommonsChunkPlugin;


/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
var ENV = process.env.npm_lifecycle_event;

var config  = {
    entry: {
        index: './example/'+ENV+'/src/main.js'
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

if(ENV === 'dist') {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());


}

module.exports = config;