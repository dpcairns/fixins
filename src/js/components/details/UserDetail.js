import React from "react"
import { connect } from 'react-redux'
import CalorieDollarChart from "../utils/CalorieDollarChart"
import RemoveButton from "../utils/RemoveButton"
class UserDetail extends React.Component{
	render(){
    let allReviews = this.props.allReviews
		let allSubNeighborhoods = this.props.allSubNeighborhoods
		let allUsers = this.props.allUsers
		let allDishes = this.props.allDishes
		let allCheckIns = this.props.allCheckIns
			let removeUser = this.props.removeUser
      let user = this.props.user
			let findAndChangeUser = this.props.findAndChangeUser

			function findCheckInsFilter(checkIn){
									return (checkIn.checkIn_user._id === user._id || checkIn.checkIn_user === user._id)
						}
			 let userCheckIns = 	allCheckIns.filter(findCheckInsFilter).map(function(checkIn){
								return checkIn
						})
				let checkInNodes = allCheckIns.filter(findCheckInsFilter).map(function(checkIn){
									return (
										<div key={checkIn._id}>
											<ul><li><b>{checkIn.checkIn_dish.dish_name}</b></li>
											<li>{checkIn.checkIn_dish.dish_calories} calories</li>
											<li>{checkIn.checkIn_dish.dish_price} dollars</li>
											<li>{checkIn.checkIn_blurb}</li>
											<li>{checkIn.checkIn_dish.dish_spot.spot_name}</li>
											</ul>
										</div>
										)
				})
			function findReviewsFilter(review){
									return (review.review_user._id === user._id || review.review_user === user._id)
						}
				let reviewNodes = allReviews.filter(findReviewsFilter).map(function(review){
									return (
										<div key={review._id}>
											<ul><li><b>{review.reviewed_dish.dish_name}</b></li>
											<li>{review.reviewed_dish.dish_calories}  calories</li>
											<li>{review.reviewed_dish.dish_price} dollars</li>
											<li>{review.review_words}</li>
											<li>{review.review_stars} stars</li>
											<li>{review.review_date}</li>
											</ul>
										</div>
										)
				})
    return (
    <div>
    <CalorieDollarChart username={this.props.user.username} userCheckIns={userCheckIns} />

      <div className="col-md-6">
        <ul>
          <li><h2>{this.props.user.username}</h2></li>
          <li> Password: {this.props.user.password}</li>
          <li> SubNeighborhood: {this.props.user.user_sub_neighborhood.subNeighborhood_name}</li>
          <li> CheckIns: {checkInNodes}</li>
          <li> Reviews: {reviewNodes}</li>

          <li> <RemoveButton removeUser={removeUser} type="User" id={this.props.user._id}/></li>
        </ul>
      </div>    </div>
      )
  }
}

const mapStateToProps = (state) => {
      const selectUser = (users, id) => {
          const ridiculousArray = users.filter(x => x._id === id)
          return ridiculousArray[0]
        }
        console.log(selectUser(state.users, "56f6e43b12ca8480147be476"))
      return {
        user: selectUser(state.users, "56f6e43b12ca8480147be476"),
        allDishes: state.dishes,
        allReviews: state.reviews,
    		allSubNeighborhoods: state.subNeighborhoods,
    		allUsers: state.users,
    		allDishes: state.dishes,
    		allCheckIns: state.checkIns
        }
}

/*
const mapDispatchToProps = (dispatch) => {
    removeUser:
    findAndChangeUser:
}
*/

const UserDetailContainer = connect(mapStateToProps)(UserDetail)
export default UserDetailContainer
