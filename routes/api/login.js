var keystone = require('keystone');
var Player = keystone.list('Player');
var appRoot = require('app-root-path');
var TemplateLoader = require('../../lib/TemplateLoader');
var Templates = new TemplateLoader();
var _ = require('underscore');


exports.get = function(req, res) {

	// console.log (req, "req");



	var query = Player.model.findOne({$or:[{userName:req.query.username},{email:req.query.username}]});

	console.log(query, " is the response");

	query.select('userName email passWord');

	query.exec(function (err, person) {
		console.log ("person:" + person + ":person");
	  if (err) return handleError("we havenot found your person" + err);
	  console.log('This is %s with password %s and email %s.', person.userName, person.passWord, person.email);
	  var data = {username:person.userName, password:person.passWord, email:person.email};

	  // console.log(data._.password);

	  person._.passWord.compare(req.query.password, function(err, result){

	  	console.log(result);
			if (result) {

			  	console.log("correct password");

			  	// locals.username = person.userName;
			  	// locals.password = person.pass;
			  	// locals.email = person.email;
			  	

			  	Templates.Load("partials/profile", data, function(html) {
			  		// console.log(html, " --- html --- ");
			  		// console.log(data, " --- html --- ");
		            res.send(html);

		        }); 

			  } else {
			  	console.log("wrong password");
			  	// socket.emit("login:wrong_password");
			  }
	  });
		// pass._.compare(passwordInput)
	  
	});

};