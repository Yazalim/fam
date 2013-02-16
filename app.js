var express = require('express'),
	fs = require('fs'),
	app = express();

var store = new express.session.MemoryStore;
app.configure(function(){
	app.use(express.bodyParser());
	app.use(express.cookieParser());
	app.use(express.session({
		secret: 'famfamfam',
		store: store
	}));

	app.use(app.router);
});


function checkAuth(req, res, next) {
	if (!req.session.user_id) {
		res.send('You are not authorized to view this page');
	} else {
		next();
	}
}

app.get('/*', function(req, res, next){
	if(typeof req.cookies['connect.sid'] !== 'undefined'){
		console.log(req.cookies['connect.sid']);
	}
	next();
});

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
	console.log(req.body);
	var post = req.body;
	if (post.username == 'demo' && post.password == 'demo') {
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