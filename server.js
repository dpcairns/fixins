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


const generateSalt = (numBytes) => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(numBytes, (error, buf) => {
      if (error) return reject(error)
      resolve(buf.toString('hex'))
    })
  })
}

const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    generateSalt(32).then((salt) => {
      crypto.pbkdf2(password, salt, 64000, 256, 'sha256', (err, key) => {
        if (err) return reject(err)
        resolve({ salt, hash: key.toString('hex') })
      })
    })
  })
}

const isPasswordSame = (hash, salt, plaintext) => {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(plaintext, salt, 64000, 256, 'sha256', (err, key) => {
      if (err) return reject(err)
      resolve(key.toString('hex') === hash)
    })
  })
}

/*
router.post('/login', function (req, res) {
    db.User.findOne({username: req.body.username}).then((user) => {
      // Plain text passwords? TERRIBLE IDEA
      if (user) {
        isPasswordSame(user.password, user.salt, req.body.password).then((result) => {
          if (result) {
            let token = jwt.sign(user.dataValues, config.api_secret, {
              expiresIn: 60 * 60
            })
            return res.json({success: true, username: user.username, token})
          }
          return res.json({success: false, message: 'Authentication Failed!'})
        })
      } else {
        return res.json({success: false, message: 'Authentication Failed!'})
      }
    })
  })
*/
app.use('/api', router)

app.listen(4444)
console.log("fixin to load on port 4444")
