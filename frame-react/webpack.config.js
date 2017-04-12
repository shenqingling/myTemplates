const path = require('path');
const WebpackBrowserPlugin = require('webpack-browser-plugin');

module.exports = {
    entry: [
        './entry.js',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader'
        }]
    },
    devServer: {
        // publicPath: path.resolve(__dirname, '/dist'),
        // contentBase: ''
    },
    devtool: 'inline-source-map',
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router': 'ReactRouter',
    },
    plugins: [
        new WebpackBrowserPlugin()
    ],
}
