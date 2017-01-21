var path = require('path');
var webpack = require('webpack');
module.exports={
    module:{
        loaders:[{
            test:/\.js$/,
            loader:'babel',
            query:{
                presets:['es2015']
            }
        }]
    }
};