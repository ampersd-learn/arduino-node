/**
 * Created by Anton on 11/16/2015.
 */

var http = require('http');

var server = new http.Server();
// http.Server -> net.Server -> EventEmitter

server.listen(1337);

server.on('request', require('./request'));

console.log("Server is running");
