var keystone = require('keystone'),
		Player = keystone.list('Player'),
    User = keystone.list('User');
 
exports.create = {
	User: [
	  { 'name.first': 'Dev', 'name.last': 'User', email: 'user@rwh.edu', password: 'rwh', isAdmin: true }
	],
	Player: [
	  { userName: 'admin', email: 'admin@email.com', passWord: 'password' }
	]
};