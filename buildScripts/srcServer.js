//This file will configure a express web server that will serve up the files in our source directory.
var express = require('express');
var path = require('path');
var open = require ('open');

var port = 3000;
var app = express();

//Defining routes
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html')); //dirname that will get us the directory name that we're currently running in.
});

//Error handling
app.listen(port, function(err) {
  if(err) {
    console.log("err");
  } else {
    open('http://localhost:' + port);
  }
});