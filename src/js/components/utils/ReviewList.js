import React from "react"
import RemoveButton from "./RemoveButton"

export default class Reviewtdst extends React.Component{
	render(){
			let removeReview = this.props.removeReview
			let findAndChangeReview = this.props.findAndChangeReview
		let reviewNodes = this.props.allReviews.map(function(review){
			return(
				<tr key={review._id}>
						<td>Name of Dish: {review.reviewed_dish.dish_name}</td>
						<td>Author: {review.review_user.username}</td>
						<td>Stars: {review.review_stars}</td>
						<td>Words: {review.review_words}</td>
						<td> <RemoveButton removeReview={removeReview} type="Review" id={review._id}/></td>

				</tr>
				)
		})
	return(
		<div>
		<table className="table table-condensed table-bordered table-hover">
			<tbody>
			{reviewNodes}
			</tbody>
		</table>
		</div>

		)

	}

}
