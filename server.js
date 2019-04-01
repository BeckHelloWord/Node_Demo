var http = require("http");
var url = require("url");

var start = function(router) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    router(pathname);

    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello,World-test111");
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server running at http://127.0.0.1:8888");
};

exports.start = start;
