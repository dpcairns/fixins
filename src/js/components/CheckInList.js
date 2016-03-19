import React from "react"

export default class CheckInList extends React.Component{
	render(){
		let checkInNodes = this.props.allCheckIns.map(function(checkIn){
			return(
				<li>
					<li>Spot: {checkIn.spot}</i>
					<li>Dish: {checkIn.dish}</i>
					<li>Name: {checkIn.blurb}</i>
					<li>User: {checkIn.user}</i>


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