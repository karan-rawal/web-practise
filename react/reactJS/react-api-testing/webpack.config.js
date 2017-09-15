const Webpack = require('webpack');
const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST_DIR = Path.resolve(__dirname, 'dist');
const SRC_DIR = Path.resolve(__dirname, 'src');

const config = {
    entry: `${SRC_DIR}/main.jsx`,
    output: {
        filename: 'bundle.js',
        path: DIST_DIR,
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${SRC_DIR}/index.html`,
            filename: `${DIST_DIR}/index.html`,
        }),
        new Webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                use: 'babel-loader',
                exclude: /node_modules/,
                test: /\.jsx?$/,
            },
        ],
    },
    devServer: {
        hot: true,
        inline: true,
        open: true,
    },
};

module.exports = config;
