import React from "react"
import RemoveButton from "./RemoveButton"

export default class SubNeighborhoodList extends React.Component{
	render(){
		let subNeighborhoodNodes = this.props.allSubNeighborhoods.map(function(subNeighborhood){
			return(
				<tr key={subNeighborhood._id}>
				<td>Name: {subNeighborhood.subNeighborhood_name}</td>
				<td>{subNeighborhood.sub_neighborhood_neighborhood.neighborhood_name}</td>

				<td><RemoveButton type="SubNeighborhood" id={subNeighborhood._id}/></td>

				</tr>
				)
		})
	return(
		<table className="table table-condensed table-bordered table-hover">
			<tbody>
			{subNeighborhoodNodes}
			</tbody>
		</table>

		)

	}

}