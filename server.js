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
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}
var bcrypt = require('bcrypt')
var db ='mongodb://localhost/test'
mongoose.connect(db)

app.use(allowCrossDomain);
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: 'SOMERANDOMSECRETHERE',
    cookie: { maxAge: 60000 }
  })
);


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

	next()
})

router.get('/', function(req,res){
	res.send('hello and welcome to the api')
})

router.route('/Session').get(function(req, res){
  console.log('checking for session')
if(req.session.user) {
  console.log("found a session with this username:")
  console.log(req.session.user)
  return res.json(req.session.user);
}
})

router.route('/login').post(function(req, res){
				User.findOne({username: req.body.username}, function(err, user){
					if(err)
						return res.json("LoginError");
					if(!user)
						return res.json("LoginError")
					bcrypt.compare(req.body.password, user.password, function(err, response) {
						if(err || !response){
							return res.json("LoginError");
						}
            req.session.user = user;
						return res.json(req.session.user);
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
