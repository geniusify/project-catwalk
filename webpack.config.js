const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src/index.jsx');
const OUT_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  mode: 'development',
  entry: SRC_DIR,
  output: {
    filename: 'bundle.js',
    path: OUT_DIR,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
      { test: /\.css$/, use: 'css-loader' },
      {
        test: /\.(woff(2)?|ttf|eot|svg|png)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
    ],
  },
};
