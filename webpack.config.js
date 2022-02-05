const currentTask = process.env.npm_lifecycle_event;
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');
const fse = require('fs-extra');

const PACKAGE_PATHS = {
    '@src': path.resolve(__dirname, 'src'),
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@utils': path.resolve(__dirname, 'src/utils'),
    '@characters': path.resolve(__dirname, 'src/gameobjects/characters'),
    '@gameobjects': path.resolve(__dirname, 'src/gameobjects/environment'),
    '@eventcontrol': path.resolve(__dirname, 'src/gameobjects/eventcontrol'),
    '@eventemitters': path.resolve(__dirname, 'src/gameobjects/eventemitters'),
    '@statemanagement': path.resolve(__dirname, 'src/gameobjects/statemanagement'),
    '@world': path.resolve(__dirname, 'src/gameobjects/world'),
    '@statics': path.resolve(__dirname, 'src/gameobjects/statics'),
    modules: path.join(__dirname, 'node_modules'),
};

class RunAfterCompile {
    apply(compiler) {
        compiler.hooks.done.tap('Copy images', function () {
					try {
						fse.copySync('./src/assets/images', './dist/assets/images');
					} catch (err) {
						console.error(err);
					}
        });
    }
}

let cssConfig = {
  test: /\.css$/i,
  use: ['css-loader'],
};

let config = {
  resolve: {
    alias: PACKAGE_PATHS,
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx', '.css'],
  },
  entry: './src/index.js',
  plugins: [],
  module: {
    rules: [
      cssConfig,
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
};

if (currentTask == 'dev') {
  cssConfig.use.unshift('style-loader');

  config.devServer = {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    hot: true,
    port: 3001,
    host: '0.0.0.0',
    client: {
      logging: 'error',
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  };

  config.mode = 'development';
  config.devtool = 'inline-source-map';
  config.plugins.push(
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      inject: true,
    })
  );
  config.plugins.push(new ESLintPlugin({
    extensions: ['js', 'jsx', 'ts', 'tsx'],
    lintDirtyModulesOnly: false,
  }));
}

if (currentTask == 'build' || currentTask === 'develop-build') {
  config.output = {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  };
  config.mode = 'production';
  config.optimization = {
    splitChunks: { chunks: 'all' },
    minimizer: [
      new TerserPlugin(),
    ],
  };

  config.plugins.push(
    new CleanWebpackPlugin(),
    new RunAfterCompile(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    })
  );

  if (currentTask === 'develop-build') {
    config.devtool = 'source-map';
    config.mode = 'development';
  }
}

module.exports = config;
