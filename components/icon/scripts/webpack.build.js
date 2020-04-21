const path = require('path')
const glob = require('glob')
const webpack = require('webpack')
const entry = require('./entry')
const pkgName = require('../package.json')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

const config = {
  // devtool: 'source-map',
  entry: entry,
  plugins: [
    new ProgressBarPlugin()
  ],
  output: {
    path: path.resolve(__dirname, '../'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: '[name]',
    libraryExport: "default",
    globalObject: 'this'
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        'to-string-loader',
        'css-loader',
        {
          loader: 'resolve-url-loader'
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,

            // mdc-web doesn't use sass-loader's normal syntax for imports
            // across modules, so we add all module directories containing
            // mdc-web components to the Sass include path
            // https://github.com/material-components/material-components-web/issues/351
            includePaths: glob.sync(path.join(__dirname, '../node_modules/@material')).map((dir) => path.dirname(dir))

          }
        }
      ]
    },
    {
      test: /\.css$/,
      use: [
        'to-string-loader',
        'css-loader',
        {
          loader: 'resolve-url-loader'
        }
      ]
    },
    {
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'resolve-url-loader'
        },
        'less-loader'
      ]
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: "url-loader"
    },
    {
      test: /\.[t|j]sx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }
    ]
  },
  watch: process.argv[3] === 'demo',
  externals: {
    'omi': {
      commonjs: "omi",
      commonjs2: "omi",
      amd: "omi",
      root: "Omi"
    }
  }
}

const compilation = webpack(config, (err, stats) => { // Stats Object
  if (err || stats.hasErrors()) {
    // Handle errors here
  }
  // Done processing
})

compilation.hooks.done.tap('buildModule',function(){

})
