var esp = require('espruino');
var Promise = require('bluebird');

var port = '/dev/cu.SLAB_USBtoUART';
var filename = process.argv[2] || './helloworld.js';

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
  esp.sendFile(port, filename, function() {
    console.log('[INFO] Build Success!');
  });
})
