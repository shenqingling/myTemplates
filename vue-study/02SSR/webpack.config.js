const path = require('path');
const webpack = require('webpack');

module.exports = {
    target: 'node', // !different
    entry: './entry-server.js',
    output: {
        libraryTarget: 'commonjs2', // !different
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
                    loader: 'style-loader'
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
