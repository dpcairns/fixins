var mongoose = require('mongoose');
var Schema = mongoose.Schema;


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
	calories_log: {
		type: Array,
		default: []
	},
	dollars_log: {
		type: Array,
		default: []
	},
	user_checkIns:[
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
	user_favorites: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Dish'
			}
		],
	user_neighborhood: {
				type: Schema.Types.ObjectId,
				ref: 'Neighborhood'
	}

});


module.exports = mongoose.model('User', UserSchema)
