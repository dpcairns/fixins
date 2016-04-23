var path = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }],
      query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [path.resolve('./src')]
  },
  output: {
    path: './src',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src'
  },
  eslint: {configFile: '.eslintrc'},
  proxy: {
  '/api/*': {
   target: 'http://162.243.119.190:444/api/',
    secure: false,
	}
     }
  };
