var led = D4;
var toggle=1;

setInterval(function() {
  toggle =! toggle;
  digitalWrite(led, toggle);
}, 1000);
