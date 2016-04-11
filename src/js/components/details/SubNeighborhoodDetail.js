import React from "react"
import { connect } from 'react-redux'
import RemoveButton from "../utils/RemoveButton"
import Links from "../utils/Links"
import { Link } from 'react-router'

class SubNeighborhoodDetail extends React.Component{
	render(){
    let allSpots = this.props.allSpots
    let allUsers = this.props.allUsers
    let allCheckIns = this.props.allCheckIns
    let putOneUserInState = this.props.putOneUserInState
		let putOneSpotInState = this.props.putOneSpotInState
		let putOneDishInState = this.props.putOneDishInState
		let putOneNeighborhoodInState = this.props.putOneNeighborhoodInState
    let subNeighborhood = this.props.subNeighborhood
    function findSpotsFilter(spot){
    									return (spot.spot_subNeighborhood._id === subNeighborhood._id)
    						}
    				let spotNodes = allSpots.filter(findSpotsFilter).map(function(spot){
							let spotId = spot._id
    									return (
												<div key={spot._id}>
                          <ul>
													<div>
													<li>
														<div>
														<Link onClick={putOneSpotInState.bind(this, spotId)} to={`/spot/${spotId}`}>{spot.spot_name}</Link>
														</div>
												</li>
												</div>
												<div>

													</div>
													</ul>
												</div>
												)
    				})



    function findUsersFilter(user){
                    return(user.user_sub_neighborhood._id === subNeighborhood._id)
    }
        let userNodes = allUsers.filter(findUsersFilter).map(function(user){
            let userId = user._id

                    return (
											<div  key={userId}>
                      <ul>
                        <li>Username:
                            <Link to={`/user/${userId}`} onClick={putOneUserInState.bind(this, userId)}>
                            {user.username}</Link>
                        </li>
                        <li>Password: {user.password}</li>
                      </ul>
											</div>
                    )
        })
				let neighborhoodId = subNeighborhood.sub_neighborhood_neighborhood._id
    return(
      <div>
        <Links />
				<h1>SubNeighborhoodDetail page</h1>
          <h1>{subNeighborhood.subNeighborhood_name}</h1>
					<h3>{subNeighborhood.subNeighborhood_name} is located in
<Link to={`/neighborhood/${neighborhoodId}`} onClick={putOneNeighborhoodInState.bind(this, neighborhoodId)}>
					 {subNeighborhood.sub_neighborhood_neighborhood.neighborhood_name}
					</Link>
					 </h3>
          <h2>Spots in {subNeighborhood.subNeighborhood_name}</h2>
					<div>

          {allSpots.filter(findSpotsFilter).length> 0 ? spotNodes: (<h1>no relevant restaurants...yet!</h1>)}
					</div>
          <h2>Users in {subNeighborhood.subNeighborhood_name}</h2>
<div>
          {allUsers.filter(findUsersFilter).length> 0 ? userNodes: (<h1>no relevant users...yet!</h1>)}
      </div>
			</div>
    )

  }
}


const mapStateToProps = (state) => {
	const selectSubNeighborhood = (subNeighborhoods, id) => {
          const ridiculousArray = subNeighborhoods.filter(x => x._id === id)
          return ridiculousArray[0]
        }
	    return {
        subNeighborhood: selectSubNeighborhood(state.subNeighborhoods, state.subNeighborhood._id),
        allSpots: state.spots,
        allUsers: state.users,
        allCheckIns: state.checkIns
        }
}


function  putOneUserInState(_id){
  return {type: "PUT_ONE_USER_IN_STATE", _id:_id}
}

function putOneDishInState(_id){
  return {type: "PUT_ONE_DISH_IN_STATE", _id:_id}
}


function  putOneSpotInState(_id){
  return {type: "PUT_ONE_SPOT_IN_STATE", _id:_id}
}

function  putOneNeighborhoodInState(_id){
  return {type: "PUT_ONE_NEIGHBORHOOD_IN_STATE", _id:_id}
}


const mapDispatchToProps = (dispatch) => {
  return {
  putOneUserInState: (_id) => dispatch(putOneUserInState(_id)),
	putOneSpotInState: (_id) => dispatch(putOneSpotInState(_id)),
	putOneDishInState: (_id) => dispatch(putOneDishInState(_id)),
	putOneNeighborhoodInState: (_id) => dispatch(putOneNeighborhoodInState(_id))

  }
}

const SubNeighborhoodDetailContainer = connect(mapStateToProps, mapDispatchToProps)(SubNeighborhoodDetail)
export default SubNeighborhoodDetailContainer
