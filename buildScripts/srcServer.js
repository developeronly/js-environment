//This file will configure a express web server that will serve up the files in our source directory.
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

//Tell express other things we'd like to use
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

//Defining routes
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html')); //dirname that will get us the directory name that we're currently running in.
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
