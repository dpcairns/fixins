var User = require('../src/js/models/UserModel') 
var express = require('express');
var router = express.Router()

module.exports = function(){

	router.route('/Users')
	.get(function (req, res) { 
		console.log('finding all Users in fixins')
		User.find({}).exec(function(err, Users){
			if(err){
				console.log('Couldn\'t find Users')
			} else {
				res.json(Users);
			}
		})
	})
	.post(function (req, res) { //server behavior connected to $scope.addContact()..but how?
			var newUser = new User()
						newUser.username = req.body.name
						newUser.password = req.body.password
						newUser.neighborhood = req.body.neighborhood
						newUser.save(function() {
							res.json(newUser)
						})
				})

router.route('/Users/:UserId')
	.get(function (req, res) {
		console.log("finding a given User in fixins")
		var id = req.params.UserId 
		User.findOne({_id: id}).exec(function(err, User){
			if(err){
				console.log("couldn\t find this User")
			}
			else{
				res.json(User)
			}
		})
	})
	.delete(function (req, res) {
		console.log("deleting a given User in fixins")
		var id = req.params.UserId 
		User.findOne({_id: id}).remove().exec(function(err, User){
			if(err){
				console.log("couldn\t delete this User")
			}
			else{
				res.json(User)
			}
		})
	})

}