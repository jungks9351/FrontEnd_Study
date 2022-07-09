const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: `${path.resolve(__dirname, 'src')}/index.tsx`,
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${path.resolve(__dirname, 'public')}/index.html`,
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
      emitWarning: false,
    }),
    new ErrorOverlayPlugin(),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
  },
};
