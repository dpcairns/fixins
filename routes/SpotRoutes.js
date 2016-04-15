var Spot = require('../src/js/models/SpotModel')

module.exports = function(router){

	router.route('/Spots')
	.get(function (req, res) {
		console.log('finding all Spots in fixins')
		Spot.find({})
		.populate('spot_genres')
		.populate('spot_subNeighborhood')
		.populate('spot_dishes')
		.exec(function(err, Spots){
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
						newSpot.spot_genres = req.body.genres
						newSpot.spot_blurb = req.body.blurb
						newSpot.spot_coordinates = req.body.coordinates
						newSpot.spot_subNeighborhood = req.body.subNeighborhood
						newSpot.save(function(){
							Spot.findOne({spot_name: newSpot.spot_name})
							.populate('spot_genres')
							.populate('spot_subNeighborhood')
							.populate('spot_dishes')
							.exec(function(err, Spot){
								res.json(Spot);
									})
							})
				})



	router.route('/Spots/:SpotId')
	.put(function (req, res) {
		console.log("finding a given Spot in fixins")
		var id = req.body._id
		Spot.findOne({_id: id}).exec(function(err, Spot){
			console.log('here is the Spot in routes')
			console.log(Spot)
			console.log('here are the items to be changed in routes')
			console.log(req.body)
			if(err){
				console.log("couldn\t find this Spot")
			}


			else{
				if (req.body.newName){
					Spot.spot_name = req.body.newName
			}
			if (req.body.toggleApproved){
				Spot.approved = req.body.toggleApproved
		}
				if (req.body.newSubNeighborhood){
					Spot.spot_subNeighborhood = req.body.newSubNeighborhood
			}
				if (req.body.newGenre){
					Spot.spot_genres.push(req.body.newGenre)
			}
				if (req.body.newDish){
					Spot.spot_dishes.push(req.body.newDish)
			}
				if (req.body.newBlurb){
					Spot.spot_blurb = req.body.newBlurb
			}
				if (req.body.newCoordinates){
					Spot.spot_coordinates = req.body.newCoordinates
			}
				if (req.body.newReview){
					Spot.spot_reviews.push(req.body.newReview)
			}

				Spot.save()
				res.json(Spot)
				console.log(Spot)
		}

		})
	})

	router.route('/Spots/:SpotId')
	.get(function (req, res) {
		console.log("finding a given Spot in fixins")
		var id = req.body.id
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
