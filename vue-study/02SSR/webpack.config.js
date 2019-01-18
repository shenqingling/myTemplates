const path = require('path');
const webpack = require('webpack');

module.exports = {
    target: 'node', // 编译为类 Node.js 环境可用（使用 Node.js require 加载 chunk）
    entry: './entry-server.js',
    output: {
        libraryTarget: 'commonjs2', // 通过 module.exports：module.exports = xxx 导出
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.server.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader'
            }, {
                test: /\.vue$/,
                use: 'vue-loader'
            }, {
                test: /\.css$/,
                use: [{
                    loader: 'vue-style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }]
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    }
}
