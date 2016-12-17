
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack');


const config = {
  entry: {
    inject: './src/inject/inject.ts',
    background: './src/background/background.ts'
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },

  //devtool: "source-map",

  resolve: {
    extensions: ["", ".webpack.ts", ".web.js", ".ts", ".tsx", ".jsx", ".js"]
  },

  module: {
    loaders: [
      //{
      //  test: /\.(js)$/,
      //  loader: 'babel-loader'
      //},
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader"
      },
    ]
    //preLoaders: [
    //  {
    //    test: /\.js$/,
    //    loader: "source-map-loader"
    //  }
    //]
  },

  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },

  plugins: [
    //new CleanWebpackPlugin(['dist']),

    new CopyWebpackPlugin([
      { from: 'manifest.json' },
      { from: 'src/inject/inject.css' },
      { from: 'icons', to: 'icons' },
      { from: '_locales', to: '_locales' },
      { from: 'src/options_custom', to: 'src/options_custom' },
      { from: 'src/page_action', to: 'src/page_action' }
    ])
  ]
}

module.exports = config;
