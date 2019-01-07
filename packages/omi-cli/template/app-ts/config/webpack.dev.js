const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const opn = require('opn');

opn('http://localhost:8080/')

module.exports = merge(require('./webpack.base'), {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
        , new webpack.NamedModulesPlugin()
    ]
})