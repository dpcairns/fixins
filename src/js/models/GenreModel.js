var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var DishSchema = new Schema({
	genre_name: {
		type: String,
		required: true
	},
	genre_dishes: {
		[
			{
				type: Schema.Types.ObjectId,
				ref: 'Dish'
			}
		]
	},
	genre_spots: {
		[
			{
				type: Schema.Types.ObjectId,
				ref: 'Spot'
			}
		]
	},
})

module.exports = mongoose.model('Genre', GenreSchema)
