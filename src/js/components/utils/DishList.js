import React from "react"
import RemoveButton from "./RemoveButton"

export default class DishList extends React.Component{
	render(){
		let dishNodes = this.props.allDishes.map(function(dish){
			return(
				<li key={dish._id}>
					<ul>
						<li>Dish Name: {dish.dish_name}</li>
						<li> Dish Blurb: {dish.dish_blurb}</li>
						<li> Dish Genre: {dish.dish_genres}</li>
						<li> Dish Price: {dish.dish_price}</li>
						<li> Dish Calories: {dish.dish_calories}</li>
						<li> Dish Spot: {dish.dish_spot}</li>
						<li> <RemoveButton type="Dish" id={dish._id}/></li>

					</ul>
				</li>
				)
		})
	return(
		<div>
			<ol>
			{dishNodes}
			</ol>
		</div>

		)

	}

}