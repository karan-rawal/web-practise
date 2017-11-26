
let Path = require('path');
let Webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');

let DIST_DIR = Path.resolve(__dirname, 'dist');
let SRC_DIR = Path.resolve(__dirname, 'src');

let config = {
    entry: SRC_DIR + '/js/index.js',
    output: {
        filename: 'js/bundle.js',
        path: DIST_DIR,
        publicPath: DIST_DIR
    },
    devtool: 'source-map',
    devServer: {
        contentBase: DIST_DIR,
        hot: true,
        inline: true,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: SRC_DIR + '/index.html',
            filename: DIST_DIR + '/index.html'
        })
    ]
}

module.exports = config;