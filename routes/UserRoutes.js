var User = require('../src/js/models/UserModel') 

module.exports = function(router){

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
						newUser.user_sub_neighborhood = req.body.user_sub_neighborhood
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
	.put(function (req, res) {
		console.log("changing a given User in fixins")
		var id = req.params.UserId 
		User.findOne({_id: id}).exec(function(err, User){
			if(err){
				console.log("couldn\t find this User")
			}
			else{
				if (req.body.newName){
					User.username = req.body.newName
			}
				if (req.body.newPassword){
					User.password = req.body.newPassword
			}
				if (req.body.newSubNeighborhood){
					User.user_sub_neighborhood = req.body.newSubNeighborhood
			}
				if (req.body.newReview){
					User.user_reviews.push(req.body.newReview)
			}
				if (req.body.newCheckIn){
					User.user_checkIns.push(req.body.newCheckIn)
			}
				if (req.body.newFriend){
					User.user_friends.push(req.body.newFriend)
			}
				if (req.body.newFavorite){
					User.user_favorites.push(req.body.newFavorite)
			}	

				User.save()	
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