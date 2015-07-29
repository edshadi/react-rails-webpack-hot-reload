var webpack = require('webpack')
  , path = require('path')
  , nodeModulesDir = path.join(__dirname, 'node_modules')
  , WebpackNotifierPlugin = require('webpack-notifier');

var config = {
 entry: [
  'webpack-dev-server/client?http://localhost:8080/assets/build/',
  'webpack/hot/only-dev-server',
   './app/assets/javascripts/jsx/app.jsx'
 ],
 output: {
  // Depending on which version you're using, the most recent one adds .self on each asset link. So app.js is served as app.self.js.
  // This app uses the lates and therefore we need to serve it as app.sef.js
  filename: 'app.self.js',
  path: './app/assets/javascripts/build/',
  publicPath: 'http://localhost:8080/assets/build/' // Required for webpack-dev-server
 },
 resolve: {
   extensions: ['', '.js', '.json', '.jsx']
 },
 plugins: [
  new WebpackNotifierPlugin(),
  new webpack.NoErrorsPlugin()
],
devtool: 'eval',
module: {
  loaders: [{
   test: /\.jsx$|\.js$/,
   loaders: ['react-hot', 'jsx-loader', 'babel-loader'],
   exclude: [nodeModulesDir]
 }]
}
};

module.exports = config;
