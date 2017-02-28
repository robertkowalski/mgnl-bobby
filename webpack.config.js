const path = require('path')

module.exports = {
  entry: './_dev/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'webresources')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}
