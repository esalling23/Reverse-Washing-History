var keystone = require('keystone');
var Player = keystone.list('Player');

exports.get = function(req, res) {

	console.log (req, "req");


	var query = Player.model.findOne({$or:[{userName:req.query.username},{email:req.query.username}]});

	console.log(query, "one");

	query.select('userName email pass');

	console.log(query);

	query.exec(function (err, person) {
		console.log (person);
	  if (err) return handleError(err);
	  console.log('This is %s with password %s and email %s.', person.userName, person.pass, person.email); // Space Ghost is a talk show host.
	});
	
};