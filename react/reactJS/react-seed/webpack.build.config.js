/* eslint-disable */
const Path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// latest version of webpack causing some issues when uglifying.
// hence below plugin.
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
/* eslint-enable */

const DIST_DIR = Path.resolve(__dirname, 'dist');
const SRC_DIR = Path.resolve(__dirname, 'src');

const config = {
  entry: `${SRC_DIR}/scripts/index.jsx`,
  output: {
    filename: 'scripts/[hash].js',
    path: DIST_DIR,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: DIST_DIR,
    hot: true,
    inline: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/, /\.js$/],
        use: ['babel-loader'],
        exclude: [/node_modules/],
      },
      {
        test: /\.(css|scss|sass)$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: { minimize: true },
          }, {
            loader: 'sass-loader',
          }],
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: 'file-loader?name=[hash].[ext]&outputPath=assets/fonts/&publicPath=../',
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        use: 'file-loader?name=[hash].[ext]&outputPath=assets/images/&publicPath=../',
      },
    ],
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: `${SRC_DIR}/index.html`,
      filename: `${DIST_DIR}/index.html`,
    }),
    new ExtractTextPlugin('styles/style.min.css'),
    new Webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new Webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'scripts/[hash]-common.js',
    }),
    new UglifyJsPlugin(),
    new Webpack.optimize.AggressiveMergingPlugin(),
  ],
};

module.exports = config;
