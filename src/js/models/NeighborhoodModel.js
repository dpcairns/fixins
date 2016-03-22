var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var NeighborhoodSchema = new Schema({
	neighborhood_name: {
		type: String,
		required: true
	},
	neighborhood_blurb: {
		type: String,
		default: 'default neighborhood blurb'
	}
});

module.exports = mongoose.model('Neighborhood', NeighborhoodSchema)
