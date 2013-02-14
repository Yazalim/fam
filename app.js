var express = require('express'),
	fs = require('fs'),
	app = express();


function checkAuth(req, res, next) {
	if (!req.session.user_id) {
		res.send('You are not authorized to view this page');
	} else {
		next();
	}
}

app.get('/game/*', checkAuth, function (req, res) {
  res.send('if you are viewing this page it means you are logged in');
});

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
	console.log(req.params);
	var post = req.params;
	if (post.user == 'yasin' && post.pass == 'sifre') {
		req.session.user_id = 1;
		res.writeHead(200, {'Content-Type': 'text/json'});
		res.end(JSON.stringify({"location" : "dashboard.html"}));
	} else {
		res.writeHead(401, {'Content-Type': 'text/json'});
		res.end(JSON.stringify({"message" : "Wrong password"}));
	}
});

app.get('/logout', function (req, res) {
  delete req.session.user_id;
  res.redirect('/');
}); 

app.listen(8080);

console.log('Server running at http://127.0.0.1:8080/');