import React from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router'
import RemoveButton from "../utils/RemoveButton"
import DishFormRedux from "../utils/DishFormRedux"
import Links from "../utils/Links"
import * as FixinsActions from "../../actions/FixinsActions"

class NewDishPage extends React.Component{

render(){

  if(this.props.currentUser._id === undefined){
  this.context.router.push('index/login')
  }

let thisSpot = this.props.thisSpot
  function findSpotFilter(spot){
  	    return (spot._id === thisSpot._id)
  		    }
	let mySpot = this.props.allSpots.filter(findSpotFilter)


  return(
    <div>
      Okay, post a new dish at {mySpot[0].spot_name} . . .
      <DishFormRedux
      createDish={this.props.createDish}
      thisDish={this.props.thisDish}
      thisSpot={this.props.thisSpot}
      allSpots={this.props.allSpots}
      spotName={mySpot[0].spot_name}
      currentUser={this.props.currentUser}
      toggleHidden={this.props.toggleHidden}
      hiddenValue={this.props.hiddenValue}
      />
    </div>
    )
  }
}

NewDishPage.contextTypes = {
  router: React.PropTypes.object.isRequired
}


const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    thisDish: state.dish,
    thisSpot: state.spot,
    allSpots: state.spots,
    hiddenValue: state.hiddenValue
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
            toggleHidden: () => dispatch(FixinsActions.toggleHidden()),
      createDish: (newDish) => FixinsActions.createDish(newDish, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDishPage)
