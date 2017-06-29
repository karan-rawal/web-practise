var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var BUILD_DIR = path.resolve(__dirname, "build");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry : SRC_DIR + "/js/index.js",
    output : {
        filename : "js/bundle.js",
        path : BUILD_DIR,
        publicPath : BUILD_DIR
    },
    devServer : {
        contentBase : BUILD_DIR,
        hot : true,
        inline : true
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                use : 'babel-loader',
                exclude : /node_modules/
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : SRC_DIR + "/index.html",
            filename : BUILD_DIR + "/index.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;