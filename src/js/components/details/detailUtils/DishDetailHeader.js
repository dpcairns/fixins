import React from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router'
import StarRatingComponent from 'react-star-rating-component';


export default class DishSpot extends React.Component{
	render(){
    let dish = this.props.dish
    let toggleReviewModal = this.props.toggleReviewModal
    let toggleCheckInModal = this.props.toggleCheckInModal
    let averageStars = this.props.averageStars
    let numberOfReviews = this.props.numberOfReviews
      return(
        <div>
        <div className="row">
        <div className="col-md-6 text-center">
        <h1>{dish.dish_name}</h1><br/>

        </div>
        <div className="col-md-3">
        <h3><a style={{cursor: 'pointer'}} onClick={toggleCheckInModal}> Just ate this? CheckIn!</a></h3>
        </div>
        <div className="col-md-3">
        <h3><a style={{cursor: 'pointer'}} onClick={toggleReviewModal}> Review this dish.</a></h3>
        </div>
        </div>
        <div className="row text-center">
        <h2>
        {averageStars > 0 ?
        <StarRatingComponent
                          name="rate2"
                          editing={false}
                          starCount={5}
                          value={averageStars}
                      /> : "no reviews yet"
                    }
                    </h2>
                    <h5>{averageStars > 0 ? 'average rating (out of ' +numberOfReviews + ' reviews)' : "" }</h5>

              </div>
              </div>
    )
}
}
