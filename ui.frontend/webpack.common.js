'use strict';

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const ESLintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');
const Dotenv = require('dotenv').config({ path: './.env' });

const SOURCE_ROOT = __dirname + '/src/main/webpack';

const resolve = {
  extensions: ['.js', '.jsx'],
  plugins: []
};

module.exports = {
  resolve: resolve,
  entry: {
    dependencies: SOURCE_ROOT + '/site/dependencies.js',
    site: SOURCE_ROOT + '/site/main.js'
  },
  output: {
    filename: (chunkData) => {
      if (chunkData.chunk.name === 'dependencies') {
        return 'clientlib-dependencies/[name].js';
      } else if (chunkData.chunk.name === 'site') {
        return 'clientlib-site/[name].js';
      }
    },
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: 'clientlib-site/resources/[name]/[name].[chunkhash:16].js',
    publicPath: '/etc.clientlibs/hero-commerce/clientlibs/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [require('autoprefixer')];
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              additionalData: `$resource-path: ${process.env.AEM_RESOURCE_PATH}`
            }
          },
          {
            loader: 'glob-import-loader',
            options: {
              resolve: resolve
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery'
    }),
    new MiniCssExtractPlugin({
      filename: (chunkData) => {
        if (chunkData.chunk.name === 'dependencies') {
          return 'clientlib-dependencies/[name].css';
        } else if (chunkData.chunk.name === 'site') {
          return 'clientlib-site/[name].css';
        }
      },
      chunkFilename: 'clientlib-site/resources/[name]/[name].[chunkhash:16].css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, SOURCE_ROOT + '/resources'),
          to: './clientlib-site/'
        }
      ]
    })
  ],
  stats: {
    assetsSort: 'chunks',
    builtAt: true,
    children: false,
    chunkGroups: true,
    chunkOrigins: true,
    colors: false,
    errors: true,
    errorDetails: true,
    env: true,
    modules: false,
    performance: true,
    providedExports: false,
    source: false,
    warnings: true
  }
};
