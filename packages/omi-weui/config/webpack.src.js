const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname,'../site/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include:[
          resolve('src')
        ],
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]

      },
      {
        test: /\.scss$/,
        use: [
          'to-string-loader',
          'css-loader',
          'sass-loader'
        ]

      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'../site/index.html')
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    compress: true,
    port: 3000,
    historyApiFallback: true,
    hot: true
  }
}