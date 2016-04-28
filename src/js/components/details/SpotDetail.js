import React from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router'
import RemoveButton from "../utils/RemoveButton"
import * as FixinsActions from "../../actions/FixinsActions"
import Links from "../utils/Links"
import { Modal, Button } from "react-bootstrap"
import NewDishPage from "../pages/NewDishPage"
import SpotDishList from "./detailUtils/SpotDishList"
import SpotDetailHeader from "./detailUtils/SpotDetailHeader"

class SpotDetail extends React.Component{
	render(){
		let toggleDishModal = this.props.toggleDishModal
		let allSubNeighborhoods = this.props.allSubNeighborhoods
		let allUsers = this.props.allUsers
		let allDishes = this.props.allDishes
		let allCheckIns = this.props.allCheckIns
		let allReviews = this.props.allReviews
		let putOneDishInState = this.props.putOneDishInState
		let putOneGenreInState = this.props.putOneGenreInState
		let putOneSubNeighborhoodInState = this.props.putOneSubNeighborhoodInState
    let spot = this.props.spot
		let subNeighorhoodId = spot.spot_subNeighborhood._id

    return (
<div>
<div className="bg-warning med-pad med-mar">
	<SpotDetailHeader
	spot={spot}
	putOneGenreInState={putOneGenreInState}
	toggleDishModal={toggleDishModal}
		/>

	<SpotDishList
	spot={spot}
	allDishes={allDishes}
	allReviews={allReviews}
	toggleDishModal={toggleDishModal}
	putOneDishInState={putOneDishInState}
	putOneSubNeighborhoodInState={putOneSubNeighborhoodInState}
	subNeighorhoodId={subNeighorhoodId}

	 />

				<Modal show={this.props.showDishModal} bsSize="small" aria-labelledby="contained-modal-title-sm">
			<Modal.Header>
				<Modal.Title id="contained-modal-title-sm">New dish!</Modal.Title>
			</Modal.Header>
			<Modal.Body>
			 <NewDishPage toggleDishModal={toggleDishModal}/>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={toggleDishModal}>Close</Button>
			</Modal.Footer>
		</Modal>




</div>
</div>
      )
  }
}

const mapStateToProps = (state) => {
  const selectSpot = (spots, id) => {
          const ridiculousArray = spots.filter(x => x._id === id)
          return ridiculousArray[0]
        }
	    return {
        spot: selectSpot(state.spots, state.spot._id),
        allDishes: state.dishes,
        allReviews: state.reviews,
    		allSubNeighborhoods: state.subNeighborhoods,
    		allUsers: state.users,
    		allDishes: state.dishes,
    		allCheckIns: state.checkIns,
				showDishModal: state.showDishModal
        }
}

const toggleDishModal = () => {
	return {type: "TOGGLE_DISH_MODAL"}
}

const mapDispatchToProps = (dispatch) => {
 return {
	 				putOneDishInState: (_id) => dispatch(FixinsActions.putOneDishInState(_id)),
	 				putOneSubNeighborhoodInState: (_id) => dispatch(FixinsActions.putOneSubNeighborhoodInState(_id)),
					putOneGenreInState: (_id) => dispatch(FixinsActions.putOneGenreInState(_id)),
					toggleDishModal: () => dispatch(toggleDishModal())
 }
}



const SpotDetailContainer = connect(mapStateToProps, mapDispatchToProps)(SpotDetail)
export default SpotDetailContainer
