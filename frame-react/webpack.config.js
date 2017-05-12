const path = require('path');
const WebpackBrowserPlugin = require('webpack-browser-plugin');

module.exports = {
    entry: {
        main: './entry.js',
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
        }]
    },
    devtool: 'inline-source-map',
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router': 'ReactRouter',
        'antd': 'antd'
    },
    plugins: [
        new WebpackBrowserPlugin(),
    ],
}
