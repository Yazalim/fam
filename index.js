var http = require('http'),
fs = require('fs'),
url = require('url'),
path = require("path");

http.createServer(function (request, response) {
	var uri = url.parse(request.url).path;
	console.log(uri);
	if(uri == '/') {
		fs.readFile('index.html', function (err, data) {
		  if (err) throw err;
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.end(data);
		});
	} else if(uri == '/signin.sy') {
		response.writeHead(200, {'Content-Type': 'text/json'});
		response.end(JSON.stringify({"location" : "dashboard.html"}));
	} else {
		var filename = path.join(process.cwd(),uri);

		path.exists(filename, function(exists){
			if(!exists) {
				response.writeHead(404, {"Content-Type": "text/plain"});
				response.write("404 Not Found\n");
				response.end();
				return;
			}


			fs.readFile(filename, function(err, file) {
				if(err) {        
					response.writeHead(500, {"Content-Type": "text/plain"});
					response.write(err + "\n");
					response.end();
					return;
				}

				response.writeHead(200);
				response.write(file);
				response.end();
			});
		});
		//response.writeHead(200, {'Content-Type': 'text/plain'});
		//response.end('Hello, World! \n');
	}
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');