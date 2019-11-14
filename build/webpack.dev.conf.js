var merge = require('webpack-merge');
var baseConfig = require('./webpack.base.conf');
var path = require('path');
var webpack = require('webpack');
module.exports = merge(baseConfig, {
    devtool: 'inline-source-map', // 压缩方式
    mode: 'development',
    devServer: {
     hot: true, // 热更新
     open: true, // 自动打开页面
     contentBase: path.resolve(__dirname, '../dist'), // 告诉服务从哪提供内容
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), //开启热更新
    ]
})
