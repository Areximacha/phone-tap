var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: [
    './src/js/index.js'
  ],
  output: {
    path: __dirname + '/www',
    filename: '/_includes/js/index_bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js?$/,
        loader: 'standard',
        exclude: /(node_modules|bower_components|www)/
      }
    ],
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader']},
      {
        test: /\.(jpe?g|png|gif|svg|ttf)$/i,
        loader: 'file-loader',
        query: {
          name: '_includes/[path][name].[ext]',
          context: './src'
        }
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./node_modules/compass-mixins/lib")]
  },
  plugins: [HtmlWebpackPluginConfig],
  devtool: 'cheap-module-source-map'
}