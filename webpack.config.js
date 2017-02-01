const path = require('path')

module.exports = {
  entry: './src-webresources/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'webresources', 'js')
  },

  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
    }]
  }
}
