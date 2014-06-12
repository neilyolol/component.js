#!/usr/bin/env node
var http = require("http");

function start(){
	function onRequest(request,response){
		console.log("Request received.");
		response.writeHead(200,{"Content-Type":"text/html"});
		response.write("Welcome to Component Owner Search");
		response.end();
}

http.createServer(onRequest).listen(8090);

console.log("Server has been started");
}

exports.start = start;
