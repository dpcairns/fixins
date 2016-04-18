import React from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router'
import RemoveButton from "../utils/RemoveButton"
import CheckInFormRedux from "../utils/CheckInFormRedux"
import Links from "../utils/Links"
import * as FixinsActions from "../../actions/FixinsActions"

class NewCheckInPage extends React.Component{



render(){
  if(this.props.currentUser._id === undefined){
  this.context.router.push('index/login')
  }


  let thisDish = this.props.thisDish
    function findDishFilter(dish){
    	    return (dish._id === thisDish._id)
    		    }
  	let myDish = this.props.allDishes.filter(findDishFilter)

  return(
    <div>
      <h2>Okay, make a checkIn with {myDish[0].dish_name} . . .</h2>
      <CheckInFormRedux
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
    thisDish: state.dish,
    allDishes: state.dishes
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      createCheckIn: (newCheckIn) => FixinsActions.createCheckIn(newCheckIn, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCheckInPage)
