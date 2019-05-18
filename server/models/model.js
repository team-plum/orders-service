var db = require('../../database/index.js');

var selectRandom = function(arr) {
  var index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

var getOrderFoodTableData = function(id, callback) {
  db.serialize(function() {
    var queryStr = `SELECT * FROM order_food_table WHERE id=${id}`;
    db.all(queryStr, function(err, rows) {
      console.log(selectRandom(rows));
      if (err) callback(err);
      else callback(null, selectRandom(rows));
    });
  });
}

var getRestaurantInfoData = function(id, callback) {
  var queryStr = `SELECT * FROM restaurant_info WHERE id=${id}`;
  db.serialize(function() {
    db.all(queryStr, function(err, rows) {
      if (err) callback(err);
      else callback(null, selectRandom(rows));
    });
  });
}

module.exports = {
  getOrderFoodTableData,
  getRestaurantInfoData
}