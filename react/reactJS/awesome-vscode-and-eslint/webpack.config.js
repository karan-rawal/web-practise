const Webpack = require('webpack');
const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST_PATH = Path.resolve(__dirname, 'dist');
const SRC_PATH = Path.resolve(__dirname, 'src');

const config = {
  entry: `${SRC_PATH}/Main.jsx`,
  output: {
    filename: 'js/bundle.js',
    path: DIST_PATH,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    inline: true,
    hot: true,
    contentBase: DIST_PATH,
  },
  devtool: 'sourcemap',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: `${DIST_PATH}/index.html`,
      template: `${SRC_PATH}/index.html`,
    }),
  ],
};

module.exports = config;
