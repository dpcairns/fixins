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
    let subNeighborhood = this.props.subNeighborhood

    function findSpotsFilter(spot){
    									return (spot.spot_subNeighborhood._id === subNeighborhood._id)
    						}

    				let spotNodes = allSpots.filter(findSpotsFilter).map(function(spot){
    									return (
                          <tr key={spot._id}>
                          <td>{spot.spot_name}</td>
                          <td>{spot.spot_dishes.length>0 ? spot.spot_dishes[0].dish_name: "none yet"}</td>
                          </tr>
    										)
    				})



    function findUsersFilter(user){
                    return(user.user_sub_neighborhood._id === subNeighborhood._id)
    }
        let userNodes = allUsers.filter(findUsersFilter).map(function(user){

          function findCheckInsFilter(checkIn){
                      return (checkIn.checkIn_user._id === user._id)
                }

            let checkInNodes = allCheckIns.filter(findCheckInsFilter).map(function(checkIn){
                      return (
                        <div>

                          <tr key={checkIn._id}>
                          <td><b>{checkIn.checkIn_dish.dish_name}</b></td>
                          <td>>{checkIn.checkIn_dish.dish_calories} calories</td>
                          <td>{checkIn.checkIn_dish.dish_price} dollars</td>
                          <td>{checkIn.checkIn_blurb}</td>
                          <td>{checkIn.checkIn_dish.dish_spot.spot_name}</td>
                          </tr>
                        </div>
                        )
            })




            let userId = user._id

                    return (
                      <tr key={userId} onClick={putOneUserInState.bind(this, userId)} >
                        <td>Username:
                            <Link to={`/user/${userId}`}>
                            {user.username}</Link>
                        </td>
                        <td>Password: {user.password}</td>
                        <td>Friends: {user.user_friends.length>0 ? user.user_friends[0].username : "no friends . . . yet!"}</td>
                        <td>{allCheckIns.filter(findCheckInsFilter).length>0 ? checkInNodes : "no checkIns . . . yet!"}</td>
                      </tr>
                    )
        })

    return(
      <div>
        <Links />
          <h1>{subNeighborhood.subNeighborhood_name}</h1>
          <h2>Spots in {subNeighborhood.subNeighborhood_name}</h2>
          <table className="table">
          <th>
          <td>Spot name</td>
          <td>Signature dish</td>
          </th>
          <tbody>
          {allSpots.filter(findSpotsFilter).length> 0 ? spotNodes: (<h1>no relevant restaurants...yet!</h1>)}
          </tbody>
          </table>
          <h2>Users in {subNeighborhood.subNeighborhood_name}</h2>
          <table className="table">
          <tbody>
          <th>
          <td>User name</td>
          <td>Password</td>
          <td>Best Friend</td>
          <td>Favorite Dish</td>
          </th>
          {allUsers.filter(findUsersFilter).length> 0 ? userNodes: (<h1>no relevant users...yet!</h1>)}
          </tbody>
          </table>
      </div>
    )

  }
}


function  putOneUserInState(_id){
  return {type: "PUT_ONE_USER_IN_STATE", _id:_id}
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

const mapDispatchToProps = (dispatch) => {
  return {
  putOneUserInState: (_id) => dispatch(putOneUserInState(_id))
  }
}

const SubNeighborhoodDetailContainer = connect(mapStateToProps, mapDispatchToProps)(SubNeighborhoodDetail)
export default SubNeighborhoodDetailContainer
