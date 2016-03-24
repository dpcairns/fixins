var Review = require('../src/js/models/ReviewModel') 

module.exports = function(router){

	router.route('/Reviews')
	.get(function (req, res) { 
		console.log('finding all Reviews in fixins')
		Review.find({})
		.populate('reviewed_dish')
		.populate('review_user')
		.exec(function(err, Reviews){
			if(err){
				console.log('Couldn\'t find Reviews')
			} else {
				res.json(Reviews);
			}
		})
	})
	.post(function (req, res) { 
			var newReview = new Review()
						newReview.reviewed_dish = req.body.reviewed_dish
						newReview.review_user = req.body.review_user
						newReview.review_stars = req.body.stars
						newReview.review_words = req.body.words
						newReview.save()
						Review.findOne({review_words: newReview.review_words})
							.populate('reviewed_dish')
							.populate('review_user')
							.exec(function(err, Review){
								if(err){
									console.log('Couldn\'t find Review')
								} else {
									res.json(Review);
								}
						})
				})

router.route('/Reviews/:ReviewId')
	.get(function (req, res) {
		console.log("finding a given Review in fixins")
		var id = req.params.ReviewId 
		Review.findOne({_id: id}).exec(function(err, Review){
			if(err){
				console.log("couldn\t find this Review")
			}
			else{
				res.json(Review)
			}
		})
	})
	.delete(function (req, res) {
		console.log("deleting a given Review in fixins")
		var id = req.params.ReviewId 
		Review.findOne({_id: id}).remove().exec(function(err, Review){
			if(err){
				console.log("couldn\t delete this Review")
			}
			else{
				res.json(Review)
			}
		})
	})

}