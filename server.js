var express = require('express');
var bodyParser = require('body-parser'); 
var app = express();
var mongoose = require('mongoose');
var router = express.Router()
var Dish = require('./src/js/models/DishModel') 
var db ='mongodb://localhost/test'

mongoose.connect(db)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
	}))

app.use(express.static(__dirname + "/src"))

router.use(function(req,res,next){
	console.log('hello from router.use function')
	next()
})

router.get('/', function(req,res){
	res.send('hello and welcome to the api')
})

require('./routes/UserRoutes')
require('./routes/SpotRoutes')
require('./routes/DishRoutes')
require('./routes/GenreRoutes')
require('./routes/ReviewRoutes')
require('./routes/CheckInRoutes')
require('./routes/NeighborhoodRoutes')
require('./routes/SubNeighborhoodRoutes')

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
						newDish.dish_name = req.body.name
						newDish.dish_spot = req.body.spot
						newDish.dish_calories = req.body.calories
						newDish.dish_price = req.body.price
						newDish.dish_blurb = req.body.blurb
						newDish.dish_genres = req.body.genres
						newDish.dish_reviews = req.body.reviews

						newDish.save(function(err) {
							if(err){console.log("couldn't save dish")}
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


app.use('/api', router)



app.listen(4444)
console.log("fixin to load on port 4444")
