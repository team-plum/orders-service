var express = require('express');
var path = require('path');
var app = express();
var { requestOrderTableDataAction, requestRestaurantInfoDataAction } = require('./controller/index.js');
var router = express.Router();
var port = 3010;

app.use(express.static(path.join(__dirname + '/../client/dist')));
app.use(express.static(path.join(__dirname + '/../public')));
app.use(router);

router.get('/order/food/:id', requestOrderTableDataAction);
router.get('/restaurant/info/:id', requestRestaurantInfoDataAction);

app.listen(port, function() {
  console.log('App is listening on port 3010.');
});