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
		let putOneSpotInState = this.props.putOneSpotInState
    let dish = this.props.dish

function findCheckInsFilter(checkIn){
            return (checkIn.checkIn_dish._id === dish._id)
      }
  let checkInNodes = allCheckIns.filter(findCheckInsFilter).map(function(checkIn){
            return (
              <ul key={checkIn._id}>
							<li><b>here is a checkin for the dish</b></li>
                <li>{checkIn.checkIn_blurb}</li>
								<li>{checkIn.checkIn_user.username}</li>
								<li>{checkIn.checkIn_date}</li>
                </ul>

              )
  })

function findReviewsFilter(review){
            return (review.reviewed_dish._id === dish._id)
      }
  let reviewNodes = allReviews.filter(findReviewsFilter).map(function(review){
            return (
              <ul key={review._id}>
							<li><b>here is a review for the dish</b></li>
                <li>{review.review_words}</li>
                <li>{review.review_stars} stars</li>
                <li>{review.review_date}</li>
								<li>{review.review_user.username}</li>

                </ul>

              )
  })


  function findSpotFilter(spot){
              return (dish.dish_spot._id === spot._id)
        }

    let spotNode = allSpots.filter(findSpotFilter).map(function(spot){
			let subNeighborhoodId = spot.spot_subNeighborhood._id
      let spotId = spot._id
      console.log(spotId)
              return (
                <div key={spotId}>
                  <ul>
									<li onClick={putOneSpotInState.bind(this, spotId)}><h2>This is the spot where you can get this dish:
									 <Link to={`/spot/${spotId}`}>
{spot.spot_name}
</Link></h2></li>
									<li><Link to={`/subNeighborhood/${subNeighborhoodId}`}>{spot.spot_subNeighborhood.subNeighborhood_name}</Link></li>
                  <li>{spot.spot_genres[0].genre_name}</li>
                  <li>{spot.spot_blurb}</li>
                  </ul>
                </div>

                )
    })

    return (
<div>
<div className="container">
    <Links/>
		<h1>Detail page for {dish.dish_name}</h1>
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

function putOneSpotInState(_id){
  return {type: "PUT_ONE_SUBNEIGHBORHOOD_IN_STATE", _id:_id}
}

const mapDispatchToProps = (dispatch) => {
 return {putOneSpotInState: (_id) => dispatch(putOneSpotInState(_id)),
	 	putOneSubNeighborhoodInState: (_id) => dispatch(putOneSubNeighborhoodInState(_id))

 }
}

const DishDetailContainer = connect(mapStateToProps, mapDispatchToProps)(DishDetail)
export default DishDetailContainer
