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
import DishSpot from "./detailUtils/DishSpot"
import DishCheckIns from "./detailUtils/DishCheckIns"
import DishReviews from "./detailUtils/DishReviews"
import DishDetailHeader from "./detailUtils/DishDetailHeader"

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
		let putOneGenreInState = this.props.putOneGenreInState
		let putOneDishInState = this.props.putOneDishInState
		let putOneSubNeighborhoodInState = this.props.putOneSubNeighborhoodInState
    let dish = this.props.dish
		let toggleCheckInModal = this.props.toggleCheckInModal
		let toggleReviewModal = this.props.toggleReviewModal
		function findReviewsFilter(review){
		            return (review.reviewed_dish._id === dish._id)
		      }

			let starArray = allReviews.filter(findReviewsFilter).map(function(review){
				return parseInt(review.review_stars)
			})
			let sumOfStars = []
			let numberOfReviews =	allReviews.filter(findReviewsFilter).length

				if(starArray.length > 0){
				sumOfStars = starArray.reduce(function(a, b) { return a + b; });
			}
			let averageStars = Math.ceil(sumOfStars / allReviews.filter(findReviewsFilter).length)

    return (
<div className="bg-warning med-pad med-mar">
<div>
				<DishDetailHeader
						dish={dish}
						averageStars={averageStars}
						numberOfReviews={numberOfReviews}
						toggleReviewModal={toggleReviewModal}
						toggleCheckInModal={toggleCheckInModal} />

				<DishSpot
					allSpots={allSpots}
					dish={dish}
					putOneSpotInState={putOneSpotInState}
					putOneSubNeighborhoodInState={putOneSubNeighborhoodInState}
					putOneGenreInState={putOneGenreInState}
				/>

				<div className="row">
						<DishCheckIns
						dish={dish}
						allCheckIns={allCheckIns}
						putOneUserInState={putOneUserInState}
						 />
						<DishReviews
						dish={dish}
						toggleReviewModal ={toggleReviewModal}
						allReviews={allReviews}
						putOneUserInState={putOneUserInState}
						/>
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
