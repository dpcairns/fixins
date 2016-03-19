var Genre = require('../src/js/models/GenreModel')

module.exports = function(){

	router.route('/Genres')
	.get(function (req, res) { 
		console.log('finding all Genres in fixins')
		Genre.find({}).exec(function(err, Genres){
			if(err){
				console.log('Couldn\'t find Genres')
			} else {
				res.json(Genres);
			}
		})
	})
	.post(function (req, res) { 
			var newGenre = new Genre()
						newGenre.Genre_name = req.body.name
						newGenre.save(function() {
							res.json(newGenre)
						})
				})

	router.route('/Genres/:GenreId')
	.get(function (req, res) {
		console.log("finding a given Genre in fixins")
		var id = req.params.GenreId 
		Genre.findOne({_id: id}).exec(function(err, Genre){
			if(err){
				console.log("couldn\t find this Genre")
			}
			else{
				res.json(Genre)
			}
		})
	})
	.delete(function (req, res) {
		console.log("deleting a given Genre in fixins")
		var id = req.params.GenreId 
		Genre.findOne({_id: id}).remove().exec(function(err, Genre){
			if(err){
				console.log("couldn\t delete this Genre")
			}
			else{
				res.json(Genre)
			}
		})
	})

}