var ledPin = D4;

var handler = function(req, res) {
  var data = url.parse(req.url, true);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<html><body>');
  res.write('<a href="?led=1">on</a><br/><a href="?led=0">off</a>');
  res.end('</body></html>');

  if (data.query && "led" in data.query)
  digitalWrite(D4, data.query["led"]);
}

require("http").createServer(handler).listen(8080);
