const path = require('path');

module.exports = {
  mode : 'production',
  entry: '/public/proyek3.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index3.js',
  },
};