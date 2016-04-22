import React from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router'
import RemoveButton from "../utils/RemoveButton"
import ReviewFormRedux from "../utils/ReviewFormRedux"
import Links from "../utils/Links"
import * as FixinsActions from "../../actions/FixinsActions"

class NewReviewPage extends React.Component{

render(){

  if(this.props.currentUser._id === undefined){
  this.context.router.push('index/login')
  }

    let thisDish = this.props.thisDish
      function findDishFilter(dish){
      	    return (dish._id === thisDish._id)
      		    }
    	 thisDish = this.props.allDishes.filter(findDishFilter)


  return(
    <div>
      Write a review for {thisDish[0].dish_name}!
      <ReviewFormRedux
      createReview={this.props.createReview}
      thisDish={this.props.thisDish}
      currentUser={this.props.currentUser}
      toggleHidden={this.props.toggleHidden}
      hiddenValue={this.props.hiddenValue}
      toggleReviewModal={this.props.toggleReviewModal}
      />
    </div>
    )
  }
}

NewReviewPage.contextTypes = {
  router: React.PropTypes.object.isRequired
}


const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    thisDish: state.dish,
    hiddenValue: state.hiddenValue,
    allDishes: state.dishes
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      createReview: (newReview) => FixinsActions.createReview(newReview, dispatch),
      toggleHidden: () => dispatch(FixinsActions.toggleHidden())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewReviewPage)
