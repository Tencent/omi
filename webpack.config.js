var path = require('path');
var webpack = require('webpack');

/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
var ENV = process.env.npm_lifecycle_event;

var config  = {
    entry: './example/todo/main.js',
    output: {
        // path: __dirname,
        path: './example/todo/',
        filename: 'bundler.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                query: {
                    presets: 'es2015',
                    plugins : [
                        "transform-es3-property-literals",
                        "transform-es3-member-expression-literals"
                    ]
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

if(ENV === 'build'){
    config = {
        entry: {
            omi: './src/index.js',
            'omi.lite': './src/index.lite.js'
        },
        output: {
            // path: __dirname,
            path: 'dist/',
            library:'Omi',
            libraryTarget: 'umd',
            filename:  '[name].js'
            //umdNamedDefine: true
        },
        module: {
            loaders: [
                {
                    loader: 'babel-loader',
                    test: path.join(__dirname, 'src'),
                    query: {
                        presets: 'es2015',
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
            new webpack.BannerPlugin(" Omi v0.1.9 By dntzhang \r\n Github: https://github.com/AlloyTeam/omi\r\n MIT Licensed."),
            new webpack.NoErrorsPlugin()
        ],
        stats: {
            // Nice colored output
            colors: true
        },
        // Create Sourcemaps for the bundle
       // devtool: 'source-map',
    };
}else if(ENV === 'website') {
    config.entry = './website/js/docs_main.js';
    config.output.path = './website/dist/';
    config.module.loaders.push(  { test: /\.md$/, loader: "md-text" });
}else {
    config.entry = './example/' + ENV + '/main.js';
    config.output.path = './example/' + ENV + '/';
}


//console.log(ENV);

module.exports = config;
