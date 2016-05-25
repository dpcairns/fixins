import React from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Links from "../../utils/Links"
import * as FixinsActions from "../../../actions/FixinsActions"
import { Modal, Button } from "react-bootstrap"
import NewCheckInPage from '../../pages/NewCheckInPage'

export default class RecommendedDishes extends React.Component{
render(){
  let itemBoxStyle = {flexGrow: "1", padding:"15px", maxWidth: "250px", margin:"5px",float:"left",textAlign:"center", borderRadius:"10px"}
  let putOneDishInState = this.props.putOneDishInState
  let putOneSpotInState = this.props.putOneSpotInState
  let allDishes = this.props.allDishes
  let allReviews = this.props.allReviews
  let toggleCheckInModal = this.props.toggleCheckInModal

      				let sortedDishes = []
      				allDishes.forEach(function(dish){
      					sortedDishes.push({
              calories: dish.dish_calories,
              dollars: dish.dish_price,
              calorieDollars: parseInt(dish.dish_calories / dish.dish_price),
      					_id: dish._id,
      					spotId: dish.dish_spot._id,
      					nameOfSpot: dish.dish_spot.spot_name,
      					name: dish.dish_name})
              })
      				sortedDishes.sort(function(dishA, dishB){return dishB.calorieDollars - dishA.calorieDollars})
              let rand1 = Math.floor(Math.random()*20)
              let rand2 = Math.floor(Math.random()*20)
              let rand3 = Math.floor(Math.random()*20)
              let rand4 = Math.floor(Math.random()*20)
              let rand5 = Math.floor(Math.random()*20)
              let rand6 = Math.floor(Math.random()*20)
      				let topFiveCalorieDollarDishes = [sortedDishes[rand1],sortedDishes[rand2],sortedDishes[rand3], sortedDishes[rand4], sortedDishes[rand5], sortedDishes[rand6]]
      				let topFiveCalorieDollarDishesNodes = topFiveCalorieDollarDishes.map(function(dish){



                              function findReviewsFilter(review){
                                          return (review.reviewed_dish._id === dish._id)
                                    }

                              	let starArray = allReviews.filter(findReviewsFilter).map(function(review){
                              		return parseInt(review.review_stars)
                              	})
                                let sumOfStars = []

                                if(starArray.length > 0){
                                sumOfStars = starArray.reduce(function(a, b) { return a + b; });
                              }
                              	let averageStars = Math.ceil(sumOfStars / allReviews.filter(findReviewsFilter).length)



                            	return (
                                <div style={itemBoxStyle} className="bg-info flex" key={dish._id}>
                                <h4>
                                 <span onClick={toggleCheckInModal}>
                    						<a onClick={putOneDishInState.bind(this, dish._id)}>
                    						{dish.name + " "}
                    						</a></span>
                    						  at
                    						 <Link to={`/spot/${dish.spotId}`}  onClick={putOneSpotInState.bind(this, dish.spotId)}>
                    						  {" " + dish.nameOfSpot}
                    						 </Link>
                    						  <br/><i> gets {dish.calorieDollars} calorieDollars </i></h4>
                                  <br/>
                                  </div>)
                    				})

                            return(
                                <div className="flex top-bottom-big-mar flexCenter">
                                <h1>Some recommended dishes . . .</h1>
                                  {topFiveCalorieDollarDishesNodes}
                                  <Modal show={this.props.showCheckInModal} bsSize="small" aria-labelledby="contained-modal-title-sm">
                                  	<Modal.Header>
                                  		<Modal.Title id="contained-modal-title-sm">CheckIn!</Modal.Title>
                                  	</Modal.Header>
                                  	<Modal.Body>
                                  	 <NewCheckInPage/>
                                  	</Modal.Body>
                                  	<Modal.Footer>
                                  		<Button onClick={toggleCheckInModal}>Close</Button>
                                  	</Modal.Footer>
                                  </Modal>
                                </div>
                            )

}
}
