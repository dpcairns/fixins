import React from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router'
import RemoveButton from "../utils/RemoveButton"
import Links from "../utils/Links"

class SpotDetail extends React.Component{
	render(){
    console.log("this.props.user")
    console.log(this.props.user)
    let allReviews = this.props.allReviews
		let allSubNeighborhoods = this.props.allSubNeighborhoods
		let allUsers = this.props.allUsers
		let allDishes = this.props.allDishes
		let allCheckIns = this.props.allCheckIns
		let putOneDishInState = this.props.putOneDishInState
    let spot = this.props.spot

			function findDishesFilter(dish){
									return (dish.dish_spot._id === spot._id)
						}
				let dishNodes = allDishes.filter(findDishesFilter).map(function(dish){
					let dishId = dish._id
									return (


                      <ul key={dish._id}>
                      <li onClick={putOneDishInState.bind(this, dishId)}>
												<Link to={`/dish/${dishId}`}>
														<b>{dish.dish_name}</b>
												</Link>
											</li>
											<li>>{dish.dish_calories} calories</li>
											<li>{dish.dish_price} dollars</li>
                      </ul>
										)
				})


    return (
<div>
<div className="container">
    <Links/>
      <ul>
        <li><h2>{spot.spot_name}</h2></li>
        <li> SubNeighorhood: {spot.spot_subNeighborhood.subNeighborhood_name}</li>
				<li> Spot Dishes: {dishNodes} </li>
      </ul>
    </div>
</div>
      )
  }
}

const mapStateToProps = (state) => {
  const selectSpot = (spots, id) => {
          const ridiculousArray = spots.filter(x => x._id === id)
          return ridiculousArray[0]
        }
	    return {
        spot: selectSpot(state.spots, state.spot._id),
        allDishes: state.dishes,
        allReviews: state.reviews,
    		allSubNeighborhoods: state.subNeighborhoods,
    		allUsers: state.users,
    		allDishes: state.dishes,
    		allCheckIns: state.checkIns
        }
}

function putOneDishInState(_id){
  return {type: "PUT_ONE_DISH_IN_STATE", _id:_id}
}

const mapDispatchToProps = (dispatch) => {
 return {putOneDishInState: (_id) => dispatch(putOneDishInState(_id))}
}

const SpotDetailContainer = connect(mapStateToProps, mapDispatchToProps)(SpotDetail)
export default SpotDetailContainer
