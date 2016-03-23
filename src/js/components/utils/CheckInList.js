import React from "react"
import RemoveButton from "./RemoveButton"

export default class CheckInList extends React.Component{
	render(){
		let checkInNodes = this.props.allCheckIns.map(function(checkIn){
			return(
				<tr key={checkIn._id}>
						<td>Dish: {checkIn.checkIn_dish.dish_name}</td>
						<td>User: {checkIn.checkIn_user.username}</td>
						<td>Blurb: {checkIn.checkIn_blurb}</td>
						<td>When: {checkIn.checkIn_date}</td>
						<td> <RemoveButton type="CheckIn" id={checkIn._id}/></td>
				</tr>
				)
		})
	return(
		<div>
			<table className="table table-condensed table-bordered table-hover">
			<tbody>
					{checkInNodes}
			</tbody>
			</table>
		</div>

		)

	}

}