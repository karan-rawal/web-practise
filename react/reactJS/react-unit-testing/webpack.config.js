const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Path = require('path');

const SRC_PATH = Path.resolve(__dirname, 'src');
const DIST_PATH = Path.resolve(__dirname, 'dist');

const config = {
  entry: `${SRC_PATH}/Main.jsx`,
  output: {
    filename: 'js/bundle.js',
    publicPath: '/',
    path: DIST_PATH,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/, /\.spec\.jsx?$/],
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
  devtool: 'sourcemap',
  devServer: {
    hot: true,
    inline: true,
    contentBase: DIST_PATH,
    open: true,
  },
};

module.exports = config;
