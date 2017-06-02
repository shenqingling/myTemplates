const path = require('path');
const webpack = require('webpack');
const fs = require('fs');

module.exports = {
    entry: {
        main: './entry.prod.js',
    },
    output: {
        // e:\github\myTemplates\frame-react\dist\js
        path: path.resolve(__dirname, 'dist/js'),
        // 相对于服务(server-relative) 
        // https://doc.webpack-china.org/configuration/output/#output-publicpath
        publicPath: '/js/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[chunkhash].js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loaders: ["style", "css"]
        }]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router': 'ReactRouter',
        'antd': 'antd',
        '$': 'jquery'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
        }), function() {
            // index.html
            var INDEX_FILE = path.resolve(__dirname, 'dist/index.html');

            // 插件执行完毕
            this.plugin('done', status => {
                // 将新编译的common和main文件写入index.html
                fs.readFile(INDEX_FILE, (err, data) => {
                    var html = data.toString();
                    html = html.replace(/\/js\/common.[^\.]+.js/, `/js/common.${status.hash}.js`)
                    html = html.replace(/\/js\/main.[^\.]+.js/, `/js/main.${status.hash}.js`)
                    fs.writeFile(INDEX_FILE, html, err => {
                        !err && console.log('Set has success: ' + status.hash);
                    });
                })
            });
        }
    ],
}
