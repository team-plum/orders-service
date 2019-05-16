var db = require('../database/index.js');

var getOrderFoodTableData = function(callback) {
  db.serialize(function() {
    var queryStr = `SELECT * FROM order_food_table`;
    db.all(queryStr, function(err, rows) {
      console.log(rows);
      if (err) console.error(err);
      else callback(null, rows);
    });
  });
}

// var getRestaurantInfoData = function() {}

module.exports = {
  getOrderFoodTableData
}