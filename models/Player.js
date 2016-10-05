var keystone = require('keystone'),
    Types = keystone.Field.Types;
 
var Player = new keystone.List('Player', {
	label: 'Players',
		singular: 'Player',
		track: true,
		// nodelete: true,
		nocreate: false, 
        map: {name: 'userName'}
});
 
Player.add({
    userName: { type: String, required: true, initial: true, index: true },
    email: { type: Types.Email, initial: true, required: true, index: true },
    pass: { type: Types.Password, initial:true, required: true}
});
 
Player.register();
Player.defaultColumns = "userName, email, pass";
// module.exports = keystone.model('Player', Player);