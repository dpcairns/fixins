var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ReviewSchema = new Schema({
	reviewed_dish: {
				type: Schema.Types.ObjectId,
				ref: 'Dish'
			},
	review_user: 
			{
				type: Schema.Types.ObjectId,
				ref: 'User'
			}
	,
	review_date: {
		type: Date,
		default: Date.now
	},
	review_stars: {
		type: Number,
		required: true
	},
	review_words: {
		type: String,
		default: "default review words"
	}
});


module.exports = mongoose.model('Review', ReviewSchema)
