var keystone = require('keystone');
var Player = keystone.list('Player');

exports.create = function(req, res) {

	console.log(req, "req");
	console.log(res, "res");

	new Player.model({
		userName: req.body.data.meetup,
		email: req.user,
		password: req.body.data.attending
	}).save(function(err) {
		if (err) return res.apiResponse({ success: false, err: err });
		return res.apiResponse({ success: true });
	});

};