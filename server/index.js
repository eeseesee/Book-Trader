const express = require('express');
const path = require('path');
const config = require('../webpack.config.js');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.load();

// Webpack Setup
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

// DB Setup
const mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || "mongodb://localhost/booktrader";

mongoose.connect(mongoUri, function(err) {
    if(err) {
        console.log("connection error", err +" on "+mongoUri);
    } else {
        console.log("connection to "+mongoUri+" successful");
    }
});

// App Setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Static Setup
app.use(express.static('./'));

// Server Setup
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port, function() {
  console.log('Server listening on:',port);
});
