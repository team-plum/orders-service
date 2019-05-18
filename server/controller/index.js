var { getOrderFoodTableData, getRestaurantInfoData } = require('../models/model.js');

var requestOrderTableDataAction = function(req, res) {
  var {id} = req.params;
  getOrderFoodTableData(id, function(err, data) {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log(data);
      res.status(200).send(data);
    }
  })
}

var requestRestaurantInfoDataAction = function(req, res) {
  var {id} = req.params;
  getRestaurantInfoData(id, function(err, data) {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log(data);
      res.status(200).send(data);
    }
  })
}

module.exports = {
  requestOrderTableDataAction,
  requestRestaurantInfoDataAction
}