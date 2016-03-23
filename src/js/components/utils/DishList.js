import React from "react"
import RemoveButton from "./RemoveButton"

export default class DishList extends React.Component{
	render(){
		let dishNodes = this.props.allDishes.map(function(dish){
			return(
					<tr key={dish._id}>
						<td><h2>{dish.dish_name}</h2></td>
						<td> Dish Blurb: {dish.dish_blurb}</td>
						<td> Dish Price: {dish.dish_price}</td>
						<td> Dish Calories: {dish.dish_calories}</td>
						<td> Dish Spot: {dish.dish_spot.spot_name}</td>
						<td> <RemoveButton type="Dish" id={dish._id}/></td>

					</tr>
		
				)
		})
	return(
		<div>

			<table className="table table-condensed table-bordered table-hover">
			<tbody>
			{dishNodes}
			</tbody>
			</table>
		</div>

		)

	}

}