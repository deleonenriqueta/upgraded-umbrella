const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, "client", "App.jsx"),
  output: {
    path:path.resolve(__dirname, "client/dist"),
    filename: 'bundle.js'
  },
  module: {
    env: {
      NODE_ENV: 'development'
    },
    rules: [
      {
        test: /\.?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test:/\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "client", "index.html"),
    }),
    new webpack.DefineLugin({
      'process.env.PORT': JSON.stringify(process.env.PORT),
      'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
      'process.env.PUBLIC_IP': JSON.stringify(process.env.PUBLIC_IP)
    })
  ],
}