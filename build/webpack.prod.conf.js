var merge = require('webpack-merge');
var baseConfig = require('./webpack.base.conf');
var path = require('path');
var webpack = reuire('webpack');
module.exports = merge(baseConfig, {
    devtool: 'source-map', // 压缩方式
    mode: 'production',
    plugins: [
    ]
})
