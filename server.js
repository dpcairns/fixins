var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var crypto = require('crypto')
var router = express.Router()
var jwt = require('jsonwebtoken')
var Neighborhood = require('./src/js/models/NeighborhoodModel')
var Subneighborhood = require('./src/js/models/SubNeighborhoodModel')
var User = require('./src/js/models/UserModel')
var CheckIn = require('./src/js/models/GenreModel')
var Genre = require('./src/js/models/GenreModel')
var Review = require('./src/js/models/ReviewModel')
var Dish = require('./src/js/models/DishModel')
var Spot = require('./src/js/models/SpotModel')
var db ='mongodb://localhost/test'

mongoose.connect(db)

require('./routes/UserRoutes')(router)
require('./routes/SpotRoutes')(router)
require('./routes/DishRoutes')(router)
require('./routes/GenreRoutes')(router)
require('./routes/ReviewRoutes')(router)
require('./routes/CheckInRoutes')(router)
require('./routes/NeighborhoodRoutes')(router)
require('./routes/SubNeighborhoodRoutes')(router)

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

/*
router.route('/login').get(function(req, res){
				User.findOne({username: req.body.username}, function(err, user){
					if(err)
						return done(err);
					if(!user)
						console.log('No User found')
					if(!user.validPassword(req.body.password)){
						console.log('invalid password');
					}

					res.json(user);

				});
})
*/
app.use('/api', router)

app.listen(4444)
console.log("fixin to load on port 4444")
