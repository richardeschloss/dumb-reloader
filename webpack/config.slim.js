const webpack = require('webpack');
const { resolve: pResolve } = require('path')
const appName = 'dumbReloader'

module.exports = {
  entry: `./${appName}.js`,
  output: {
    path: pResolve('public'),
    filename: `${appName}.slim.js`
  },
  plugins: [
    // replace require('debug')() with an noop function
    new webpack.NormalModuleReplacementPlugin(/debug/, pResolve('stubs/noop.js')),
  ],
  mode: 'production',
  module: {
    rules: [
      {
        // strip `debug()` calls
        test: /\.js$/,
        loader: 'strip-loader?strip[]=debug'
      }
    ]
  }
};