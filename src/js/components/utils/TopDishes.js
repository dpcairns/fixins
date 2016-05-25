import React from "react"
import { Link } from "react-router"
import StarRatingComponent from 'react-star-rating-component';

export default class TopFiveSubNeighborhoods extends React.Component{
render(){
  let dishesBoxStyle = {padding: "10px", margin:"0 auto", height: "100%", background:"lightblue"}
  let scrollItemStyle = {width: "80%", margin: "0 auto"}
  let topFiveDishNodes = []
  let allDishes = this.props.dishes
  let allReviews = this.props.reviews
  			if (this.props.dishes.length>35){
  				let allCheckIns = this.props.checkIns
          let putOneSpotInState = this.props.putOneSpotInState
          let putOneDishInState = this.props.putOneDishInState
  				let sortedDishes = []
  				allDishes.forEach(function(dish){
  					function checkInFilter(checkIn){return (checkIn.checkIn_dish._id === dish._id)}
  					let thisManyCheckIns = allCheckIns.filter(checkInFilter).length
  					sortedDishes.push({
  					numberOfCheckIns: thisManyCheckIns,
  					_id: dish._id,
  					spotId: dish.dish_spot._id,
  					nameOfSpot: dish.dish_spot.spot_name,
  					name: dish.dish_name})
  				})
  				sortedDishes.sort(function(dishA, dishB){return dishB.numberOfCheckIns - dishA.numberOfCheckIns})
  				let topFiveDishes = sortedDishes.slice(0,35)
  				topFiveDishNodes = topFiveDishes.map(function(dish){
  					function findReviewsFilter(review){
  											return (review.reviewed_dish._id === dish._id)
  								}
  						let numberOfReviews =	allReviews.filter(findReviewsFilter).length
  						let starArray = allReviews.filter(findReviewsFilter).map(function(review){
  							return parseInt(review.review_stars)
  						})
  						let sumOfStars = []

  							if(starArray.length > 0){
  							sumOfStars = starArray.reduce(function(a, b) { return a + b; });
  						}
  						let averageStars = Math.ceil(sumOfStars / allReviews.filter(findReviewsFilter).length)




  					return (<h4 className="text-center" style={scrollItemStyle} key={dish._id}>
  						<Link onClick={putOneDishInState.bind(this, dish._id)} to={`/dish/${dish._id}`}>
  						 {dish.name + " "}
  						</Link>
  						  at
  						 <Link to={`/spot/${dish.spotId}`}  onClick={putOneSpotInState.bind(this, dish.spotId)}>
  						  {" " + dish.nameOfSpot}
  						 </Link>
  						  <br/><i>has {dish.numberOfCheckIns} checkIns </i>

  														<h5>
  														{averageStars > 0 ?
  														'average rating (out of ' +numberOfReviews + ' reviews)' : ""
  														}</h5>
  														{averageStars > 0 ?
  														<StarRatingComponent
  																							name="rate2"
  																							editing={false}
  																							starCount={5}
  																							value={averageStars}
  																					/> : "no reviews yet"
  																				}
  																					<br/>
  																					<hr/>

  							</h4>
  					 )
  				})

  			}

  return(
    <div style={dishesBoxStyle} className="hidden-xs shadow-container">
            <div className="DishBoxAnim space-between">

      {allDishes.length>35 ? topFiveDishNodes : <img height="50" width="100" src="./static/loading.gif" />}

      </div>
    </div>
  )
}
}
