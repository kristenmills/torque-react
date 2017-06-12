const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './demo/src/js/app.jsx',
  output: {
    path: path.join(__dirname, 'build', 'assets'),
    filename: '[name].js',
    publicPath: '/assets/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Cool Slides',
      filename: '../index.html',
      template: './demo/src/index.ejs',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
    ]
  }
}
