var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var DishSchema = new Schema({
	dish_name: {
		type: String,
		required: true
	},
	dish_spot: 
			{
				type: Schema.Types.ObjectId,
				ref: 'Spot'
			}
	,
	dish_price: {
		type: Number,
		required: true
	},
	dish_calories: {
		type: Number,
		required: true
	},
	dish_blurb: {
		type:String,
		defualt: "a really yummy, really dense dish for cheap"
	},
	dish_reviews:
		[
			{
				type: Schema.Types.ObjectId,
				ref: 'Review'
			}
		]
	,
	dish_genres:
		[
			{
				type: Schema.Types.ObjectId,
				ref: 'Genre'
			}
		]
})

module.exports = mongoose.model('Dish', DishSchema)
