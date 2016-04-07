import React from "react"
import RemoveButton from "./RemoveButton"

export default class DishList extends React.Component{
	render(){
		let allCheckIns = this.props.allCheckIns
		let allReviews = this.props.allReviews
		let removeDish = this.props.removeDish
		let findAndChangeDish = this.props.findAndChangeDish

		let dishNodes = this.props.allDishes.map(function(dish){
			function findCheckInsFilter(checkIn){
									return (checkIn.checkIn_dish._id === dish._id)
						}
				let checkInNodes = allCheckIns.filter(findCheckInsFilter).map(function(checkIn){
									return (
										<div key={checkIn._id}>
											<ul><li><b>{checkIn.checkIn_dish.dish_name}</b></li>
											<li>{checkIn.checkIn_dish.dish_calories} calories</li>
											<li>{checkIn.checkIn_dish.dish_price} dollars</li>
											<li>{checkIn.checkIn_blurb}</li>
											</ul>
										</div>

										)
				})

			function findReviewsFilter(review){
									return (review.reviewed_dish._id === dish._id || review.reviewed_dish === dish._id)
						}
				let reviewNodes = allReviews.filter(findReviewsFilter).map(function(review){
									return (
										<div key={review._id}>
											<ul><li><b>{review.reviewed_dish.dish_name}</b></li>
											<li>{review.reviewed_dish.dish_calories} calories</li>
											<li>{review.reviewed_dish.dish_price} dollars</li>
											<li>{review.review_words}</li>
											<li>{review.review_stars} stars</li>
											<li>{review.review_date}</li>

											</ul>
										</div>

										)
				})


			return(
					<tr key={dish._id}>
						<td><h3>{dish.dish_name}</h3></td>
						<td> Dish Blurb: {dish.dish_blurb}</td>
						<td> Dish Price: {dish.dish_price}</td>
						<td> Dish Calories: {dish.dish_calories}</td>
						<td> Dish Spot: {dish.dish_spot.spot_name}</td>
						<td>Dish reviews: {reviewNodes} </td>
						<td>Dish check-ins: {checkInNodes}</td>
						<td> <RemoveButton removeDish={removeDish} type="Dish" id={dish._id}/></td>

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
