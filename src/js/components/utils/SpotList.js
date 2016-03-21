import React from "react"
import RemoveButton from "./RemoveButton"

export default class SpotList extends React.Component{
	render(){

		let spotNodes = this.props.allSpots.map(function(spot){
			return(
				<li key={spot._id}>
					<ul>
						<li>Spot Name: {spot.spot_name}</li>
						<li> Spot Blurb {spot.spot_blurb}</li>
						<li> Spot Neighborhood: {spot.spot_neighborhood}</li>
						<li> Spot SubNeighborhood: {spot.spot_subNeighborhood}</li>
						<li> Spot Genre: {spot.spot_genres}</li>
						<li> Spot Coordinates: {spot.spot_coordinates}</li>
						<li> <RemoveButton id={spot._id}/></li>

					</ul>
				</li>
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