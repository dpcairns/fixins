import React from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router'
import RemoveButton from "../utils/RemoveButton"
import CheckInForm from "../utils/CheckInForm"
import Links from "../utils/Links"
import * as FixinsActions from "../../actions/FixinsActions"

class NewCheckInPage extends React.Component{

render(){

  if(this.props.currentUser._id === undefined){
  this.context.router.push('index/login')
  }

  return(
    <div>
      Okay, make a checkIn with {this.props.thisDish.dish_name} . . .
      <CheckInForm
      createCheckIn={this.props.createCheckIn}
      thisDish={this.props.thisDish}
      currentUser={this.props.currentUser}
      />
    </div>
    )
  }
}

NewCheckInPage.contextTypes = {
  router: React.PropTypes.object.isRequired
}


const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    thisDish: state.dish
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      createCheckIn: (newCheckIn) => FixinsActions.createCheckIn(newCheckIn, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCheckInPage)
