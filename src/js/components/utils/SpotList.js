import React from "react"
import RemoveButton from "./RemoveButton"
import SpotEditForm from "./SpotEditForm"
import ApproveButton from "./ApproveButton"

import { Link } from "react-router"

export default class SpotList extends React.Component{
	render(){
		let allUsers = this.props.allUsers
		let allCheckIns=this.props.allCheckIns
		let allDishes=this.props.allDishes
		let allReviews=this.props.allReviews
		let allGenres=this.props.allGenres
		let allSubNeighborhoods= this.props.allSubNeighborhoods
		let removeSpot = this.props.removeSpot
		let approveSpot = this.props.approveSpot
		let findAndChangeSpot = this.props.findAndChangeSpot
		let putOneSpotInState = this.props.putOneSpotInState
		let spotNodes = this.props.allSpots.map(function(spot){
			let spotId=spot._id
			return(
			<div className="row user-boxes" onClick={putOneSpotInState.bind(this, spotId)} key={spotId}>
				<div className="col-md-6">
					<ul>
						<li>
								<Link to={`/spot/${spotId}`}>
								<h2>{spot.spot_name}</h2>
								</Link>
						</li>
						<li> Spot Blurb: {spot.spot_blurb}</li>
						<li> Spot Genre: {spot.spot_genres[0].genre_name}</li>
						<li> Spot Coordinates: {spot.spot_coordinates[0]} {spot.spot_coordinates[1]}</li>
						<li> Featured dish: {spot.spot_dishes.length > 0 ? spot.spot_dishes[0].dish_name : "none yet"}</li>
						<li> <RemoveButton removeSpot={removeSpot} type="Spot" id={spot._id}/></li>
						<li> <ApproveButton spot={spot} approved={spot.approved} type="Spot" id={spot._id} findAndChange={findAndChangeSpot}/> </li>
					</ul>
				</div>
				<div className="col-md-6">
					<SpotEditForm
							spotID={spot._id}
							allUsers={allUsers}
							allGenres={allGenres}
							allDishes={allDishes}
							allSubNeighborhoods={allSubNeighborhoods}
							findAndChangeSpot={findAndChangeSpot}/>
				</div>
			</div>
				)
		}).reverse()
	return(
		<div>
			{spotNodes}
		</div>

		)

	}

}
