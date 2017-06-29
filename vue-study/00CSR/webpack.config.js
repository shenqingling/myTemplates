const path = require('path');
const webpack = require('webpack');
const WebpackBrowserPlugin = require('webpack-browser-plugin');

module.exports = {
    entry: {
        main: [
            'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
            'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
            './app.js'
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
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
    },
    devtool: 'source-map',
    // devtool: 'inline-source-map',
    externals: {},
    devServer: {},
    // hot: true,
    plugins: [
        new WebpackBrowserPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
}
