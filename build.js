var esp = require('espruino');
var Promise = require('bluebird');

var port = '/dev/cu.SLAB_USBtoUART';
var filename = './helloworld.js';

new Promise(function(resolve, reject) {
  esp.init(function() {
    resolve(Espruino);
  })
})
.then(function(Espruino) {
  Espruino.Config.BAUD_RATE = "115200";
  Espruino.Config.RESET_BEFORE_SEND = true;
})
.then(function() {
  esp.expr(port, "reset()", function(result) {
    console.log('file hase been uploaded');
    console.log(result);
  })
});
