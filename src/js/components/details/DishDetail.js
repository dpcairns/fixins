import React from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router'
import RemoveButton from "../utils/RemoveButton"
import Links from "../utils/Links"

class DishDetail extends React.Component{
	render(){
		let spotStyle={maxHeight:"400px",borderRadius:"10px"}
		let listStyle={maxHeight:"400px",overflowX:"hidden",overflowY:"scroll"}
    let allReviews = this.props.allReviews
		let allSubNeighborhoods = this.props.allSubNeighborhoods
		let allUsers = this.props.allUsers
		let allDishes = this.props.allDishes
    let allSpots = this.props.allSpots
		let allCheckIns = this.props.allCheckIns
		let putOneUserInState = this.props.putOneUserInState
		let putOneSpotInState = this.props.putOneSpotInState
		let putOneGenreInState = this.props.putOneGenreInState
		let putOneDishInState = this.props.putOneDishInState
		let putOneSubNeighborhoodInState = this.props.putOneSubNeighborhoodInState
    let dish = this.props.dish

function findCheckInsFilter(checkIn){
            return (checkIn.checkIn_dish._id === dish._id)
      }
  let checkInNodes = allCheckIns.filter(findCheckInsFilter).map(function(checkIn){
		let userId = checkIn.checkIn_user._id
		let dishId = checkIn.checkIn_dish._id
            return (


								 <tr key={checkIn._id}>

																	<td><h5>{checkIn.checkIn_blurb}</h5></td>
																	<td><Link to={`/user/${userId}`} onClick={putOneUserInState.bind(this, userId)}>
																	<h5>{checkIn.checkIn_user.username}</h5>
																	</Link></td>
																	<td><h5>{checkIn.checkIn_date}</h5></td>

																	</tr>

              )
  })

function findReviewsFilter(review){
            return (review.reviewed_dish._id === dish._id)
      }
  let reviewNodes = allReviews.filter(findReviewsFilter).map(function(review){
		let userId = review.review_user._id
		let dishId = review.reviewed_dish._id
            return (
							<tr key={review._id}>
								<td><h5>{review.review_words} </h5></td>
								<td><Link to={`/user/${userId}`} onClick={putOneUserInState.bind(this, userId)}>
									<h5>{review.review_user.username} </h5> </Link>
								</td>
								<td><h4>{review.review_stars} stars </h4></td>
								<td><h4>{review.review_date}</h4></td>
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
          <div style={spotStyle} className="bg-info med-pad med-mar" key={spotId}>
								<div className="row">
													<div className="col-md-6">
														<h3>{dish.dish_name} is available at <Link onClick={putOneSpotInState.bind(this, spotId)} to={`/spot/${spotId}`}> {spot.spot_name}
															</Link></h3>
													</div>
													<div className="col-md-6">
														<h3>	({dish.dish_calories} calories for ${dish.dish_price} = {parseInt(dish.dish_calories / dish.dish_price)} calorieDollars) </h3>
													</div>
								</div>
								<div className="row">

										<h4>
										<div className="col-md-4">
										located in <Link onClick={putOneSubNeighborhoodInState.bind(this, subNeighborhoodId)} to={`/subNeighborhood/${subNeighborhoodId}`}>{spot.spot_subNeighborhood.subNeighborhood_name}</Link>
										</div>
										<div className="col-md-4">
										Genre: <Link onClick={putOneGenreInState.bind(this, spot.spot_genres[0]._id)} to={`/genre/${spot.spot_genres[0]._id}`}>{spot.spot_genres[0].genre_name}</Link>
										</div>
										<div className="col-md-4">
									  blurb: {spot.spot_blurb}
											</div>
											</h4>
									</div>
          </div>

                )
    })

    return (
<div className="bg-warning med-pad med-mar">
<div>
		<div className="row">
		<div className="col-md-6">
		<h1>Detail page for {dish.dish_name}</h1>
		</div>
		<div className="col-md-3">
		<h3><Link to="index/newCheckIn"> Just ate this? CheckIn!</Link></h3>
		</div>
		<div className="col-md-3">
		<h3><Link to="index/newReview"> Review this dish.</Link></h3>
		</div>
		</div>
						{spotNode}
				<div className="row">
				<div className="col-md-6" style={listStyle}>
				<table className="table">
				<caption><h3>CheckIns for {dish.dish_name}</h3></caption>

						<tbody>
            {allCheckIns.filter(findCheckInsFilter).length>0 ? checkInNodes : (<tr><td>no checkIns for {dish.dish_name}...yet! <Link to="index/newCheckIn"> Click here to be the first!.</Link> </td></tr>)}
						</tbody>
				</table>
				</div>
				<div className="col-md-6" style={listStyle}>
				<table className="table">

				<caption><h3>Reviews for {dish.dish_name}</h3></caption>
				<tbody>
				{allReviews.filter(findReviewsFilter).length>0 ? reviewNodes : (<tr><td>no reviews for {dish.dish_name}...yet! <Link to="index/newReview">Click here to be the first!</Link> </td></tr>)}
				</tbody>
				</table>
				</div>
				</div>
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

function putOneGenreInState(_id){
  return {type: "PUT_ONE_GENRE_IN_STATE", _id:_id}
}

function putOneUserInState(_id){
  return {type: "PUT_ONE_USER_IN_STATE", _id:_id}
}

function putOneDishInState(_id){
  return {type: "PUT_ONE_DISH_IN_STATE", _id:_id}
}

const mapDispatchToProps = (dispatch) => {
 return {putOneSpotInState: (_id) => dispatch(putOneSpotInState(_id)),
	 	putOneSubNeighborhoodInState: (_id) => dispatch(putOneSubNeighborhoodInState(_id)),
		putOneUserInState: (_id) => dispatch(putOneUserInState(_id)),
		putOneGenreInState: (_id) => dispatch(putOneGenreInState(_id)),
		putOneDishInState: (_id) => dispatch(putOneDishInState(_id)),


 }
}

const DishDetailContainer = connect(mapStateToProps, mapDispatchToProps)(DishDetail)
export default DishDetailContainer
