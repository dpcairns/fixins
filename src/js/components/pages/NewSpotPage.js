import React from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router'
import RemoveButton from "../utils/RemoveButton"
import SpotForm from "../utils/SpotForm"
import Links from "../utils/Links"
import * as FixinsActions from "../../actions/FixinsActions"

class NewSpotPage extends React.Component{

render(){

  if(this.props.currentUser._id === undefined){
  this.context.router.push('index/login')
  }

let thisSubNeighborhood = this.props.thisSubNeighborhood
  function findSubNeighborhoodFilter(subNeighborhood){
  	    return (subNeighborhood._id === thisSubNeighborhood._id)
  		    }
	let mySubNeighborhood = this.props.allSubNeighborhoods.filter(findSubNeighborhoodFilter)


  return(
    <div>
      <SpotForm
      createSpot={this.props.createSpot}
      thisSpot={this.props.thisSpot}
      mySubNeighborhood={mySubNeighborhood[0]}
      allSpots={this.props.allSpots}
      allGenres={this.props.allGenres}
      currentUser={this.props.currentUser}
      />
    </div>
    )
  }
}

NewSpotPage.contextTypes = {
  router: React.PropTypes.object.isRequired
}


const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    thisSubNeighborhood: state.subNeighborhood,
    allGenres: state.genres,
    allSubNeighborhoods: state.subNeighborhoods
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      createSpot: (newSpot) => FixinsActions.createSpot(newSpot, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSpotPage)
