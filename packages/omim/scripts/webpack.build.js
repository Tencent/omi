const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const fs = require('fs');

const name = process.argv[2]
let library = name.replace(/-(\w)/g, ($, $1) => {
  return $1.toUpperCase()
})

library = 'M' + library.substr(0, 1).toUpperCase() + library.substr(1, library.length)

const config = {
  devtool: 'source-map',
  entry: {
    [name]: './src/' + name + '/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, '../src/' + name),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: library,
    libraryExport: "default" 
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        'to-string-loader',
        'css-loader',
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
      test: /\.[t|j]sx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }
    ]
  },
  externals: {
    'omi': {
      commonjs: "omi",
      commonjs2: "omi",
      amd: "omi",
      root: "Omi"
    }
  }
}

// if (name !== 'icon') {
//   config.externals['../icon'] = {
//     commonjs: "@omim/icon",
//     commonjs2: "@omim/icon",
//     amd: "@omim/icon",
//     root: "MIcon"
//   }
// }
webpack(config, (err, stats) => { // Stats Object
  if (err || stats.hasErrors()) {
    // Handle errors here
  }
  // Done processing

});
