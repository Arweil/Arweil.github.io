const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webapckBaseConfig = require('./webpack.base');
const config = require('../config');
const Utils = require('./utils');

const utils = new Utils();

let webpackProdConfig = merge(webapckBaseConfig, {
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].js'),
    chunkFilename: utils.assetsPath('js/[id].js')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: '/node_modules/',
        use: ExtractTextPlugin.extract({
          fallback: [{
            loader: 'style-loader',
          }],
          use: [{
            loader: 'css-loader'
          }, {
            loader: 'postcss-loader',
          }]
        })
      },
      {
        test: /\.less$/,
        exclude: '/node_modules/',
        use: ExtractTextPlugin.extract({
          fallback: [{
            loader: 'style-loader',
          }],
          use: [{
            loader: 'css-loader',
          }, {
            loader: 'postcss-loader',
          }, {
            loader: 'less-loader',
          }]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].css')
    }),
    new OptimizeCSSPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('prod')
    }),
    new webpack.BannerPlugin(config.build.bannerTxt),//脚本头部文案
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer
        ]
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
    //打包第三方插件
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    //打包自定义公共脚本
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor'],
    })
  ]
});

//npm run build --report
if (config.build.bundleAnalyzerReport) {
  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  webpackProdConfig.plugins.push(new BundleAnalyzerPlugin())
}

config.pages.tpls.forEach((item) => {
  let option = {
    title: item.title,
    filename: item.filename,
    template: item.template
  };
  if (item.chunks.length > 0) {
    option.chunks = item.chunks;
  }
  option.favicon = config.pages.favicon;
  option.inject = config.pages.inject;
  option.minify = config.pages.minify;
  webpackProdConfig.plugins.push(new HtmlWebpackPlugin(option))
});

module.exports = webpackProdConfig;
