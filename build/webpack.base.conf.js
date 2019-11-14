var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
var VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, '../src/main.js')
  },
  output: {
    path: path.resolve(__dirname, '../src'),
    filname: '[name].[bash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.less$/,
        loader: 'less-loader', // compiles Less to CSS
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'],
        exclude: /node_modules/
      },
    ]
  },
  pligins: [
    new webpack.HashedModuleIdsPlugin(), // 解决vender后面的hash每次都改变
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html')
    }),
    new VueLoaderPlugin(),
  ],
  resolve: {
    // 能够使用户在引入模块时不带扩展
    extensions: ['.js', '.json', '.vue', 'css'],
    alias: {
        'vue$': 'vue/dist/vue.esm.js', //配置别名 确保webpack可以找到.vue文件
        '@': path.resolve(__dirname, '../src')
    }
  }
}
