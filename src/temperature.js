var W1Temp = require('w1temp');

W1Temp.getSensor('28-020d92462283').then(function (sensor) {
  var temp = sensor.getTemperature();
  console.log('Actual temp:', (temp), '°C');
  sensor.on('change', function (temp) {
    console.log('Temp changed:', temp, '°C');
  });

});