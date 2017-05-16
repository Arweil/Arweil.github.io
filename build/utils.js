const path = require('path');
const config = require('../config');

class Utils {
  constructor () {
  }

  //获取本机IP地址
  getIpAddress () {
    let interfaces = require('os').networkInterfaces();
    for(let devName in interfaces){
      let iface = interfaces[devName];
      for(let i=0;i<iface.length;i++){
        let alias = iface[i];
        if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){
          return alias.address;
        }
      }
    }
  }

  assetsPath (_path) {
    let assetsSubDirectory = process.env.NODE_ENV === 'prod'
      ? config.build.assetsSubDirectory
      : config.dev.assetsSubDirectory
    return path.posix.join(assetsSubDirectory, _path)
  }
}

module.exports = Utils;
