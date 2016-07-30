var keystone = require('keystone');
var Player = keystone.list('Player');

exports.create = function(req, res) {

	console.log(req, "req");
	console.log(res, "res");

	console.log(Player, "player");

	new Player.model({
		userName: req.body.username,
		email: req.body.email,
		password: req.body.password
	}).save();

	console.log ("dim");
};