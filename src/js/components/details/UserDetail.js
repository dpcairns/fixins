import React from "react"
import { connect } from 'react-redux'
import CalorieDollarChart from "../utils/CalorieDollarChart"
import RemoveButton from "../utils/RemoveButton"
import { Link } from 'react-router'
import Links from "../utils/Links"

class UserDetail extends React.Component{

	render(){
    let allReviews = this.props.allReviews
		let allSubNeighborhoods = this.props.allSubNeighborhoods
		let allUsers = this.props.allUsers
		let allDishes = this.props.allDishes
		let allCheckIns = this.props.allCheckIns
    let thisUser = this.props.user
		let putOneDishInState = this.props.putOneDishInState
		let putOneSubNeighborhoodInState = this.props.putOneSubNeighborhoodInState
		let subNeighborhoodId = thisUser.user_sub_neighborhood._id

			function findCheckInsFilter(checkIn){
									return (checkIn.checkIn_user._id === thisUser._id || checkIn.checkIn_user === thisUser._id)
						}
			 let userCheckIns = 	allCheckIns.filter(findCheckInsFilter).map(function(checkIn){
								return checkIn
						})
				let checkInNodes = allCheckIns.filter(findCheckInsFilter).map(function(checkIn){
					let dishId = checkIn.checkIn_dish._id
									return (
                      <tr key={checkIn._id}  onClick={putOneDishInState.bind(this, dishId)}>
                      <td>

											 <Link to={`/dish/${dishId}`}>{checkIn.checkIn_dish.dish_name}
											 </Link></td>
											<td>>{checkIn.checkIn_dish.dish_calories} calories</td>
											<td>{checkIn.checkIn_dish.dish_price} dollars</td>
											<td>{checkIn.checkIn_blurb}</td>
											<td>{checkIn.checkIn_dish.dish_spot.spot_name}</td>
                      </tr>

										)
				})
			function findReviewsFilter(review){
									return (review.review_user._id === thisUser._id || review.review_user === thisUser._id)
						}
				let reviewNodes = allReviews.filter(findReviewsFilter).map(function(review){
					let dishId = review.reviewed_dish._id
									return (

                    <tr  key={review._id}>
											<td onClick={putOneDishInState.bind(this, dishId)}>
											<Link to={`/dish/${dishId}`}>{review.reviewed_dish.dish_name}</Link></td>
											<td>{review.reviewed_dish.dish_calories}  calories</td>
											<td>{review.reviewed_dish.dish_price} dollars</td>
											<td>{review.review_words}</td>
											<td>{review.review_stars} stars</td>
											<td>{review.review_date}</td>
                    </tr>
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
				<li onClick={putOneSubNeighborhoodInState.bind(this, subNeighborhoodId)}>
							<Link to={`/subNeighborhood/${subNeighborhoodId}`}>
									{this.props.user.user_sub_neighborhood.subNeighborhood_name}
							</Link>
			</li>
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
	    return {
        user: selectUser(state.users, state.user._id),
        allDishes: state.dishes,
        allReviews: state.reviews,
    		allSubNeighborhoods: state.subNeighborhoods,
    		allUsers: state.users,
    		allDishes: state.dishes,
    		allCheckIns: state.checkIns
        }
}
function putOneDishInState(_id){
  return {type: "PUT_ONE_DISH_IN_STATE", _id:_id}
}

function putOneSubNeighborhoodInState(_id){
  return {type: "PUT_ONE_SUBNEIGHBORHOOD_IN_STATE", _id:_id}
}
const mapDispatchToProps = (dispatch) => {
 return {
	 putOneDishInState: (_id) => dispatch(putOneDishInState(_id)),
	 putOneSubNeighborhoodInState: (_id) => dispatch(putOneSubNeighborhoodInState(_id))
 }
}

const UserDetailContainer = connect(mapStateToProps, mapDispatchToProps)(UserDetail)
export default UserDetailContainer
