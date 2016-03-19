var express = require('express');
var bodyParser = require('body-parser'); 
var app = express();
var mongoose = require('mongoose');
var router = express.Router()
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

require('./routes/UserRoutes.js')
require('./routes/SpotRoutes.js')
require('./routes/DishRoutes.js')
require('./routes/ReviewRoutes.js')
require('./routes/CheckInRoutes.js')
require('./routes/NeighborhoodRoutes.js')
require('./routes/SubNeighborhoodRoutes.js')


app.use('/api', router)



app.listen(4444)
console.log("fixin to load on port 4444")
