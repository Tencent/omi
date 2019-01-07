const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(require('./webpack.base'), {
    mode: 'production',
    optimization: {
        minimizer: [
            new TerserPlugin({
                exclude: /\.min\.js$/,
                cache: true,
                parallel: true,
                sourceMap: false,
                terserOptions: {
                    warnings: false
                }
            }),
            new OptimizeCSSAssetsPlugin()
        ],
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'common',
                    priority: 10,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    }
})