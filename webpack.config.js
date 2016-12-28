const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/client',
  output: {
    path: './src/public/',
    filename: 'app.js',
    sourceMapFilename: 'app.map'
  },
  devtool: '#source-map',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  }
}
