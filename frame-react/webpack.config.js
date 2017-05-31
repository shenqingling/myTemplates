const path = require('path');
const webpack = require('webpack');
const WebpackBrowserPlugin = require('webpack-browser-plugin');

module.exports = {
    entry: {
        main: [
            'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
            'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
            './entry.js'
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
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
    devtool: 'source-map',
    // devtool: 'inline-source-map',
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router': 'ReactRouter',
        'antd': 'antd',
        '$': 'jquery'
    },
    devServer: {
        proxy: { // proxy URLs to backend development server
            '/v1/**': {
                target: 'https://www.easy-mock.com/mock/5911920dacb959185b0c3cbe/example',
                secure: false,
            },
        },
    },
    // hot: true,
    plugins: [
        new WebpackBrowserPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
}
