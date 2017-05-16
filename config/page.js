//暂时无法应对非常多的html文件
module.exports = {
  favicon: '',
  inject: 'body',
  minify: false,
  tpls: [
    {
      title: '个人介绍',
      filename: 'index.html',
      template: 'index.html',
      chunks: []
    }
  ]
};
