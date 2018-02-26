const webpack = require('webpack')
const path = require('path')

const BUILD_DIR = path.resolve(__dirname, 'dist')
const APP_DIR = path.resolve(__dirname, 'src')

let WebpackConfig = {

  entry: APP_DIR + '/drawer.js',

  output: {
    path: BUILD_DIR,
    filename: 'drawer.min.js',
    libraryTarget: 'umd',
    library: 'Drawer'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include : APP_DIR,
        use: {
          loader: 'babel-loader'
          //config in .babelrc
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include : APP_DIR,
        use: ['eslint-loader'],
        enforce: 'pre'
      }
    ]
  }

}

if ( process.env.NODE_ENV === 'production' ) {

  WebpackConfig.externals = {
    'react': 'react',
    'react-dom': 'react-dom'
  }

  WebpackConfig.plugins = [
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true
      },
      compress: {
        warnings: false,
        screw_ie8: true
      },
      comments: false
    })
  ]
}

module.exports = WebpackConfig