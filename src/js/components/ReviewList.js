import React from "react"

export default class ReviewList extends React.Component{
	render(){
		let reviewNodes = this.props.allReviews.map(function(review){
			return(
				<li>
					<li>Name: {review.reviewed_item_name}</i>
					<li>Type: {review.reviewed_item_type}</i>
					<li>Stars: {review.stars}</i>
					<li>Words: {review.words}</i>
				</li>
				)
		})
	return(
		<div>
			<ol>
			{reviewNodes}
			</ol>
		</div>

		)

	}

}