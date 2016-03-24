var Dish = require('../src/js/models/DishModel') 


module.exports = function(router){
router.route('/Dishes')
	.get(function (req, res) { 
		console.log('finding all Dishes in fixins')
		Dish.find({})
		.populate('dish_spot')
		.populate('dish_genres')
		.exec(function(err, Dishes){
			if(err){
				console.log('Couldn\'t find Dishes')
			} else {
				res.json(Dishes);
			}
		})
	})
	.post(function (req, res) {
			var newDish = new Dish()
						newDish.dish_name = req.body.name
						newDish.dish_spot = req.body.spot
						newDish.dish_blurb = req.body.blurb
						newDish.dish_calories = req.body.calories
						newDish.dish_price = req.body.price
						newDish.dish_genres = req.body.genres
						newDish.save()
						Dish.findOne({dish_name: newDish.dish_name})
							.populate('dish_spot')
							.populate('dish_genres')
							.exec(function(err, Dish){
								if(err){
									console.log('Couldn\'t find Dish')
								} else {
									res.json(Dish);
								}
							})
						})
		

router.route('/Dishes/:DishId')
	.get(function (req, res) {
		console.log("finding a given Dishes in fixins")
		var id = req.params.DishId 
		Dish.findOne({_id: id}).exec(function(err, Dish){
			if(err){
				console.log("couldn\t find this Dishes")
			}
			else{
				res.json(Dish)
			}
		})
	})
	.delete(function (req, res) {
		console.log("deleting a given Dishes in fixins")
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