var Neighborhood = require('../src/js/models/NeighborhoodModel') 

module.exports = function(router){
	
	router.route('/Neighborhoods')
	.get(function (req, res) { 
		console.log('finding all Neighborhoods in fixins')
		Neighborhood.find({}).exec(function(err, Neighborhoods){
			if(err){
				console.log('Couldn\'t find Neighborhoods')
			} else {
				res.json(Neighborhoods);
			}
		})
	})
	.post(function (req, res) { 
			var newNeighborhood = new Neighborhood()
						newNeighborhood.neighborhood_name = req.body.name
						newNeighborhood.save(function() {
							res.json(newNeighborhood)
						})
				})

	router.route('/Neighborhoods/:NeighborhoodId')
	.get(function (req, res) {
		console.log("finding a given Neighborhood in fixins")
		var id = req.params.NeighborhoodId 
		Neighborhood.findOne({_id: id}).exec(function(err, Neighborhood){
			if(err){
				console.log("couldn\t find this Neighborhood")
			}
			else{
				res.json(Neighborhood)
			}
		})
	})
	.delete(function (req, res) {
		console.log("deleting a given Neighborhood in fixins")
		var id = req.params.NeighborhoodId 
		Neighborhood.findOne({_id: id}).remove().exec(function(err, Neighborhood){
			if(err){
				console.log("couldn\t delete this Neighborhood")
			}
			else{
				res.json(Neighborhood)
			}
		})
	})

}