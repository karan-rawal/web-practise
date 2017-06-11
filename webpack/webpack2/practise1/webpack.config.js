var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var SRC_DIR = path.resolve(__dirname, "./src");
var DIST_DIR = path.resolve(__dirname, "./dist");

console.log(DIST_DIR)

module.exports = {
    entry: SRC_DIR + '/app.js',
    output: {
        path: DIST_DIR,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"],
                    publicPath: '/dist'
                })
            }
        ]
    },
    devServer: {
        contentBase: DIST_DIR,
        compress: true,
        port: 8080,
        stats: 'errors-only',
        open : true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "My webpack practise",
            minify: {
                collapseWhitespace: false
            },
            hash: true,
            template: SRC_DIR + "/index.ejs"
        }),
        new ExtractTextPlugin({
            filename : "styles.css",
            disable : false,
            allChunks : false
        })
    ]
}