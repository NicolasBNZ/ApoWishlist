const paths = require('./paths');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
const webpack = require('webpack')

module.exports = {
  entry: [
    // SCSS
    paths.src + '/styles/index.scss',
    // JS
    paths.src + '/index.js',
  ],
  output: {
    path: paths.build,
    publicPath: '/',
    filename: 'js/[name].[contenthash].js',
  },
  resolve: {
    alias: {
      src: paths.src,
      app: paths.src,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { 
          from: paths.static,
          to: '',
        }
      ],
    }),

    new HtmlWebpackPlugin({
      favicon: paths.assets + '/favicon.ico',
      template: paths.assets + '/index.html',
    }),

    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed) // it will automatically pick up key values from .env file
   }),

  ],

  module: {
    rules: [
      //JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },

      // Fonts
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'fonts/',
        },
      },

      // Images
      {
        test: /\.(ico|gif|png|jpe?g|webp|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: { outputPath: 'images/' },
          },
        ],
      },
    ],
  },
};
