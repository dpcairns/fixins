import React from "react"

export default class CheckInList extends React.Component{
	render(){
		let checkInNodes = this.props.allCheckIns.map(function(checkIn){
			return(
				<li key={checkIn._id}>
					<ul>
						<li>Spot: {checkIn.spot}</li>
						<li>Dish: {checkIn.dish}</li>
						<li>Name: {checkIn.blurb}</li>
						<li>User: {checkIn.user}</li>
					</ul>
				</li>
				)
		})
	return(
		<div>
			<ol>
			{checkInNodes}
			</ol>
		</div>

		)

	}

}