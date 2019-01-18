const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/',
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [new CleanWebpackPlugin(['dist'])],
});
