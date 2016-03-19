var Dish = require('../src/js/models/DishModel') 

module.exports = function(){

	router.route('/Dishs')
	.get(function (req, res) { 
		console.log('finding all Dishs in fixins')
		Dish.find({}).exec(function(err, Dishs){
			if(err){
				console.log('Couldn\'t find Dishs')
			} else {
				res.json(Dishs);
			}
		})
	})
	.post(function (req, res) {
			var newDish = new Dish()
						newDish.dish_name = req.body.name
						newDish.dish_spot = req.body.spot
						newDish.dish_calories = req.body.calories
						newDish.dish_price = req.body.price
						newDish.dish_blurb = req.body.blurb
						newDish.dish_genres = req.body.genres
						
						newDish.save(function() {
							res.json(newDish)
						})
				})

	router.route('/Dishs/:DishId')
	.get(function (req, res) {
		console.log("finding a given Dish in fixins")
		var id = req.params.DishId 
		Dish.findOne({_id: id}).exec(function(err, Dish){
			if(err){
				console.log("couldn\t find this Dish")
			}
			else{
				res.json(Dish)
			}
		})
	})
	.delete(function (req, res) {
		console.log("deleting a given Dish in fixins")
		var id = req.params.DishId 
		Dish.findOne({_id: id}).remove().exec(function(err, Dish){
			if(err){
				console.log("couldn\t delete this Dish")
			}
			else{
				res.json(Dish)
			}
		})
	})

}