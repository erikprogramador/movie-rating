let HtmlWebpackPlugin = require('html-webpack-plugin')
const HWPConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  file: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: [
  './src/main.js'
  ],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg|jpg|jpeg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss|sass$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [HWPConfig]
}
