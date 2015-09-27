var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var auth = require('basic-authentication')({
  user: process.env.FOCUS_USER || 'test',
  password: process.env.FOCUS_PASSWORD || 'test'
});

var route = process.env.FOCUS_ROUTE || '/download';
var port = process.env.FOCUS_PORT || '3000';
var DOWNLOAD_FOLDER = './backend/download/'
var basic_path = path.resolve(DOWNLOAD_FOLDER + 'basic.zip');

/* This will download a zip-file as an attachment. */
/* HTTP Basic authentication on the route */
app.get(route, auth, function(req, res) {
  res.download(basic_path);
});

var server = app.listen(port, function () {
  console.log('App listening at port %s', port);
});
