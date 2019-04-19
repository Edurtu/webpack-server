const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  // source maps: inline-source-map we used in development
  devtool: 'source-map' // Importante quitar una vez todo esté funcionando
});