var keystone = require('keystone'),
    Types = keystone.Field.Types;
 
var Player = new keystone.List('Player');
 
Player.add({
    userName: { type: String, required: true, initial: true, index: true },
    email: { type: Types.Email, initial: true, required: true, index: true },
    password: { type: Types.Password, initial: true }, 
    // visited: { type: Types.Relationship}
    // resources: { types: Types.Relationship, ref: }
});
 
Player.register();