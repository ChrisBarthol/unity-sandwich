var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
var ExtractTextPluginConfig = new ExtractTextPlugin('app.css', {
  allChunks: true
});
module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192', include: /img/ },
      {test: /\.csv$/, loader: 'dsv-loader'},
      {
     test: /\.css$/,
     loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
    ]
  },
  plugins: [HTMLWebpackPluginConfig, ExtractTextPluginConfig]
};
