'use strict';

var nodeExternals = require('webpack-node-externals');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: __dirname + '/dist',
    filename: 'index.js'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  },

  // plugins: [
  //   new CopyWebpackPlugin([
  //     {
  //       from: 'static',
  //       to: 'static'
  //     }
  //   ])
  // ],
  resolve: {
    extensions: ['.ts', 'tsx', '.js']
  },
  externals: [nodeExternals()],
  devtool: 'source-map'
};
