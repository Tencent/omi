var path = require('path');
var webpack = require('webpack');
/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
var ENV = process.env.npm_lifecycle_event;

var config  = {
    entry: {
        'docs-cn': './src/js/docs_main_cn.js',
        'docs-en': './src/js/docs_main_en.js'
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
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                query: {
                    presets: ['es2015',"stage-0"],
                },
                exclude:/node_modules/
            },
            { test: /\.html$/, loader: "string" },
            { test: /\.css$/, loader: "string" }
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

if(ENV === 'dist'){
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
    config.entry ={
        'docs-cn': './src/js/docs_main_cn.js',
        'docs-en': './src/js/docs_main_en.js',
        omi : ['omi'],
        vendor : ['./src/common/class_list.js']
    }
    config.plugins[1] = new webpack.optimize.CommonsChunkPlugin({name:['omi','vendor'],minChunks:Infinity});
    config.output.filename = '[name].[chunkhash:8].js';
}else{
    config.entry.vendor = ['omi','./src/common/class_list.js'];
    config.output.filename = '[name].js';
    config.plugins[1] = new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.[chunkhash:8].js")
}


module.exports = config;