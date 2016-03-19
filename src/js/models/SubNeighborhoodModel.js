var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var SubNeighborhoodSchema = new Schema({
	subNeighborhood_name: {
		type: String,
		required: true
	},
	sub_neighborhood_users: {
		[
			{
				type: Schema.Types.ObjectId,
				ref: 'User'
			}
		]
	},
	sub_neighborhood_spots: {
		[
			{
				type: Schema.Types.ObjectId,
				ref: 'Spot'
			}
		]
	},
	sub_neighborhood_blurb: {
		type: String,
		default: 'default sub-neighborhood blurb'
	},
	sub_neighborhood_neighborhood: {
		type: Schema.Types.ObjectId,
		ref: 'Neighborhood'
	}
});

module.exports = mongoose.model('SubNeighborhood', SubNeighborhoodSchema)
