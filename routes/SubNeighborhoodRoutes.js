var Subneighborhood = require('../src/js/models/SubNeighborhoodModel') 

module.exports = function(router){

	router.route('/Subneighborhoods')
	.get(function (req, res) { 
		console.log('finding all Subneighborhoods in fixins')
		Subneighborhood.find({}).exec(function(err, Subneighborhoods){
			if(err){
				console.log('Couldn\'t find Subneighborhoods')
			} else {
				res.json(Subneighborhoods);
			}
		})
	})
	.post(function (req, res) { 
			var newSubneighborhood = new Subneighborhood()
						newSubneighborhood.subNeighborhood_name = req.body.name
						newSubneighborhood.sub_neighborhood_users = req.body.users
						newSubneighborhood.sub_neighborhood_spots = req.body.spots
						newSubneighborhood.sub_neighborhood_neighborhood = req.body.neighborhood
						newSubneighborhood.save(function() {
							res.json(newSubneighborhood)
						})
				})

	router.route('/Subneighborhoods/:SubneighborhoodId')
	.get(function (req, res) {
		console.log("finding a given Subneighborhood in fixins")
		var id = req.params.SubneighborhoodId 
		Subneighborhood.findOne({_id: id}).exec(function(err, Subneighborhood){
			if(err){
				console.log("couldn\t find this Subneighborhood")
			}
			else{
				res.json(Subneighborhood)
			}
		})
	})
	.delete(function (req, res) {
		console.log("deleting a given Subneighborhood in fixins")
		var id = req.params.SubneighborhoodId 
		Subneighborhood.findOne({_id: id}).remove().exec(function(err, Subneighborhood){
			if(err){
				console.log("couldn\t delete this Subneighborhood")
			}
			else{
				res.json(Subneighborhood)
			}
		})
	})

}