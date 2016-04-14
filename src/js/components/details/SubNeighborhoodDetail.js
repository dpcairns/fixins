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
		let allDishes = this.props.allDishes
		let putOneDishInState = this.props.putOneDishInState
		let putOneGenreInState = this.props.putOneGenreInState
		let putOneNeighborhoodInState = this.props.putOneNeighborhoodInState
    let subNeighborhood = this.props.subNeighborhood
		let itemBoxStyle = {height:"180px",width:"200px", overflow:"hidden",padding: "8px", margin:"5px",float:"left",textAlign:"center", borderRadius:"10px"}

    function findSpotsFilter(spot){

    									return (spot.spot_subNeighborhood._id === subNeighborhood._id)
    						}
    				let spotNodes = allSpots.filter(findSpotsFilter).map(function(spot){

											function findDishesFilter(dish){
																	return (dish.dish_spot._id === spot._id)
														}
								let theseDishes = allDishes.filter(findDishesFilter)
							let spotId = spot._id
    									return (
												<div style={itemBoxStyle} key={spot._id} className="shad bg-info">
														<Link onClick={putOneSpotInState.bind(this, spotId)} to={`/spot/${spotId}`}><h3>{spot.spot_name}</h3></Link>
														<h4>
														<Link onClick={putOneGenreInState.bind(this, spot.spot_genres[0]._id)} to={`/genre/${spot.spot_genres[0]._id}`}>({spot.spot_genres[0].genre_name})</Link>
														<br/>Signature dish: {
												theseDishes.length>0 ?
														<Link onClick={putOneDishInState.bind(this, theseDishes[0]._id)}
																	to={`/dish/${theseDishes[0]._id}`}>
																	{theseDishes[0].dish_name} </Link>
												:  <Link onClick={putOneSpotInState.bind(this, spotId)}
												to="index/newDish">be the first to add a dish!</Link>
											}
											</h4>
												</div>
												)
    				})



    function findUsersFilter(user){
                    return(user.user_sub_neighborhood._id === subNeighborhood._id)
    }
        let userNodes = allUsers.filter(findUsersFilter).map(function(user){
            let userId = user._id

                    return (
											<div style={itemBoxStyle} key={userId} className="shad bg-danger">
                        <Link to={`/user/${userId}`} onClick={putOneUserInState.bind(this, userId)}>
                        <h3>{user.username}</h3></Link> <br/>
                        <h4>Password: {user.password}</h4>
												</div>
                    )
        })
				let neighborhoodId = subNeighborhood.sub_neighborhood_neighborhood._id
    return(
      <div className="bg-warning med-pad med-mar">


			<div className="row">
				 <div className="col-md-6">
				<h3><Link to="index/allNeighborhoods">see all neighborhoods</Link></h3>
          <h1>{subNeighborhood.subNeighborhood_name}</h1>
					<h3>{subNeighborhood.subNeighborhood_name} is located in <Link to={`/neighborhood/${neighborhoodId}`} onClick={putOneNeighborhoodInState.bind(this, neighborhoodId)}>
					{subNeighborhood.sub_neighborhood_neighborhood.neighborhood_name}
					</Link>
					</h3>

					</div>
		 <div className="col-md-6">
		 <h3>

					Think we missed a spot?<br/>
					<Link to="index/newSpot"><i>Add one here!</i></Link>
					 </h3>
			</div>
			</div>


					 <div className="row">
					 		<div className="col-md-6">
							<br/><hr/>
		          <h2>Spots in {subNeighborhood.subNeighborhood_name}</h2>
							<div className="flex">
		          {allSpots.filter(findSpotsFilter).length> 0 ? spotNodes: (<h4>no restaurants in  {subNeighborhood.subNeighborhood_name}...yet! <Link to="index/newSpot">Be the first to add one!</Link></h4>)}
							</div>
							</div>
							<div className="col-md-6">
							<br/><hr/>
		          <h2>Users in {subNeighborhood.subNeighborhood_name}</h2>
							<div className="flex">
		          {allUsers.filter(findUsersFilter).length> 0 ? userNodes: (<h4>no users in {subNeighborhood.subNeighborhood_name}...yet!</h4>)}
		      		</div>
							</div>
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
        allCheckIns: state.checkIns,
				allDishes: state.dishes
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

function  putOneGenreInState(_id){
  return {type: "PUT_ONE_GENRE_IN_STATE", _id:_id}
}

const mapDispatchToProps = (dispatch) => {
  return {
  putOneUserInState: (_id) => dispatch(putOneUserInState(_id)),
	putOneSpotInState: (_id) => dispatch(putOneSpotInState(_id)),
	putOneDishInState: (_id) => dispatch(putOneDishInState(_id)),
	putOneNeighborhoodInState: (_id) => dispatch(putOneNeighborhoodInState(_id)),
	putOneGenreInState: (_id) => dispatch(putOneGenreInState(_id)),


  }
}

const SubNeighborhoodDetailContainer = connect(mapStateToProps, mapDispatchToProps)(SubNeighborhoodDetail)
export default SubNeighborhoodDetailContainer
