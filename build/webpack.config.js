const webpack = require('webpack');
const path = require('path');

const PUBLIC_DIR = path.resolve(__dirname, '../public');
const APP_DIR = path.resolve(__dirname, '../app');

const config = {
  entry: APP_DIR + '/entry.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', 'ts', '.scss']
  },
  output: {
    path: PUBLIC_DIR,
    publicPath: '/',
    filename: 'bundle.js'
  }
};

module.exports = config;
