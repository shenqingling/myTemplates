const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: ['lodash'],
  },
  optimization: {
    // splitChunks: {
    //   chunks: 'all', // 指定公共 bundle 的名称。
    // },
    runtimeChunk: 'single', // webpack 在入口 chunk 中，包含了某些样板(boilerplate)，特别是 runtime 和 manifest。（译注：样板(boilerplate)指 webpack 运行时的引导代码）
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      // title: 'prod',
      template: './dist/index.html',
    }),
    new webpack.ProvidePlugin({
      _: 'lodash',
    }),
    // new webpack.NamedModulesPlugin(), // 我们还添加了 NamedModulesPlugin，以便更容易查看要修补(patch)的依赖。
    new webpack.HashedModuleIdsPlugin(),
  ],
};
