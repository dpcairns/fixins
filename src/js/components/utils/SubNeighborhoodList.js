import React from "react"
import RemoveButton from "./RemoveButton"
import { Link } from 'react-router'

export default class SubNeighborhoodList extends React.Component{
	render(){
			let removeSubNeighborhood = this.props.removeSubNeighborhood
			let findAndChangeSubNeighborhood = this.props.findAndChangeSubNeighborhood
			let putOneSubNeighborhoodInState = this.props.putOneSubNeighborhoodInState
		let subNeighborhoodNodes = this.props.allSubNeighborhoods.map(function(subNeighborhood){
			let subNeighborhoodId = subNeighborhood._id
			return(
				<tr onClick={putOneSubNeighborhoodInState.bind(this, subNeighborhoodId)} key={subNeighborhoodId}>
				<td>				<Link to={`/subNeighborhood/${subNeighborhoodId}`}>
					Name: {subNeighborhood.subNeighborhood_name} </Link></td>
				<td>{subNeighborhood.sub_neighborhood_neighborhood.neighborhood_name}</td>

				<td><RemoveButton removeSubNeighborhood={removeSubNeighborhood} type="SubNeighborhood" id={subNeighborhood._id}/></td>

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
