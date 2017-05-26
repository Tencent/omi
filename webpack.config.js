var path = require('path');
var webpack = require('webpack');
var packageJSON = require('./package.json');
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

if(ENV === 'build'||ENV === 'build-min'){
    config = {
        entry: {
            omi: './src/index.js',
            'omi.lite': './src/index.lite.js',
            'omi.mustache': './src/index.mustache.js',
            'omi.art': './src/index.art.js'
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
            new webpack.BannerPlugin(" Omi v"+packageJSON.version+" By dntzhang \r\n Github: https://github.com/AlloyTeam/omi\r\n MIT Licensed."),
            new webpack.NoErrorsPlugin()
        ],
        stats: {
            // Nice colored output
            colors: true
        },
        // Create Sourcemaps for the bundle
       // devtool: 'source-map',
    };

     if(ENV === 'build-min'){
        config.plugins.push(new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8 : false
            },
            mangle: {
                screw_ie8: false
            },
            output: { screw_ie8: false }
        }));
        config.entry = {
            'omi.min': './src/index.js',
            'omi.lite.min': './src/index.lite.js',
            'omi.mustache.min': './src/index.mustache.js',
            'omi.art.min': './src/index.art.js'
        };
    }
}else if(ENV==='todomvc'){
    config.entry = './' + ENV + '/js/main.js';
    config.output.path = './' + ENV + '/';
}else{
    config.entry = './example/' + ENV + '/main.js';
    config.output.path = './example/' + ENV + '/';
}


//console.log(ENV);

module.exports = config;
