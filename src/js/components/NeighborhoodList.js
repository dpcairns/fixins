import React from "react"

export default class NeighborhoodList extends React.Component{
	render(){
		let neighborhoodNodes = this.props.allNeighborhoods.map(function(neighborhood){
			return(
				<li>Name: {neighborhood.neighborhood_name}</li>
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