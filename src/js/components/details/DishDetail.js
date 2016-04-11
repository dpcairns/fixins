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
              <ul key={checkIn._id}>
							<li><b>here is a checkin for the dish</b></li>
                <li>{checkIn.checkIn_blurb}</li>
								<li> <Link onClick={putOneUserInState.bind(this, userId)} to={`/user/${userId}`}>
								{checkIn.checkIn_user.username}
								</Link></li>
								<li>{checkIn.checkIn_date}</li>
                </ul>

              )
  })

function findReviewsFilter(review){
            return (review.reviewed_dish._id === dish._id)
      }
  let reviewNodes = allReviews.filter(findReviewsFilter).map(function(review){
		let userId = review.review_user._id
            return (
              <ul key={review._id}>
							<li><b>here is a review for the dish</b></li>
                <li>{review.review_words}</li>
                <li>{review.review_stars} stars</li>
                <li>{review.review_date}</li>
								<li> <Link onClick={putOneUserInState.bind(this, userId)} to={`/user/${userId}`}>
								{review.review_user.username}
								</Link></li>
                </ul>

              )
  })


  function findSpotFilter(spot){
              return (dish.dish_spot._id === spot._id)
        }

    let spotNode = allSpots.filter(findSpotFilter).map(function(spot){
			let subNeighborhoodId = spot.spot_subNeighborhood._id
      let spotId = spot._id
              return (
                <div key={spotId}>
                  <ul>
										<li><h2>This is the spot where you can get this dish:
										 <Link onClick={putOneSpotInState.bind(this, spotId)} to={`/spot/${spotId}`}>
											{spot.spot_name}
											</Link></h2></li>
										<li>
										<Link  onClick={putOneSubNeighborhoodInState.bind(this, subNeighborhoodId)} to={`/subNeighborhood/${subNeighborhoodId}`}>{spot.spot_subNeighborhood.subNeighborhood_name}</Link></li>
	                  <li>{spot.spot_genres[0].genre_name}</li>
	                  <li>{spot.spot_blurb}</li>
                  </ul>
                </div>

                )
    })

    return (
<div className="bg-warning">
<div>
		<h1>Detail page for {dish.dish_name}</h1>
		<h2><Link to="index/newCheckIn"> Click here to make a checkIn with this dish.</Link></h2>
						{spotNode}
            {reviewNodes}
            {checkInNodes}
    </div>
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
