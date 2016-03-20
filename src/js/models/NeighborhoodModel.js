var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var NeighborhoodSchema = new Schema({
	neighborhood_name: {
		type: String,
		required: true
	},
	neighborhood_users: 
		[
			{
				type: Schema.Types.ObjectId,
				ref: 'User'
			}
		]
	,
	neighborhood_spots: 
		[
			{
				type: Schema.Types.ObjectId,
				ref: 'Spot'
			}
		]
	,
	neighborhood_blurb: {
		type: String,
		default: 'default neighborhood blurb'
	},
	neighborhood_sub_neighborhoods: 
		[
			{
				type: Schema.Types.ObjectId,
				ref: 'SubNeighborhood'
			}
		]
	,
});

module.exports = mongoose.model('Neighborhood', NeighborhoodSchema)
