var express = require('express');
var path = require('path');
var { getOrderFoodTableData } = require('./model.js');
var app = express();
var port = 3000;

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.listen(port, function() {
  console.log('App is listening on port 3000.');
});