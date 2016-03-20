var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CheckInSchema = new Schema({
	checkIn_date: {
		type: Date,
		default: Date.now
	},
	checkIn_dish: 
			{
				type: Schema.Types.ObjectId,
				ref: 'User'
			}
	,
	checkIn_spot: 
			{
				type: Schema.Types.ObjectId,
				ref: 'Spot'
			}
	,
	checkIn_user: {
				type: Schema.Types.ObjectId,
				ref: 'User'
			},
	checkIn_blurb: {
		type: String,
		default: "default check-in blurb"
	}
})

module.exports = mongoose.model('CheckIn', CheckInSchema)
