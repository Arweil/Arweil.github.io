const path = require('path');

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const webapckBaseConfig = require('./webpack.base.js');
const config = require('../config');

module.exports = merge(webapckBaseConfig, {
  entry: () => {
    Object.keys(config.entry).forEach((key) => {
      config.entry[key] = ['webpack-hot-middleware/client?noInfo=true&reload=true'].concat(config.entry[key]);
    });
    return config.entry;
  },
  output: {
    filename: '[name].js',//打包后输出文件的文件名
    publicPath: config.dev.assetsPublicPath
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: /\.less/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('dev')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer
        ]
      }
    }),
    new HtmlWebpackPlugin({
      title: 'fuck',
      filename: 'index.html',
      template: 'index.html',
      inject: 'body'
    })
  ]
});
