import React from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router'
import RemoveButton from "../utils/RemoveButton"
import Links from "../utils/Links"

class DishDetail extends React.Component{
	render(){
    let allReviews = this.props.allReviews
		let allSubNeighborhoods = this.props.allSubNeighborhoods
		let allUsers = this.props.allUsers
		let allDishes = this.props.allDishes
    let allSpots = this.props.allSpots
		let allCheckIns = this.props.allCheckIns
		let putOneUserInState = this.props.putOneUserInState
		let putOneSpotInState = this.props.putOneSpotInState
		let putOneSubNeighborhoodInState = this.props.putOneSubNeighborhoodInState

    let dish = this.props.dish

function findCheckInsFilter(checkIn){
            return (checkIn.checkIn_dish._id === dish._id)
      }
  let checkInNodes = allCheckIns.filter(findCheckInsFilter).map(function(checkIn){
		let userId = checkIn.checkIn_user._id
            return (
              <tr key={checkIn._id}>
                <td>{checkIn.checkIn_blurb}</td>
								<td> <Link onClick={putOneUserInState.bind(this, userId)} to={`/user/${userId}`}>
								{checkIn.checkIn_user.username}
								</Link></td>
								<td>{checkIn.checkIn_date}</td>
                </tr>

              )
  })

function findReviewsFilter(review){
            return (review.reviewed_dish._id === dish._id)
      }
  let reviewNodes = allReviews.filter(findReviewsFilter).map(function(review){
		let userId = review.review_user._id
            return (
              <tr key={review._id}>
                <td>{review.review_words}</td>
                <td>{review.review_stars} stars</td>
                <td>{review.review_date}</td>
								<td> <Link onClick={putOneUserInState.bind(this, userId)} to={`/user/${userId}`}>
								{review.review_user.username}
								</Link></td>
                </tr>

              )
  })


  function findSpotFilter(spot){
              return (dish.dish_spot._id === spot._id)
        }

    let spotNode = allSpots.filter(findSpotFilter).map(function(spot){
			let subNeighborhoodId = spot.spot_subNeighborhood._id
      let spotId = spot._id
              return (
                <tbody key={spotId}>
                  <tr>
										<td><h3>{dish.dish_name} is available at
										 <Link onClick={putOneSpotInState.bind(this, spotId)} to={`/spot/${spotId}`}>
											{spot.spot_name}
											</Link></h3></td>
										<td>
										<Link  onClick={putOneSubNeighborhoodInState.bind(this, subNeighborhoodId)} to={`/subNeighborhood/${subNeighborhoodId}`}>{spot.spot_subNeighborhood.subNeighborhood_name}</Link></td>
	                  <td>genre: {spot.spot_genres[0].genre_name}</td>
	                  <td>blurb: {spot.spot_blurb}</td>
                  </tr>
                </tbody>

                )
    })

    return (
<div className="bg-warning">
<div>
		<h1>Detail page for {dish.dish_name}</h1>
				<table className="table">
						{spotNode}
				</table>
				<div className="row">
				<div className="col-md-6">
				<table className="table">
				<caption>Reviews for {dish.dish_name}</caption>
						<tbody>
            {allReviews.filter(findReviewsFilter).length>0 ? reviewNodes : (<tr><td>no reviews for {dish.dish_name}...yet! <Link to="index/newReview">Click here to be the first!</Link> </td></tr>)}
						</tbody>
				</table>
				</div>
				<div className="col-md-6">
				<table className="table">
				<caption>CheckIns for {dish.dish_name}</caption>

						<tbody>
            {allCheckIns.filter(findCheckInsFilter).length>0 ? checkInNodes : (<tr><td>no checkIns for {dish.dish_name}...yet! <Link to="index/newCheckIn"> Click here to be the first!.</Link> </td></tr>)}
						</tbody>
				</table>
				</div>
				</div>
    </div>
		<h2><Link to="index/newCheckIn"> Click here to make a checkIn with this dish.</Link></h2>
		<h2><Link to="index/newReview"> Click here to review this dish.</Link></h2>

</div>
      )
  }
}

const mapStateToProps = (state) => {
  const selectDish = (dishes, id) => {
          const ridiculousArray = dishes.filter(x => x._id === id)
          return ridiculousArray[0]
        }
	    return {
        dish: selectDish(state.dishes, state.dish._id),
        allDishes: state.dishes,
        allReviews: state.reviews,
    		allSubNeighborhoods: state.subNeighborhoods,
    		allUsers: state.users,
    		allDishes: state.dishes,
        allSpots: state.spots,
    		allCheckIns: state.checkIns
        }
}

function putOneSpotInState(_id){
  return {type: "PUT_ONE_SPOT_IN_STATE", _id:_id}
}

function putOneSubNeighborhoodInState(_id){
  return {type: "PUT_ONE_SUBNEIGHBORHOOD_IN_STATE", _id:_id}
}


function putOneUserInState(_id){
  return {type: "PUT_ONE_USER_IN_STATE", _id:_id}
}

const mapDispatchToProps = (dispatch) => {
 return {putOneSpotInState: (_id) => dispatch(putOneSpotInState(_id)),
	 	putOneSubNeighborhoodInState: (_id) => dispatch(putOneSubNeighborhoodInState(_id)),
		putOneUserInState: (_id) => dispatch(putOneUserInState(_id))


 }
}

const DishDetailContainer = connect(mapStateToProps, mapDispatchToProps)(DishDetail)
export default DishDetailContainer
