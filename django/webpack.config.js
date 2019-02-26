var path = require('path');
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  mode: 'development',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './assets/js/index'
  ],
  output: {
    path: path.resolve('./assets/webpack_bundles/'),
    filename: "[name]-[hash].js",
    publicPath: 'http://localhost:3000/assets/webpack_bundles/', // Tell django to use this URL to load packages and not use STATIC_URL + bundle_name

  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new BundleTracker({filename: './webpack-stats.json'}),
  ],
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}, // to transform JSX into JS
    ],
  },
};
