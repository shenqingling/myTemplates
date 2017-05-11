const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: './entry.prod.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: '[name].[hash].js',
        chunkFilename: '[id].[chunkhash].js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader'
        }]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router': 'ReactRouter',
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
        })
    ],
}
