var esp = require('espruino');

var port = '/dev/cu.SLAB_USBtoUART';
var filename = './helloworld.js';

esp.init();
esp.sendFile(port, filename, function() {
  esp.expr(port, "save()", function(result) {
    console.log('file hase been uploaded');
    console.log(result);
  })
})
