const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

let config = {
  entry: [
    './src/example/app.js'
  ],
  output: {
    path: path.resolve('public'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'RJS-Drawer',
      template: './src/index.template.html',
      path: path.resolve('public'),
      filename: 'index.html'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        include: [path.resolve('src')],
        use: {
          loader: 'babel-loader',
        }
      }
    ]   
  }
}

module.exports = config
