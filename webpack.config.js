const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    'main':'./frontend/src/modules/main/index.js',
    'listing-page':'./frontend/src/modules/listing-page/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public/javascripts'),
  },
};
