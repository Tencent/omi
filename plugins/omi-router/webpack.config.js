var path = require('path');
var webpack = require('webpack');

/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
var ENV = process.env.npm_lifecycle_event;

var config  = {
    entry: './example/' + ENV + '/main.js',
    output: {
        // path: __dirname,
        path: './example/' + ENV + '/',
        filename: 'bundler.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                query: {
                    presets: 'es2015'
                }
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
    },
    // Create Sourcemaps for the bundle
    // devtool: 'source-map',
};

module.exports = config;
