import React from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Links from "../../utils/Links"
import * as FixinsActions from "../../../actions/FixinsActions"
import NewCheckInPage from '../../pages/NewCheckInPage'
import StarRatingComponent from 'react-star-rating-component'

export default class YourReviewsAndCheckIns extends React.Component{

render(){
  let allReviews = this.props.allReviews
  let allCheckIns = this.props.allCheckIns
  let allDishes = this.props.allDishes
  let putOneDishInState = this.props.putOneDishInState
  let thisUser = this.props.thisUser
  let listStyle={maxHeight:"400px",overflowX:"hidden",overflowY:"scroll"}

  function findCheckInsFilter(checkIn){
              return (checkIn.checkIn_user._id === thisUser._id || checkIn.checkIn_user === thisUser._id)
        }
   let userCheckIns = 	allCheckIns.filter(findCheckInsFilter).map(function(checkIn){
            return checkIn
        })
    let checkInNodes = allCheckIns.filter(findCheckInsFilter).map(function(checkIn){
      let dishId = checkIn.checkIn_dish._id
              return (
                  <tr key={checkIn._id}>

                  <td>
                  <h4> <Link to={`/dish/${dishId}`} onClick={putOneDishInState.bind(this, dishId)}>
                   {checkIn.checkIn_dish.dish_name}
                   </Link></h4></td>
                  <td><h4>{checkIn.checkIn_dish.dish_calories} calories</h4></td>
                  <td><h4>{checkIn.checkIn_dish.dish_price} dollars</h4></td>
                  <td><h5>{checkIn.checkIn_blurb}</h5></td>
                  <td><h4>{checkIn.checkIn_dish.dish_spot.spot_name}</h4></td>

                  </tr>

                )
    }).reverse()
  function findReviewsFilter(review){
              return (review.review_user._id === thisUser._id || review.review_user === thisUser._id)
        }
    let reviewNodes = allReviews.filter(findReviewsFilter).map(function(review){
      let dishId = review.reviewed_dish._id
              return (

                <tr key={review._id}>
                  <td>
                  <h4><Link to={`/dish/${dishId}`} onClick={putOneDishInState.bind(this, dishId)}>{review.reviewed_dish.dish_name}</Link></h4></td>
                  <td><h4>{review.reviewed_dish.dish_calories}  calories</h4></td>
                  <td><h4>{review.reviewed_dish.dish_price} dollars </h4></td>
                  <td><h5>{review.review_words} </h5></td>
                  <td><StarRatingComponent
              name="rate2"
              editing={false}
              starCount={5}
              value={review.review_stars}
          /></td>
                  <td><h4>{review.review_date}</h4></td>
                </tr>
                )
    }).reverse()

  return(
    <div className="row">
      <div className="col-md-6" style={listStyle}>
          <h1>Your CheckIns</h1>
              <table className="table">
                <tbody>
              {checkInNodes}
              </tbody>
              </table>
      </div>
      <div className="col-md-6" style={listStyle}>
          <h1>Your Reviews</h1>
          <table className="table">
            <tbody>
            {reviewNodes}
            </tbody>
          </table>
      </div>
  </div>
)
}
}
