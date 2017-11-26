
const Path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        test: /\.jsx$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: `${SRC_DIR}/index.html`,
      filename: `${DIST_DIR}/index.html`,
    }),
  ],
};

module.exports = config;
