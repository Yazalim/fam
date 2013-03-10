/* 
 * dataAccess.js
 * @author Yasin Okumus
 */

 var mongoose = require('mongoose');

 mongoose.connect('mongodb://localhost/test');

 var db = mongoose.connection;
 db.on('error',console.error.bind(console,'connection error: '));
 db.once('open', function callback(){
 	var userSchema = mongoose.Schema({
 		username	: String,
 		name 		: String,
 		password	: String
 	});

 	userSchema.methods.chnangeName = function(newName){
 		var username = this.username;
 		console.log(username + ' wants to change his/her name as...' + newName);
 		this.name = newName;
 		console.log('The name of ' + username + ' has changed as ' + newName);
 	};

 	var User = mongoose.model('User',userSchema);

 	var demouser = new User({ username: 'demo', name: 'The Demo User', password: 'demo'});

 	//console.log(demouser.username);
 	function login(username, password){
 		User.find({username:username,password:password}, function(){
 			console.log('evraka');
 		});
 	}
 });



 module.exports = db.once;