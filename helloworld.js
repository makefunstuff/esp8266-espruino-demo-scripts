//TODO: provide config.js to remap nodemcu pinout because of weird pinout at nodemcu board.
//      for example this D4 pin is D2 at board.
var led = D4;
var toggle=1;

setInterval(function() {
  toggle =! toggle;
  digitalWrite(led, toggle);
}, 1000);
