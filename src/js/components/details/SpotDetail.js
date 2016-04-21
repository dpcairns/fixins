import React from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router'
import RemoveButton from "../utils/RemoveButton"
import * as FixinsActions from "../../actions/FixinsActions"
import Links from "../utils/Links"
import { Modal, Button } from "react-bootstrap"
import NewDishPage from "../pages/NewDishPage"

class SpotDetail extends React.Component{
	render(){
		let toggleDishModal = this.props.toggleDishModal
		let itemBoxStyle = {height:"180px",padding:"8px",margin:"5px",float:"left",textAlign:"center", borderRadius:"10px"}
    let allReviews = this.props.allReviews
		let allSubNeighborhoods = this.props.allSubNeighborhoods
		let allUsers = this.props.allUsers
		let allDishes = this.props.allDishes
		let allCheckIns = this.props.allCheckIns
		let putOneDishInState = this.props.putOneDishInState
		let putOneGenreInState = this.props.putOneGenreInState
		let putOneSubNeighborhoodInState = this.props.putOneSubNeighborhoodInState
    let spot = this.props.spot
		let subNeighorhoodId = spot.spot_subNeighborhood._id

			function findDishesFilter(dish){
									return (dish.dish_spot._id === spot._id && dish.approved)
						}
				let theseDishes = allDishes.filter(findDishesFilter)
				let dishNodes = theseDishes.map(function(dish){
					let dishId = dish._id
									return (


                      <div style={itemBoxStyle} className="shad bg-info" key={dish._id}>

												<Link onClick={putOneDishInState.bind(this, dishId)} to={`/dish/${dishId}`}>
														<h3>{dish.dish_name}</h3>
												</Link>
											<h4>
											{dish.dish_blurb} <br/>
											{dish.dish_calories} calories <br/>
											{dish.dish_price} dollars
											</h4>
                      </div>
										)
				})
    return (
<div>
<div className="bg-warning med-pad med-mar">
				<div className="row">
								<div className="col-md-6">
						    		<h2>{spot.spot_name}</h2>
										<h3>located in
										<Link to={`/subNeighborhood/${subNeighorhoodId}`} onClick={putOneSubNeighborhoodInState.bind(this, subNeighorhoodId)}>
										 {" " + spot.spot_subNeighborhood.subNeighborhood_name}
										</Link>
										<br/>
										<Link onClick={putOneGenreInState.bind(this, spot.spot_genres[0]._id)} to={`/genre/${spot.spot_genres[0]._id}`}>{spot.spot_genres[0].genre_name}</Link>

										</h3>
								</div>

								<div className="col-md-6">
										<h2>
										<a onClick={toggleDishModal}>Add a new dish!</a>
										</h2>
								</div>

			  </div>
				<h3>dishes available at {spot.spot_name}</h3>
				<div className="flex flexwrap">
					{allDishes.filter(findDishesFilter).length>0 ? dishNodes : (<tr><td>no dishes for {spot.spot_name}...yet! <a onClick={toggleDishModal}>Click here to be the first to add one!</a> </td></tr>)}
				</div>
    </div>



				<Modal show={this.props.showDishModal} bsSize="small" aria-labelledby="contained-modal-title-sm">
			<Modal.Header>
				<Modal.Title id="contained-modal-title-sm">New dish!</Modal.Title>
			</Modal.Header>
			<Modal.Body>
			 <NewDishPage/>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={toggleDishModal}>Close</Button>
			</Modal.Footer>
		</Modal>





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
