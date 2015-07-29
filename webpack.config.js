var webpack = require('webpack')
  , path = require('path')
  , nodeModulesDir = path.join(__dirname, 'node_modules')
  , WebpackNotifierPlugin = require('webpack-notifier');

var config = {
 entry: {
   app: './app/assets/javascripts/jsx/app.jsx'
 },
 output: {
   filename: './app/assets/javascripts/build/app.js'
 },
 resolve: {
   extensions: ['', '.js', '.json', '.jsx']
 },
 plugins: [
  new WebpackNotifierPlugin()
],
devtool: 'eval',
 module: {
   noParse: [],
   loaders: [{
     test: /\.jsx$|\.js$/,
     loaders: ['jsx-loader', 'babel-loader'],
     exclude: [nodeModulesDir]
   }]
 }
};

module.exports = config;
