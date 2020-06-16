var W1Temp = require('w1temp');
var MongoClient = require('mongodb').MongoClient;

W1Temp.getSensor('28-020d92462283').then(function (sensor) {
  var temp = sensor.getTemperature();
  console.log('Actual temp:', (temp), '°C');
  sensor.on('change', function (temp) {
    console.log('Temp changed:', temp, '°C');
  });

});

W1Temp.getSensor('28-020d92462283').then(function (sensor) {
  var temp = sensor.getTemperature();
  MongoClient.connect("mongodb://localhost:27017/", function(err, db) {
  if(err) { return console.dir(err); }
  db.collection("temperature").insertOne(temp, function(err, collection){
    if (err) throw err;
    console.log("temp saved");
    db.close();
  }
  });

});
