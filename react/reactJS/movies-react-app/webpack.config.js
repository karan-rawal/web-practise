let Path = require('path'); //this is the module that is included with npm
let Webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let DIST_DIR = Path.resolve(__dirname, 'dist');
let SRC_DIR = Path.resolve(__dirname, 'src');

let config = {
    entry: SRC_DIR + '/js/main.js',
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
            },
            {
                test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: 'file-loader?name=[name]-[hash].[ext]&outputPath=fonts/&publicPath=../'
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: 'file-loader?name=[name]-[hash].[ext]&outputPath=images/&publicPath=../'
            }
        ]
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: SRC_DIR + '/index.html',
            filename: DIST_DIR + '/index.html'
        }),
        new ExtractTextPlugin("css/style.css")
    ]
}

module.exports = config;