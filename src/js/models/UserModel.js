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
	user_checkIns: {
		type: Array,
		default: []
	},
	user_reviews: {
		type: Array,
		default: []
	},
	user_favorites: {
		type: Array,
		default: []
	},
	user_neighborhood: {
		type: Schema.Types.ObjectId,
		ref: 'Neighborhood'
	}

});


module.exports = mongoose.model('User', UserSchema)
