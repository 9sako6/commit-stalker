const path = require('path');

module.exports = {
  entry: './src/app.tsx',
  output: {
    filename: 'app.min.js',
    path: path.join(__dirname, './public')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{
        test: /\.tsx?$/,
        use: 'ts-loader'
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ]
  }
};