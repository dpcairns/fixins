import React from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router'
import StarRatingComponent from 'react-star-rating-component';


export default class DishReviews extends React.Component{
	render(){
    let allReviews = this.props.allReviews
    let putOneUserInState = this.props.putOneUserInState
    let dish = this.props.dish
    let toggleReviewModal = this.props.toggleReviewModal
    let listStyle={maxHeight:"400px",overflowX:"hidden",overflowY:"scroll"}
function findReviewsFilter(review){
            return (review.reviewed_dish._id === dish._id)
      }

  let reviewNodes = allReviews.filter(findReviewsFilter).map(function(review){
		let userId = review.review_user._id
		let dishId = review.reviewed_dish._id
            return (
							<tr key={review._id}>
								<td><h5>{review.review_words} </h3></td>
								<td><Link to={`/user/${userId}`} onClick={putOneUserInState.bind(this, userId)}>
									<h5>{review.review_user.username} </h5> </Link>
								</td>
								<td><h4>
								<StarRatingComponent
																	name="rate2"
																	editing={false}
																	starCount={5}
																	value={review.review_stars}
															/></h4>
 								</td>
								<td><h6>{review.review_date}</h6></td>
							</tr>
						)
  }).reverse()
  return(

    <div className="col-md-6" style={listStyle}>
    <table className="table">

    <caption><h3>Reviews for {dish.dish_name}</h3></caption>
    <tbody>
    <h6>{allReviews.filter(findReviewsFilter).length>0 ? reviewNodes : (<tr><td>no reviews for {dish.dish_name}...yet! <a onClick={toggleReviewModal}>Click here to be the first!</a> </td></tr>)}</h6>
    </tbody>
    </table>
    </div>




  )

}
}
