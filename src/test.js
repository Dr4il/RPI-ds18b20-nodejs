var W1Temp = require('w1temp');
W1Temp.setGpioPower(13);
W1Temp.setGpioData(6);

// get instance of temperature sensor
W1Temp.getSensor($SENSOR).then(function (sensor) {
  var temp = sensor.getTemperature();
  console.log('Actual temp:', temp, '°C');
  sensor.on('change', function (temp) {
    console.log('Temp changed:', temp, '°C');
  });

});