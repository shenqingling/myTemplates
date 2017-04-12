const path = require('path');

module.exports = {
    entry: [
        './entry.js',
    ],
    output: {
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
    devtool: 'inline-source-map'
}
