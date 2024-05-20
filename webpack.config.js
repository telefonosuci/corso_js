const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    'main':'./frontend/src/modules/main/index.js',
    'listing-page':'./frontend/src/modules/listing-page/index.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public/javascripts'),
  },
};
