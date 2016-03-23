import React from "react"
import RemoveButton from "./RemoveButton"

export default class NeighborhoodList extends React.Component{
	render(){
		let neighborhoodNodes = this.props.allNeighborhoods.map(function(neighborhood){
			return(
				<tr key={neighborhood._id}>
					<td>Name: {neighborhood.neighborhood_name}</td>

					<td><RemoveButton type="Neighborhood" id={neighborhood._id}/></td>
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