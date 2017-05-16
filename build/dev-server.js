const path = require('path');

const express = require('express');
const webpack = require('webpack');
const opn = require('opn');

const webpackConfig = require('./webpack.dev.js');
const config = require('../config');
const Utils = require('./utils');

const app = express();
const compiler = webpack(webpackConfig);
const utils = new Utils();


let devMiddleware = require("webpack-dev-middleware")(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
});

let hotMiddleware = require("webpack-hot-middleware")(compiler, {});

app.use(devMiddleware);
app.use(hotMiddleware);

let staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
app.use(staticPath, express.static('./src'));

let url = `http://${utils.getIpAddress()}:${config.dev.port}`;
console.log(`listen at ${url}`);

app.listen(config.dev.port, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  if (config.dev.autoOpenBrowser) {
    opn(url);
  }
});
