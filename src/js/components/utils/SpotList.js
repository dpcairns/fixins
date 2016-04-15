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
			<tr onClick={putOneSpotInState.bind(this, spotId)} key={spotId}>

						<td>
								<Link to={`/spot/${spotId}`}>
								<h2>{spot.spot_name}</h2>
								</Link>
						</td>
						<td> Spot Blurb: {spot.spot_blurb}</td>
						<td> Spot Genre: {spot.spot_genres[0].genre_name}</td>
						<td> Spot Coordinates: {spot.spot_coordinates[0]} {spot.spot_coordinates[1]}</td>
						<td> Featured dish: {spot.spot_dishes.length > 0 ? spot.spot_dishes[0].dish_name : "none yet"}</td>
						<td> <RemoveButton removeSpot={removeSpot} type="Spot" id={spot._id}/></td>
						<td> <ApproveButton spot={spot} approved={spot.approved} type="Spot" id={spot._id} findAndChange={findAndChangeSpot}/> </td>
					</tr>

				)
		}).reverse()
	return(
		<table className="table">
				<tbody>
						{spotNodes}
				</tbody>
		</table>

		)

	}

}

				/*
				<div className="col-md-6">
					<SpotEditForm
							spotID={spot._id}
							allUsers={allUsers}
							allGenres={allGenres}
							allDishes={allDishes}
							allSubNeighborhoods={allSubNeighborhoods}
							findAndChangeSpot={findAndChangeSpot}/>
				</div>
		*/
