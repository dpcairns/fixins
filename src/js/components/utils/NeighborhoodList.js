import React from "react"
import RemoveButton from "./RemoveButton"
import NeighborhoodEditForm from "./NeighborhoodEditForm"
import { Link } from 'react-router'

export default class NeighborhoodList extends React.Component{
	render(){
		let putOneSubNeighborhoodInState = this.props.putOneSubNeighborhoodInState
		let putOneNeighborhoodInState = this.props.putOneNeighborhoodInState
		let removeNeighborhood = this.props.removeNeighborhood
		let findAndChangeNeighborhood = this.props.findAndChangeNeighborhood
		let allSubNeighborhoods = this.props.allSubNeighborhoods
		let neighborhoodNodes = this.props.allNeighborhoods.map(function(neighborhood){
					function findSubNeighborhoodsFilter(subNeighborhood){
									return (subNeighborhood.sub_neighborhood_neighborhood._id === neighborhood._id || subNeighborhood.sub_neighborhood_neighborhood === neighborhood._id)
						}
					let subNeighborhoodNodes = allSubNeighborhoods.filter(findSubNeighborhoodsFilter).map(function(subNeighborhood){
						let subNeighborhoodId = subNeighborhood._id
									return (
										<div key={subNeighborhood._id}>
                      <Link onClick={putOneSubNeighborhoodInState.bind(this, subNeighborhoodId)} to={`/subNeighborhood/${subNeighborhoodId}`}>
                          <b>{subNeighborhood.subNeighborhood_name}</b></Link>
										</div>

										)
					})

					let neighborhoodId = neighborhood._id

			return(
				<tr key={neighborhood._id}>
					<td><h3> <Link onClick={putOneNeighborhoodInState.bind(this, neighborhoodId)} to={`/neighborhood/${neighborhoodId}`}>
{neighborhood.neighborhood_name}</Link></h3>
</td>
					<td><b>SubNeighborhoods:</b> {subNeighborhoodNodes}</td>
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
