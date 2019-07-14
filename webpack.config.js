const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'cs.bundle.js',
    path: path.join(__dirname, 'src')
  }
};