const common = require('./webpack.common.js')
const merge = require('webpack-merge')

module.exports = merge(common, {
  devServer: { contentBase: './dist' },
  devtool: 'inline-source-map',
})
