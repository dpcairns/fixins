var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session')
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
var bcrypt = require('bcrypt')
var db ='mongodb://localhost/test'
mongoose.connect(db)

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

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


router.route('/login').post(function(req, res){
				User.findOne({username: req.body.username}, function(err, user){
					if(err)
						return res.json("LoginError");
					if(!user)
						return res.json("LoginError2")
					bcrypt.compare(req.body.password, user.password, function(err, response) {
						if(err || !response){
							return res.json("LoginError3");
						}
						return res.json(user);

				})
			})
			.populate('user_sub_neighborhood')
			.populate('user_review')
			.populate('user_checkIns')
			.populate('user_favorites')
			.populate('user_friends')
			.exec()
})


app.use('/api', router)

app.listen(4444)
console.log("fixin to load on port 4444")
