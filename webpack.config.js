var path=require('path');

module.exports = {
  entry: [path.join(__dirname + '/src/app.js')],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname + '/dist'),
    filename: 'app.js'
  },
  module: {
    loaders:[{
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: /node_modules/,
      include: path.join(__dirname + '/src'),
      query: {
        cacheDirectory: true,
        presets: ['es2015', 'react']
      }
    }]
  }
}
