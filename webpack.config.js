const webpack = require('webpack');
const path = require('path');
const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean:true
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ]
  }
};

const devConfig = {
  ...config,
  mode: "development",
  output: {
    filename: 'kittensautomation.js'
  }

}

const prodConfig = {
  ...config,
  mode: "production",
  output: {
    filename: 'kittensautomation.min.js'
  }
}

module.exports = () => {
  if (isProduction) {
    return [devConfig, prodConfig];
  } else {
    return devConfig;
  }
};