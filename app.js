var express = require('express'),
	fs = require('fs'),
	app = express();

app.use(express.static(__dirname + '/public'));

app.use(express.logger());

app.get('/', function(req, res){
	fs.readFile('public/index.html', function (err, data) {
		if (err) throw err;
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);
	});
});

app.post('/signin.sy', function(req, res){
	res.writeHead(200, {'Content-Type': 'text/json'});
	res.end(JSON.stringify({"location" : "dashboard.html"}));
});

app.listen(8080);

console.log('Server running at http://127.0.0.1:8080/');