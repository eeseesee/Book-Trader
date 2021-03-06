const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
const mongoose = require('mongoose');
require('dotenv').config();

// App setup
var app = express();
var PORT = process.env.PORT || 8080
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Dev setup
if(process.env.NODE_ENV !== 'production') {
  const morgan = require('morgan');
  app.use(morgan('combined'));

  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpack = require('webpack');
  const config = require('../webpack.dev.config');
  const compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

// Static route setup
app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

// DB Setup
const mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || "mongodb://localhost/booktrader";

mongoose.connect(mongoUri, function(err) {
    if(err) {
        console.log("connection error", err +" on "+mongoUri);
    } else {
        console.log("connection to "+mongoUri+" successful");
    }
});

app.listen(PORT, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  }
});
