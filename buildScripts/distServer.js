//This file will configure a express web server that will serve up the files in our source directory.
/* eslint-disable no-console */

import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

//Defining routes
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html')); //dirname that will get us the directory name that we're currently running in.
});

//Example API
app.get('/users', function(req, res) {
  // Hard coding for now
  res.json([
    {"id": 1,"firstName":"Dheeraj","lastName":"Karande","email":"dheeraj@gmail.com"},
    {"id": 2,"firstName":"Shivraj","lastName":"Patil","email":"shivraj@yahoo.com"},
    {"id": 3,"firstName":"Sarang","lastName":"Ingole","email":"sarang@hotmail.com"}
  ]);
});

//Error handling
app.listen(port, function(err) {
  if(err) {
    console.log("err");
  } else {
    open('http://localhost:' + port);
  }
});
