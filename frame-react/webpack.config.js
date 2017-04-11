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
    devtool: 'inline-source-map'
}
