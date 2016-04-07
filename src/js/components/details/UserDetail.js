import React from "react"
import { connect } from 'react-redux'
import CalorieDollarChart from "../utils/CalorieDollarChart"
import RemoveButton from "../utils/RemoveButton"
import Links from "../utils/Links"
class UserDetail extends React.Component{

  //the problem is that i need to put the id in state beforeeee the wrapping happens...
  //in order to make the id accessible to the wrapping
  //which means i need the id to do the wrapping...
  //

	render(){
    console.log("this.props.user")
    console.log(this.props.user)
    let allReviews = this.props.allReviews
		let allSubNeighborhoods = this.props.allSubNeighborhoods
		let allUsers = this.props.allUsers
		let allDishes = this.props.allDishes
		let allCheckIns = this.props.allCheckIns
    let thisUser = this.props.user


			function findCheckInsFilter(checkIn){
									return (checkIn.checkIn_user._id === thisUser._id || checkIn.checkIn_user === thisUser._id)
						}
			 let userCheckIns = 	allCheckIns.filter(findCheckInsFilter).map(function(checkIn){
								return checkIn
						})
				let checkInNodes = allCheckIns.filter(findCheckInsFilter).map(function(checkIn){
									return (
                    <div>

                      <tr key={checkIn._id}>
                      <td><b>{checkIn.checkIn_dish.dish_name}</b></td>
											<td>>{checkIn.checkIn_dish.dish_calories} calories</td>
											<td>{checkIn.checkIn_dish.dish_price} dollars</td>
											<td>{checkIn.checkIn_blurb}</td>
											<td>{checkIn.checkIn_dish.dish_spot.spot_name}</td>
                      </tr>
										</div>
										)
				})
			function findReviewsFilter(review){
									return (review.review_user._id === thisUser._id || review.review_user === thisUser._id)
						}
				let reviewNodes = allReviews.filter(findReviewsFilter).map(function(review){
									return (
                    <div>
                    <tr key={review._id}>
											<td><b>{review.reviewed_dish.dish_name}</b></td>
											<td>{review.reviewed_dish.dish_calories}  calories</td>
											<td>{review.reviewed_dish.dish_price} dollars</td>
											<td>{review.review_words}</td>
											<td>{review.review_stars} stars</td>
											<td>{review.review_date}</td>
                    </tr>
										</div>
										)
				})


    return (
<div>
<div className="container bg-warning">
<div className="row">
    <div className="col-md-6">
    <Links/>
    </div>
    <div className="col-md-6">
      <ul>
        <li><h2>{this.props.user.username}</h2></li>
        <li> Password: {this.props.user.password}</li>
        <li> SubNeighborhood: {this.props.user.user_sub_neighborhood.subNeighborhood_name}</li>
      </ul>
    </div>
</div>
<CalorieDollarChart username={thisUser.username} userCheckIns={userCheckIns} />

<div>
    <div className="row">
      <div className="col-md-6">
          <h1>CheckIns</h1>
              <table className="table">
                <tbody>
              {checkInNodes}
              </tbody>
              </table>
      </div>
      <div className="col-md-6">
          <h1>Reviews</h1>
          <table className="table">
            <tbody>
            {reviewNodes}
            </tbody>
          </table>
      </div>
  </div>
</div>
</div>
</div>
      )
  }
}


const mapStateToProps = (state) => {
      const selectUser = (users, id) => {
          const ridiculousArray = users.filter(x => x._id === id)
          return ridiculousArray[0]
        }
        console.log("mapStateToProps(selectUser...)")
      return {
        //so if this can get an id, everything works...
        user: selectUser(state.users, state.user._id),
        allDishes: state.dishes,
        allReviews: state.reviews,
    		allSubNeighborhoods: state.subNeighborhoods,
    		allUsers: state.users,
    		allDishes: state.dishes,
    		allCheckIns: state.checkIns
        }
}

//here is the contradiction...it needs this id before it does the weapping...
const UserDetailContainer = connect(mapStateToProps)(UserDetail)
export default UserDetailContainer
