var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");

var DIR_DIST = path.resolve(__dirname, "dist");
var DIR_SRC = path.resolve(__dirname, "src");

var isProd = process.env.ENV == 'prod';
var isDev = process.env.ENV == 'dev';

var devPlugins = [
    new webpack.ProvidePlugin({
        $ : 'jquery'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
        filename: DIR_DIST + '/index.html',
        template: DIR_SRC + '/index.html',
    })
];

var prodPlugins = [
    new HtmlWebpackPlugin({
        filename: DIR_DIST + '/index.html',
        template: DIR_SRC + '/index.html'
    }),
    new webpack.optimize.UglifyJsPlugin({
        minimize : true
    })
];

var config = {
    entry: "./src/app/app.js",
    output: {
        filename: "bundle.js",
        path: DIR_DIST + '/app/',
        publicPath: DIR_DIST
    },
    plugins: isDev? devPlugins : prodPlugins,
    devServer: {
        hot: isDev,
        inline: isDev,
        contentBase: DIR_DIST,
        open: isDev
    }
};

if(isDev){
    config.devtool = "source-map"
}

module.exports = config;