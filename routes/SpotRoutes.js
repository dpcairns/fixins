var Spot = require('../src/js/models/SpotModel')

module.exports = function(){

	router.route('/Spots')
	.get(function (req, res) { 
		console.log('finding all Spots in fixins')
		Spot.find({}).exec(function(err, Spots){
			if(err){
				console.log('Couldn\'t find Spots')
			} else {
				res.json(Spots);
			}
		})
	})
	.post(function (req, res) {
			var newSpot = new Spot()
						newSpot.spot_name = req.body.name
						newSpot.spot_blurb = req.body.blurb
						newSpot.spot_genres = req.body.genres
						newSpot.spot_coordinates = req.body.coordinates
						newSpot.spot_neighborhood = req.body.neighborhood
						newSpot.spot_subNeighborhood = req.body.subNeighborhood
					
						newSpot.save(function() {
							res.json(newSpot)
						})
				})

	router.route('/Spots/:SpotId')
	.get(function (req, res) {
		console.log("finding a given Spot in fixins")
		var id = req.params.SpotId 
		Spot.findOne({_id: id}).exec(function(err, Spot){
			if(err){
				console.log("couldn\t find this Spot")
			}
			else{
				res.json(Spot)
			}
		})
	})
	.delete(function (req, res) {
		console.log("deleting a given Spot in fixins")
		var id = req.params.SpotId 
		Spot.findOne({_id: id}).remove().exec(function(err, Spot){
			if(err){
				console.log("couldn\t delete this Spot")
			}
			else{
				res.json(Spot)
			}
		})
	})

}