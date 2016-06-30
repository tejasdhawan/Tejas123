//var a=require('../controller/root');


var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var bcrypt = require('bcrypt');

var userSchema = new Schema({
	FristName : String,
	lastName : String,


	name: {type: String,
		required: true,
	index: {unique:true},
},
	password: {type: String,
		required: true,
	},
	state : String,
	city : String,
	zipcode : Number,
	mobileno : Number,
	

});

// bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash("password", salt, function(err, hash) {
//         // Store hash in your password DB.
//     });
// });
 


// userSchema.methods.generateHash = function(password){
// 	return bcrypt.hashSync(password,bcrypt.gensaltSync(9));
// }
// userSchema.methods.validPassword = function(password){
// 	return bcrypt.compareSync(password,this.local.password);

// }


var User =mongoose.model('user', userSchema);
module.exports = User;
