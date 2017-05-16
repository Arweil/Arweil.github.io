const path = require('path');

const page = require('./page');
const entry = require('./entry');

module.exports = {
  entry: entry,
  pages: page,
  build: {
    bannerTxt: 'Copyright Milk inc.\nHello world',
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    //npm run build --report
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    port: 3000,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    autoOpenBrowser: true,
  }
};
