import React from "react"
import { connect } from 'react-redux'
import RemoveButton from "../utils/RemoveButton"
import Links from "../utils/Links"
import * as FixinsActions from "../../actions/FixinsActions"
import { Link } from 'react-router'

class NeighborhoodDetail extends React.Component{

	render(){

		let subNeighborhoodBoxStyle = {height:"150px",width:"200px",margin:"5px",float:"left",fontSize:"1.5em",textAlign:"center", borderRadius:"10px"}
		let containerStyle = {display:"inline-block"}
    let putOneSubNeighborhoodInState = this.props.putOneSubNeighborhoodInState
		let stateSubNeighborhood = this.props.subNeighborhood
    let allSubNeighborhoods = this.props.allSubNeighborhoods
    let neighborhood = this.props.neighborhood
		let allSpots = this.props.allSpots
		let allUsers = this.props.allUsers

    function findSubNeighborhoodsFilter(subNeighborhood){
                return (subNeighborhood.sub_neighborhood_neighborhood._id === neighborhood._id)
          }
      let subNeighborhoodNodes = allSubNeighborhoods.filter(findSubNeighborhoodsFilter).map(function(subNeighborhood){


				    function findSpotsFilter(spot){
				    							return (spot.spot_subNeighborhood._id === subNeighborhood._id)
				    						}
						let theseSpots = allSpots.filter(findSpotsFilter)

						  function findUsersFilter(user){
									      return(user.user_sub_neighborhood._id === subNeighborhood._id)
												    }
						let theseUsers = allUsers.filter(findUsersFilter)

	      let subNeighborhoodId = subNeighborhood._id
				let specialLink = ""
				if (stateSubNeighborhood && stateSubNeighborhood._id === "TRUE_NEW_SPOT")
						{specialLink = "index/newSpot" }
				else if (stateSubNeighborhood && stateSubNeighborhood._id === "TRUE_NEW_USER")
						{specialLink = "index/signup" }
				else{specialLink = "subNeighborhood/" + subNeighborhoodId }


                return (
                    <div key={subNeighborhoodId} onClick={putOneSubNeighborhoodInState.bind(this, subNeighborhoodId)}>
													<div style={subNeighborhoodBoxStyle} className="shad bg-danger">
													<Link to={`/${specialLink}`}>
													{subNeighborhood.subNeighborhood_name}</Link>
													<small> <br/>
													{theseSpots.length>0?
														("spots: " + theseSpots.length)
														: (<Link to="index/newSpot">add a spot</Link>)
													}
												  <br/>users: {theseUsers.length}</small>
													</div>
										</div>
                  )
      })
return(
  <div className="bg-warning med-pad med-mar">
	<h3><Link to="index/allNeighborhoods">see all neighborhoods</Link></h3>
    <h1>{neighborhood.neighborhood_name}</h1>
		{stateSubNeighborhood && stateSubNeighborhood._id === "TRUE_NEW_SPOT" ?
		<h2>Where do you want to add a spot?</h2>
		:
    <h2>Here is every subNeighborhood in {neighborhood.neighborhood_name}</h2>}
		<div className="flex flexwrap">
		{subNeighborhoodNodes}
		</div>
  </div>
)


  }
}


const mapStateToProps = (state) => {
  const selectNeighborhood = (neighborhoods, id) => {
          const ridiculousArray = neighborhoods.filter(x => x._id === id)
          return ridiculousArray[0]
        }
  return {
    allSubNeighborhoods: state.subNeighborhoods,
		allSpots: state.spots,
		allUsers: state.users,
		subNeighborhood: state.subNeighborhood,
    neighborhood: selectNeighborhood(state.neighborhoods, state.neighborhood._id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    putOneSubNeighborhoodInState: (_id) => dispatch(FixinsActions.putOneSubNeighborhoodInState(_id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NeighborhoodDetail)
