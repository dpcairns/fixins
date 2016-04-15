var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');


var UserSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	password:{
		type: String,
		required: true
	},
	joinDate: {
		type: Date,
		default: Date.now
	},
	user_favorites: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Dish'
			}
		],
	user_friends: [
			{
				type: Schema.Types.ObjectId,
				ref: 'User'
			}
		],
	user_checkIns: [
			{
				type: Schema.Types.ObjectId,
				ref: 'CheckIn'
			}
		],
	user_reviews: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Review'
			}
		],
	user_sub_neighborhood: {
				type: Schema.Types.ObjectId,
				ref: 'SubNeighborhood'
	}

});


UserSchema.methods.generateHash = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
}

UserSchema.methods.validPassword = function(password){
	return bcrypt.compareSync(password, this.password);
}
//so i have to ajax call the database, supply password, and it
//compares a salted guess to this.password

module.exports = mongoose.model('User', UserSchema)
