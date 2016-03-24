var CheckIn = require('../src/js/models/CheckInModel')

module.exports = function(router){

	router.route('/CheckIns')
	.get(function (req, res) { 
		console.log('finding all CheckIns in fixins')
		CheckIn.find({})
			.populate('checkIn_dish').populate('checkIn_user')
			.exec(function(err, CheckIns){
			if(err){
				console.log('Couldn\'t find CheckIns')
			} else {
				res.json(CheckIns);
			}
		})
	})
	.post(function (req, res) { 
			var newCheckIn = new CheckIn()
						newCheckIn.checkIn_dish = req.body.dish
						newCheckIn.checkIn_user = req.body.user
						newCheckIn.checkIn_blurb = req.body.blurb
						newCheckIn.save()
						CheckIn.findOne({checkIn_blurb: newCheckIn.checkIn_blurb})
							.populate('checkIn_dish').populate('checkIn_user')
							.exec(function(err, CheckIn){
							if(err){
								console.log('Couldn\'t find CheckIns')
							} else {
								res.json(CheckIn);
							}
						})
				})

	router.route('/CheckIns/:CheckInId')
	.get(function (req, res) {
		console.log("finding a given CheckIn in fixins")
		var id = req.params.CheckInId 
		CheckIn.findOne({_id: id}).exec(function(err, CheckIn){
			if(err){
				console.log("couldn\t find this CheckIn")
			}
			else{
				res.json(CheckIn)
			}
		})
	})
	.delete(function (req, res) {
		console.log("deleting a given CheckIn in fixins")
		var id = req.params.CheckInId 
		CheckIn.findOne({_id: id}).remove().exec(function(err, CheckIn){
			if(err){
				console.log("couldn\t delete this CheckIn")
			}
			else{
				res.json(CheckIn)
			}
		})
	})

}