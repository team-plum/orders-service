var express = require('express');
var cors = require('cors');
var path = require('path');
var app = express();
var { requestOrderTableDataAction, requestRestaurantInfoDataAction } = require('./controller/index.js');
var router = express.Router();
var port = process.env.PORT || 3010;

app.use(cors());
app.use(express.static(path.join(__dirname + '/../client/dist')));
app.use(express.static(path.join(__dirname + '/../public')));
app.use(router);

router.get('/order/food/:id', requestOrderTableDataAction);
router.get('/restaurant/info/:id', requestRestaurantInfoDataAction);

app.listen(port, function() {
  console.log(`App is listening on port ${port}.`);
});