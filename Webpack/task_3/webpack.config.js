const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    header: path.resolve(__dirname, './modules/header/header.js'),
    body: path.resolve(__dirname, './modules/body/body.js'),
    footer: path.resolve(__dirname, './modules/footer/footer.js'),
  },
  output: {
    filename: '[name]bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    static: {
        directory: path.resolve(__dirname, 'public')
    },
    open: true,
    port: 8564
  },
  module: {
    rules: [
      { 
        test: /\.css$/, 
        use: ['style-loader', 'css-loader']//, 'file-loader', 'image-webpack-loader']
      },
      {
        test: /\.jpg/,
        type: 'asset/resource'
      }
    ]
  },
};