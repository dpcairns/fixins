var Dish = require('../src/js/models/DishModel') 
var express = require('express');
var router = express.Router()


module.exports = function(){
router.route('/Dishes')
	.get(function (req, res) { 
		console.log('finding all Dishes in fixins')
		Dish.find({}).exec(function(err, Dishes){
			if(err){
				console.log('Couldn\'t find Dishes')
			} else {
				res.json(Dishes);
			}
		})
	})
	.post(function (req, res) {
			var newDish = new Dish()
						newDish.Dish_name = req.body.name
						newDish.Dish_spot = req.body.spot
						newDish.Dish_calories = req.body.calories
						newDish.Dish_price = req.body.price
						newDish.Dish_blurb = req.body.blurb
						
						newDish.save(function(err) {
							newDish.Dish_genres = someGenre._id
							newDish.Dish_spot = someSpot._id

							res.json(newDish)
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