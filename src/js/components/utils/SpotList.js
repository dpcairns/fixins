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
		let spotNodes = this.props.allSpots.map(function(spot){
			return(
				<div key={spot._id}>
				<li>
					<ul>
						<li>Spot Name: {spot.spot_name}</li>
						<li> Spot Blurb {spot.spot_blurb}</li>
						<li> Spot SubNeighborhood: {spot.spot_subNeighborhood}</li>
						<li> Spot Genre: {spot.spot_genres}</li>
						<li> Spot Coordinates: {spot.spot_coordinates}</li>
						<li> <RemoveButton type="Spot" id={spot._id}/></li>
						<li>
							<SpotEditForm 
								spotID={spot._id}
								allUsers={allUsers}
								allCheckIns={allCheckIns}
								allDishes={allDishes}
								allReviews={allReviews}
								allGenres={allGenres}
								allSubNeighborhoods={allSubNeighborhoods}/>
						</li>

					</ul>
				</li>
			</div>
				)
		})
	return(
		<div>
			<ol>
			{spotNodes}
			</ol>
		</div>

		)

	}

}