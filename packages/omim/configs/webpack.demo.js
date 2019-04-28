const path = require('path');

module.exports = {
  entry: './demos/simple/index.js',
  output: {
    path: path.resolve(__dirname, '../demos/simple'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [{
        test: /\.scss$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
    }]
}
};