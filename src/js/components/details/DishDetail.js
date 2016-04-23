import React from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router'
import RemoveButton from "../utils/RemoveButton"
import * as FixinsActions from "../../actions/FixinsActions"
import NewCheckInPage from "../pages/NewCheckInPage"
import NewReviewPage from "../pages/NewReviewPage"
import Links from "../utils/Links"
import { Modal, Button } from "react-bootstrap"
import StarRatingComponent from 'react-star-rating-component';

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
  }).reverse()

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
console.log(averageStars)

  let reviewNodes = allReviews.filter(findReviewsFilter).map(function(review){
		let userId = review.review_user._id
		let dishId = review.reviewed_dish._id
            return (
							<tr key={review._id}>
								<td><h5>{review.review_words} </h5></td>
								<td><Link to={`/user/${userId}`} onClick={putOneUserInState.bind(this, userId)}>
									<h5>{review.review_user.username} </h5> </Link>
								</td>
								<td><h4>
								<StarRatingComponent
																	name="rate2"
																	editing={false}
																	starCount={5}
																	value={review.review_stars}
															/>
 								</h4></td>
								<td><h4>{review.review_date}</h4></td>
							</tr>
						)
  }).reverse()


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

let toggleCheckInModal = this.props.toggleCheckInModal
let toggleReviewModal = this.props.toggleReviewModal
    return (
<div className="bg-warning med-pad med-mar">
<div>
		<div className="row">
		<div className="col-md-6 text-center">
		<h1>{dish.dish_name}</h1><br/>

		</div>
		<div className="col-md-3">
		<h3><a onClick={toggleCheckInModal}> Just ate this? CheckIn!</a></h3>
		</div>
		<div className="col-md-3">
		<h3><a  onClick={toggleReviewModal}> Review this dish.</a></h3>
		</div>
		</div>
		<div className="row text-center">
		<h2>
		{averageStars > 0 ?
		<StarRatingComponent
											name="rate2"
											editing={false}
											starCount={5}
											value={averageStars}
									/> : "no reviews yet"
								}
								</h2>
								<h5>{averageStars > 0 ? 'average rating' : "" }</h5>

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
				{allReviews.filter(findReviewsFilter).length>0 ? reviewNodes : (<tr><td>no reviews for {dish.dish_name}...yet! <a onClick={toggleReviewModal}>Click here to be the first!</a> </td></tr>)}
				</tbody>
				</table>
				</div>
				</div>
    </div>


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

 <Modal show={this.props.showReviewModal} bsSize="small" aria-labelledby="contained-modal-title-sm">
	 <Modal.Header>
		 <Modal.Title id="contained-modal-title-sm">Write a review!</Modal.Title>
	 </Modal.Header>
	 <Modal.Body>
		<NewReviewPage toggleReviewModal={toggleReviewModal}/>
	 </Modal.Body>
	 <Modal.Footer>
		 <Button onClick={toggleReviewModal}>Close</Button>
	 </Modal.Footer>
 </Modal>






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
    		allCheckIns: state.checkIns,
				showReviewModal: state.showReviewModal,
				showCheckInModal: state.showCheckInModal
        }
}

const toggleCheckInModal = () => {
	return {type:"TOGGLE_CHECKIN_MODAL"}
}

const toggleReviewModal = () => {
	return {type:"TOGGLE_REVIEW_MODAL"}
}


const mapDispatchToProps = (dispatch) => {
 return {putOneSpotInState: (_id) => dispatch(FixinsActions.putOneSpotInState(_id)),
	 	putOneSubNeighborhoodInState: (_id) => dispatch(FixinsActions.putOneSubNeighborhoodInState(_id)),
		putOneGenreInState: (_id) => dispatch(FixinsActions.putOneGenreInState(_id)),
		putOneUserInState: (_id) => dispatch(FixinsActions.putOneUserInState(_id)),
		putOneDishInState: (_id) => dispatch(FixinsActions.putOneDishInState(_id)),
	 	toggleCheckInModal: () => dispatch(toggleCheckInModal()),
	 	toggleReviewModal: () => dispatch(toggleReviewModal())


 }
}

const DishDetailContainer = connect(mapStateToProps, mapDispatchToProps)(DishDetail)
export default DishDetailContainer
