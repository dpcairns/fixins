import React from "react"
import RemoveButton from "./RemoveButton"
import NeighborhoodEditForm from "./NeighborhoodEditForm"

export default class NeighborhoodList extends React.Component{
	render(){
		let allSubNeighborhoods = this.props.allSubNeighborhoods
		let neighborhoodNodes = this.props.allNeighborhoods.map(function(neighborhood){
		let subNeighborhoodNodes = neighborhood.neighborhood_subNeighborhoods.map(function(subNeighborhood){
						return({subNeighborhood_name})
					})
				
			return(
				<tr key={neighborhood._id}>
					<td>Name: {neighborhood.neighborhood_name}</td>
					<td>SubNeighborhoods: {subNeighborhoodNodes}</td>
					<td><RemoveButton type="Neighborhood" id={neighborhood._id}/></td>
					<td>Edit Neighborhood:
						<NeighborhoodEditForm 
								neighborhoodID={neighborhood._id}
								allSubNeighborhoods={allSubNeighborhoods}/>
					</td>
				</tr>
				)
		})
	return(
		<div>
		<table className="table table-condensed table-bordered table-hover">
			<tbody>
			{neighborhoodNodes}
			</tbody>
		</table>
		</div>

		)

	}

}