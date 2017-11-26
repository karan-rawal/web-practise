
const Path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DIST_DIR = Path.resolve(__dirname, 'dist');
const SRC_DIR = Path.resolve(__dirname, 'src');

const config = {
  entry: `${SRC_DIR}/js/index.jsx`,
  output: {
    filename: 'js/bundle.js',
    path: DIST_DIR,
    publicPath: DIST_DIR,
  },
  devtool: 'source-map',
  devServer: {
    contentBase: DIST_DIR,
    hot: true,
    inline: true,
    open: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/, /\.js$/],
        use: ['babel-loader'],
        exclude: [/node_modules/],
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          }],
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: 'file-loader?name=[name]-[hash].[ext]&outputPath=assets/fonts/&publicPath=../',
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: 'file-loader?name=[name]-[hash].[ext]&outputPath=assets/images/&publicPath=../',
      },
    ],
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: `${SRC_DIR}/index.html`,
      filename: `${DIST_DIR}/index.html`,
    }),
    new ExtractTextPlugin('css/style.css'),
  ],
};

module.exports = config;
