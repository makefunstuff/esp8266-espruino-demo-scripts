var esp = require('espruino');
var Promise = require('bluebird');

var port = '/dev/cu.SLAB_USBtoUART';
var filename = './helloworld.js';

new Promise(function(resolve, reject) {
  esp.init(function() {
    resolve(Espruino)
  })
})
.then(function(Espruino) {
  Espruino.Config.BAUD_RATE = "115200"
})
.then(function() {
  esp.sendFile(port, filename, function() {
    esp.expr(port, "save()", function(result) {
      console.log('file hase been uploaded');
      console.log(result);
    })
  })
})
