var sqlite3 = require('sqlite3').verbose();
var path = require('path');

var dbPath = path.join(__dirname, './restaurant_review.db');

var getRandomFee = function() {
  var fee = Math.floor(Math.random() * 5) + 3;
  return fee;
}

var getRandomDeliveryMin = function() {
  var fee = Math.floor(Math.random() * 15) + 10;
  return fee;
}

var getRandomDeliveryTime = function() {
  var num = Math.floor(Math.random() * 20);
  while (num % 5 !== 0) {
    num += 1;
  }
  var timeFrom = num + 15;
  var timeTo = num + 35;
  var timeStr = timeFrom + '-' + timeTo + ' Mins';
  return timeStr;
}

var getRandomItem = function(selection) {
  var index = Math.floor(Math.random() * selection.length);
  return selection[index];
}

var hours_today_selection = ['9:00 am - 5:00 pm', '10:00 am - 7:00 pm', '11:00 am - 10:00 pm', '7:00 am - 5:00 pm'];
var price_range_selection = ['Under $10', '$11-30', '$31-60', 'Above $61'];
var health_score_selection = ['A', 'B', 'C'];

var db = new sqlite3.Database(dbPath, (err) => {
  if (err) console.error(err);
  else console.log("Database created.");
});

db.serialize(function() {
  // creating and seeding table 1
  db.run(`CREATE TABLE IF NOT EXISTS order_food_table (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fee REAL NOT NULL,
    delivery_min REAL NOT NULL,
    delivery_time TEXT NOT NULL
    )`);

  var stmt1 = db.prepare(`
    INSERT INTO order_food_table (
    fee,
    delivery_min,
    delivery_time
    ) VALUES (?, ?, ?)`);

  for (var i = 0; i < 100; i++) {
    stmt1.run(getRandomFee(), getRandomDeliveryMin(), getRandomDeliveryTime());
  }
  stmt1.finalize();

  db.each(`SELECT * FROM order_food_table LIMIT 5`, function (err, row) {
    console.log(row);
  });

  // creating and seeding table 2
  db.run(`CREATE TABLE IF NOT EXISTS restaurant_info (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    hours_today TEXT NOT NULL,
    price_range TEXT NOT NULL,
    health_score TEXT NOT NULL
    )`);

  var stmt2 = db.prepare(`
    INSERT INTO restaurant_info (
    hours_today, 
    price_range,
    health_score
    ) VALUES (?, ?, ?)`);

  for (var i = 0; i < 100; i++) {
    stmt2.run(getRandomItem(hours_today_selection), getRandomItem(price_range_selection), getRandomItem(health_score_selection));
  }
  stmt2.finalize();

  // db.each(`SELECT * FROM restaurant_info LIMIT 5`, function (err, row) {
  // console.log(row);
  // });

});

module.exports = db;