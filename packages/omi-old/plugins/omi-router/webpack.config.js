var path = require('path');
var webpack = require('webpack');
var packageJSON = require('./package.json');
/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
var ENV = process.env.npm_lifecycle_event;

var config  = {
    entry: './example/' + ENV + '/main.js',
    output: {
        // path: __dirname,
        path: path.join(__dirname, './example/' + ENV + '/'),
        filename: 'bundler.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                query: {
                    presets: 'env'
                }
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
    // Create Sourcemaps for the bundle
    // devtool: 'source-map',
};

if(ENV === 'build'||ENV === 'build-min'){
    config = {
        entry: {
            'omi-router': './index.js'
        },
        output: {
            // path: __dirname,
            path: path.join(__dirname, 'dist/'),
            library:'OmiRouter',
            libraryTarget: 'umd',
            filename:  '[name].js'
            //umdNamedDefine: true
        },
        externals: {
            "omi": 'omi'
        },
        module: {
            loaders: [
                {
                    loader: 'babel-loader',
                    test: path.join(__dirname, 'src'),
                    query: {
                        presets: 'env',
                        plugins : [
                            "transform-es3-property-literals",
                            "transform-es3-member-expression-literals"
                        ]
                    },
                }
            ]
        },
        plugins: [
            // Avoid publishing files when compilation fails
            new webpack.BannerPlugin(" OmiRouter v"+packageJSON.version+" By dntzhang \r\n Github: https://github.com/AlloyTeam/omi\r\n MIT Licensed."),
            new webpack.NoEmitOnErrorsPlugin()
        ],
        stats: {
            // Nice colored output
            colors: true
        },
        // Create Sourcemaps for the bundle
        // devtool: 'source-map',
    };

    if(ENV === 'build-min'){
        config.plugins.push(new webpack.optimize.UglifyJsPlugin());
        config.entry = {
            'omi-router.min': './index.js'
        };
    }
}

module.exports = config;
