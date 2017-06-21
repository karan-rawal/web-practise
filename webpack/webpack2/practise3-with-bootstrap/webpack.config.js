let Path = require('path');
let Webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let DIST_DIR = Path.resolve(__dirname, 'dist');
let SRC_DIR = Path.resolve(__dirname, 'src');

let config = {
    entry: SRC_DIR + '/js/main.js',
    output: {
        filename: 'js/bundle.js',
        path: DIST_DIR + '/public',
        publicPath: DIST_DIR + '/public'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: DIST_DIR,
        hot: true,
        open: true,
        inline: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(scss)$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(jpg)$/,
                use: [{
                    loader: 'file-loader?name=[name].[ext]&publicPath=public/&outputPath=images/'
                }]
            },
            {
                test: /\.(woff2|woff|ttf|eot|svg|otf)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loaders: ["file-loader?name=[name].[ext]&publicPath=../&outputPath=fonts/"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: SRC_DIR + '/index.html',
            filename: DIST_DIR + '/index.html'
        }),
        new Webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("css/style.css")
    ]
};

module.exports = config;