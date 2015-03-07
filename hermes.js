var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  //LED
  var led = new five.Led(13);
  // "blink" the led in 500ms on-off phase periods
  led.blink(500);

  //KEYES ANALOG TEMPERATURE SENSOR
  var temperature = new five.Temperature({
    controller: "KEYESTMP",
    pin: "A0"
  });
  temperature.on('data', function(err,data){
    var voltage = (data.celsius * 5000) / 1024; //conversion of raw data to voltage in mV
    var cel = (voltage - 500) / 100 //our best guess at turning voltage into temp
    console.log(cel);//this will need to be saved in the database on a delay

//     This code simply reads the voltage output from the temperature sensor and displays this voltage in the
// serial monitor. You can calibrate the sensor by figuring out what voltages correspond with what
// temperatures. Just measure the temperatue with a different thermometer and see what the
// corresponding voltage is. Do this at several different temperatures and graph the voltage vs the
// temperature measured. Throw on a trendline and display the equation. This equation should work to
// convert the voltage readings to temperature. Just plug in your voltage reading for X.
  });

  //KEYES HUMIDITY SENSOR

  //PRESSURE SENSOR

  //TILT SENSOR

  //PHOTORESISTOR
});
