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

  return(
    <div>
      Okay, make a Review with {this.props.thisDish.dish_name} . . .
      <ReviewFormRedux
      createReview={this.props.createReview}
      thisDish={this.props.thisDish}
      currentUser={this.props.currentUser}
      toggleHidden={this.props.toggleHidden}
      hiddenValue={this.props.hiddenValue}
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
    hiddenValue: state.hiddenValue
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      createReview: (newReview) => FixinsActions.createReview(newReview, dispatch),
      toggleHidden: () => dispatch(FixinsActions.toggleHidden())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewReviewPage)
