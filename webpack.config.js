/* global __dirname, require, module*/

const webpack = require('webpack');
const path = require('path');
const env  = require('yargs').argv.env; // use --env with webpack 2

let libraryName = 'hanzi-tsconv';

let plugins = [], outputFile;

const config = {
  entry: __dirname + '/src/hanzi-tsconv.js',
  output: {
    path: __dirname + '/dist',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'global'
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./src')],
    extensions: ['.json', '.js']
  },

  plugins: plugins
};

module.exports = config;
