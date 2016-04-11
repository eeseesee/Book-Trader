var config = require('./webpack.config.js');
var webpack = require('webpack');

config.plugins.push(
  new webpack.DefinePlugin({
    "process.env": {
      "NODE_ENV": JSON.stringify("development")
    }
  })
);

config.entry.push(
  'webpack-hot-middleware/client?reload=true'
);

module.exports = config;
