var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var DishSchema = new Schema({
	dish_name: {
		type: String,
		required: true
	},
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
	dish_spot: 
			{
				type: Schema.Types.ObjectId,
				ref: 'Spot'
			}
	,
})

module.exports = mongoose.model('Dish', DishSchema)
