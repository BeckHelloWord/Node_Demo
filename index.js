var server = require("./server");
var router = require("./router");
console.log(process.env);
server.start(router.route);
