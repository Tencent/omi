const path = require('path');
const glob = require('glob');

var argv;
try {
  argv = JSON.parse(process.env.npm_config_argv).original;
} catch (ex) {
  argv = process.argv;
}

module.exports = {
  // externals:{
  //   "@omim/icon":{
  //     commonjs: "../icon",
  //     commonjs2: "../icon",
  //     amd: "../icon",
  //     root: "MIcon"
  //   }
  // },
  entry: './demos/' + argv[1] + '/index.js',
  output: {
    path: path.resolve(__dirname, '../demos/' + argv[1]),
    filename: 'bundle.js'
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
    // {
    //   test: /\.scss$/,
    //   use: [
    //     "style-loader", // creates style nodes from JS strings
    //     "css-loader", // translates CSS into CommonJS
    //     {
    //       loader: 'sass-loader',
    //       options: {
    //         sourceMap: true,

    //         // mdc-web doesn't use sass-loader's normal syntax for imports
    //         // across modules, so we add all module directories containing
    //         // mdc-web components to the Sass include path
    //         // https://github.com/material-components/material-components-web/issues/351
    //         includePaths: glob.sync(path.join(__dirname, '../node_modules/@material')).map((dir) => path.dirname(dir))

    //       }
    //     }
    //   ]
    // },
    {
      test: /\.[t|j]sx?$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
      options: {
        configFile: "tsconfig.demo.json"
      }
    }]
  }
};