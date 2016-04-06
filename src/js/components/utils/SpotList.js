import React from "react"
import RemoveButton from "./RemoveButton"
import SpotEditForm from "./SpotEditForm"

export default class SpotList extends React.Component{
	render(){
		let allUsers = this.props.allUsers
		let allCheckIns=this.props.allCheckIns
		let allDishes=this.props.allDishes
		let allReviews=this.props.allReviews
		let allGenres=this.props.allGenres
		let allSubNeighborhoods= this.props.allSubNeighborhoods
		let removeSpot = this.props.removeSpot
		let findAndChangeSpot = this.props.findAndChangeSpot
		let spotNodes = this.props.allSpots.map(function(spot){
			return(
			<div key={spot._id}>
				<div className="col-md-6">
					<ul>
						<li><h2>{spot.spot_name}</h2></li>
						<li> Spot Blurb: {spot.spot_blurb}</li>
						<li> Spot Genre: {spot.spot_genres[0].genre_name}</li>
						<li> Spot Coordinates: {spot.spot_coordinates[0]} {spot.spot_coordinates[1]}</li>
						<li> Featured dish: {spot.spot_dishes.length > 0 ? spot.spot_dishes[0].dish_name : "none yet"}</li>
						<li> <RemoveButton removeSpot={removeSpot} type="Spot" id={spot._id}/></li>

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
		})
	return(
		<div>
			{spotNodes}
		</div>

		)

	}

}
