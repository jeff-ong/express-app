'use strict';

const path = require('path');
const webpack = require('webpack');

const config = {
  target: "node",
  output: {
    path: path.join(__dirname, './public/javascripts/'),
    filename: 'app.bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    exprContextCritical: false, // Suppress "The request of a dependency is an expression"
    rules: [
      {
        test: /\.(js|jsx)$/,
        loaders: 'babel-loader',
        include: path.join(__dirname, 'client')
      }
    ]
  }
};

config.entry = './client/App';
config.mode = 'production';

module.exports = config;
