var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var randNum = Math.random

var SpotSchema = new Schema({
	spot_name: {
		type: String,
		required: true
	},
	spot_blurb: {
		type: String,
		default: "default spot blurb"
	},
	spot_genres: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Genre'
			}
		],
	spot_coordinates:{
		type: Array,
		default: [(45.1200, + randNum), (-122.1819 - randNum)]
	},
	addDate: {
		type: Date,
		default: Date.now
	},
	spot_dishes: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Dish'
			}
		],
	spot_reviews: 
		[
			{
				type: Schema.Types.ObjectId,
				ref: 'Review'
			}
		]
	,
	spot_checkIns:
		[
			{
				type: Schema.Types.ObjectId,
				ref: 'CheckIn'
			}
		]
	,
	spot_subNeighborhood:
			{
				type: Schema.Types.ObjectId,
				ref: 'SubNeighborhood'
			}

});


module.exports = mongoose.model('Spot', SpotSchema)
