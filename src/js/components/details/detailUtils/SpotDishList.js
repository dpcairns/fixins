import React from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router'
import StarRatingComponent from 'react-star-rating-component';

export default class SpotDishList extends React.Component{
  render(){
    let spot= this.props.spot
    let allDishes = this.props.allDishes
    let allReviews = this.props.allReviews
    let putOneSubNeighborhoodInState = this.props.putOneSubNeighborhoodInState
    let putOneDishInState = this.props.putOneDishInState
    let subNeighorhoodId = this.props.subNeighorhoodId
    let toggleDishModal = this.props.toggleDishModal

    let itemBoxStyle = {minHeight:"200px", padding:"8px",margin:"5px",float:"left",textAlign:"center", borderRadius:"10px"}

    			function findDishesFilter(dish){
    									return (dish.dish_spot._id === spot._id && dish.approved)
    						}
    				let theseDishes = allDishes.filter(findDishesFilter)
    				let dishNodes = theseDishes.map(function(dish){
    					let dishId = dish._id


    					function findReviewsFilter(review){
    					            return (review.reviewed_dish._id === dish._id)
    					      }

    						let starArray = allReviews.filter(findReviewsFilter).map(function(review){
    							return parseInt(review.review_stars)
    						})
    						let sumOfStars = []

    						let numberOfReviews =	allReviews.filter(findReviewsFilter).length
    						if(starArray.length > 0){
    						sumOfStars = starArray.reduce(function(a, b) { return a + b; });
    					}
    				let averageStars = Math.ceil(sumOfStars / starArray.length)



    									return (


                          <div style={itemBoxStyle} className="shad bg-info" key={dish._id}>

    												<Link onClick={putOneDishInState.bind(this, dishId)} to={`/dish/${dishId}`}>
    														<h3>{dish.dish_name}</h3>
    												</Link>
    											<h4>
    											{dish.dish_blurb} <br/>
    											{dish.dish_calories} calories <br/>
    											{dish.dish_price} dollars <br/>
    											<h5>{averageStars > 0 ? 'average rating (out of ' +numberOfReviews + ' reviews)' : "" }</h5>
    											{averageStars > 0 ? <StarRatingComponent
    										                    name="rate2"
    										                    editing={false}
    										                    starCount={5}
    										                    value={averageStars}
    										                />	: "no reviews yet"
    																	}									</h4>

                          </div>

    										)
    				})
    return(
      <div>
    		<div className="row text-center">
				<h3>located at {spot.spot_address !== undefined ? spot.spot_address : "123 Fake Street"} in
				<Link to={`/subNeighborhood/${subNeighorhoodId}`} onClick={putOneSubNeighborhoodInState.bind(this, subNeighorhoodId)}>
				 {" " + spot.spot_subNeighborhood.subNeighborhood_name}
				</Link>

				</h3>
				</div>
				<h3>dishes available at {spot.spot_name}</h3>
				<div className="flex flexwrap">
					{allDishes.filter(findDishesFilter).length>0 ? dishNodes : (<tr><td>no dishes for {spot.spot_name}...yet! <a onClick={toggleDishModal}>Click here to be the first to add one!</a> </td></tr>)}
				</div>
    </div>
  )
}
}
