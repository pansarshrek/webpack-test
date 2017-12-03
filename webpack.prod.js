const common = require('./webpack.common.js')
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin')
const merge = require('webpack-merge')

module.exports = merge(common, {
  plugins: [ new UglifyWebpackPlugin() ]
})
