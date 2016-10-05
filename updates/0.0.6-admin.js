var keystone = require('keystone'),
    User = keystone.list('User');
 
exports.create = {
	User: [
	  { 'name.first': 'Dev', 'name.last': 'User', email: 'user@rwh.edu', password: 'rwh', isAdmin: true }
	]
};