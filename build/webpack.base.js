const path = require('path');

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const config = require('../config');
const Utils = require('./utils');

const utils = new Utils();

let resolve = (dir) => {
  return path.join(__dirname, '..', dir);
};

module.exports = {
  devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
  entry: config.entry,
  output: {
    filename: '[name].js',//打包后输出文件的文件名
    publicPath: config.dev.assetsPublicPath
  },
  module: {//在配置文件里添加JSON loader
    rules: [
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [resolve('src')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[ext]')
        }
      }
    ]
  }
};
