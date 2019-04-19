const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  //-- live server
  devServer: {
    compress: false,
    port: 9000,
    open: true
  },
  // source-maps
  devtool: 'inline-source-map'
});