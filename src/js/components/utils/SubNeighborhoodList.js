import React from "react"

export default class SubNeighborhoodList extends React.Component{
	render(){
		let subNeighborhoodNodes = this.props.allSubNeighborhoods.map(function(subNeighborhood){
			return(
				<li key={subNeighborhood._id}>Name: {subNeighborhood.subNeighborhood_name}</li>
				)
		})
	return(
		<div>
			<ol>
			{subNeighborhoodNodes}
			</ol>
		</div>

		)

	}

}