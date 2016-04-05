import React from "react"
import RemoveButton from "./RemoveButton"
import NeighborhoodEditForm from "./NeighborhoodEditForm"

export default class NeighborhoodList extends React.Component{
	render(){
		let removeNeighborhood = this.props.removeNeighborhood
		let findAndChangeNeighborhood = this.props.findAndChangeNeighborhood
		let allSubNeighborhoods = this.props.allSubNeighborhoods
		let neighborhoodNodes = this.props.allNeighborhoods.map(function(neighborhood){
					function findSubNeighborhoodsFilter(subNeighborhood){
									return (subNeighborhood.sub_neighborhood_neighborhood._id === neighborhood._id || subNeighborhood.sub_neighborhood_neighborhood === neighborhood._id)
						}
					let subNeighborhoodNodes = allSubNeighborhoods.filter(findSubNeighborhoodsFilter).map(function(subNeighborhood){
									return (
										<div key={subNeighborhood._id}>
											{subNeighborhood.subNeighborhood_name}
										</div>

										)
					})
			return(
				<tr key={neighborhood._id}>
					<td><h3>{neighborhood.neighborhood_name}</h3></td>
					<td><b>SubNeighborhoods:</b> {subNeighborhoodNodes}</td>
					<td><RemoveButton removeNeighborhood={removeNeighborhood} type="Neighborhood" id={neighborhood._id}/></td>
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
