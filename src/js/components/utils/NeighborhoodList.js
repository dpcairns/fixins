import React from "react"
import RemoveButton from "./RemoveButton"

export default class NeighborhoodList extends React.Component{
	render(){
		let neighborhoodNodes = this.props.allNeighborhoods.map(function(neighborhood){
			return(
				<li key={neighborhood._id}>
					Name: {neighborhood.neighborhood_name}

					<RemoveButton type="Neighborhood" id={neighborhood._id}/>
				</li>
				)
		})
	return(
		<div>
			<ol>
			{neighborhoodNodes}
			</ol>
		</div>

		)

	}

}