import React from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Links from "../utils/Links"
import CalorieDollarChart from "../utils/CalorieDollarChart"
import HorizontalRainbow from "../utils/HorizontalRainbow"
import * as FixinsActions from "../../actions/FixinsActions"


class MyDashboard extends React.Component{

render(){

  if(this.props.currentUser._id === undefined){
  this.context.router.push('index/login')
  }


  let listStyle={maxHeight:"400px",overflowX:"hidden",overflowY:"scroll"}
  let allReviews = this.props.allReviews
  let allSubNeighborhoods = this.props.allSubNeighborhoods
  let allUsers = this.props.allUsers
  let allDishes = this.props.allDishes
  let allCheckIns = this.props.allCheckIns
  let thisUser = this.props.currentUser
  let putOneDishInState = this.props.putOneDishInState
  let putOneSpotInState = this.props.putOneSpotInState
  let putOneSubNeighborhoodInState = this.props.putOneSubNeighborhoodInState
  let itemBoxStyle = {flexGrow: "1", padding:"5px",margin:"5px",float:"left",textAlign:"center", borderRadius:"10px"}


    				let sortedDishes = []
    				allDishes.forEach(function(dish){
    					sortedDishes.push({
            calories: dish.dish_calories,
            dollars: dish.dish_price,
            calorieDollars: parseInt(dish.dish_calories / dish.dish_price),
    					_id: dish._id,
    					spotId: dish.dish_spot._id,
    					nameOfSpot: dish.dish_spot.spot_name,
    					name: dish.dish_name})
            })
    				sortedDishes.sort(function(dishA, dishB){return dishB.calorieDollars - dishA.caunalorieDollars})
            let rand1 = Math.floor(Math.random()*10)
            let rand2 = Math.floor(Math.random()*10)
            let rand3 = Math.floor(Math.random()*10)
            let rand4 = Math.floor(Math.random()*10)
    				let topFiveCalorieDollarDishes = [sortedDishes[rand1],sortedDishes[rand2],sortedDishes[rand3], sortedDishes[rand4]]
    				let topFiveCalorieDollarDishesNodes = topFiveCalorieDollarDishes.map(function(dish){
    					return (
                <div style={itemBoxStyle} className="bg-info" key={dish._id}>
                <h5>
    						<Link onClick={putOneDishInState.bind(this, dish._id)} to={`/dish/${dish._id}`}>
    						 {dish.name + " "}
    						</Link>
    						  at
    						 <Link to={`/spot/${dish.spotId}`}  onClick={putOneSpotInState.bind(this, dish.spotId)}>
    						  {" " + dish.nameOfSpot}
    						 </Link>
    						  <br/><i> gets {dish.calorieDollars} calorieDollars </i></h5></div>)
    				})


    function findCheckInsFilter(checkIn){
                return (checkIn.checkIn_user._id === thisUser._id || checkIn.checkIn_user === thisUser._id)
          }
     let userCheckIns = 	allCheckIns.filter(findCheckInsFilter).map(function(checkIn){
              return checkIn
          })
      let checkInNodes = allCheckIns.filter(findCheckInsFilter).map(function(checkIn){
        let dishId = checkIn.checkIn_dish._id
                return (
                    <tr key={checkIn._id}>

                    <td>
                    <h4> <Link to={`/dish/${dishId}`} onClick={putOneDishInState.bind(this, dishId)}>
                     {checkIn.checkIn_dish.dish_name}
                     </Link></h4></td>
                    <td><h4>{checkIn.checkIn_dish.dish_calories} calories</h4></td>
                    <td><h4>{checkIn.checkIn_dish.dish_price} dollars</h4></td>
                    <td><h5>{checkIn.checkIn_blurb}</h5></td>
                    <td><h4>{checkIn.checkIn_dish.dish_spot.spot_name}</h4></td>

                    </tr>

                  )
      })
    function findReviewsFilter(review){
                return (review.review_user._id === thisUser._id || review.review_user === thisUser._id)
          }
      let reviewNodes = allReviews.filter(findReviewsFilter).map(function(review){
        let dishId = review.reviewed_dish._id
                return (

                  <tr key={review._id}>
                    <td>
                    <h4><Link to={`/dish/${dishId}`} onClick={putOneDishInState.bind(this, dishId)}>{review.reviewed_dish.dish_name}</Link></h4></td>
                    <td><h4>{review.reviewed_dish.dish_calories}  calories</h4></td>
                    <td><h4>{review.reviewed_dish.dish_price} dollars </h4></td>
                    <td><h5>{review.review_words} </h5></td>
                    <td><h4>{review.review_stars} stars </h4></td>
                    <td><h4>{review.review_date}</h4></td>
                  </tr>
                  )
      })

  return (
<div>
<div className="bg-warning med-pad med-mar" style={{overflow: "hidden"}}>

<HorizontalRainbow />
<div className="row">
  <div className="col-md-6">

  <h1>welcome to your dashboard, {thisUser.username}</h1>
  </div>
  <div className="col-md-6">
      <h3>you are proud to call {
        thisUser.user_sub_neighborhood !== undefined ?
            <Link to={`/subNeighborhood/${thisUser.user_sub_neighborhood._id}`}
            onClick={putOneSubNeighborhoodInState.bind(this, thisUser.user_sub_neighborhood._id)}>
            {thisUser.user_sub_neighborhood.subNeighborhood_name} </Link>
        : ("nothing")} home</h3>
  </div>
</div>
<br/>
<CalorieDollarChart username={thisUser.username} userTarget={thisUser.user_target} userCheckIns={userCheckIns} />


<div className="flex">
<h3 className="bg-danger" style={itemBoxStyle}>not hitting your target? here are some highly efficient ideas for you to chew on</h3>
{topFiveCalorieDollarDishesNodes}
</div>
<div>
  <div className="row">
    <div className="col-md-6" style={listStyle}>
        <h1>Your CheckIns</h1>
            <table className="table">
              <tbody>
            {checkInNodes}
            </tbody>
            </table>
    </div>
    <div className="col-md-6" style={listStyle}>
        <h1>Your Reviews</h1>
        <table className="table">
          <tbody>
          {reviewNodes}
          </tbody>
        </table>
    </div>
</div>
</div>
<HorizontalRainbow />

</div>

</div>
      )
    }
  }


MyDashboard.contextTypes = {
  router: React.PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    allDishes: state.dishes,
    allReviews: state.reviews,
    allSubNeighborhoods: state.subNeighborhoods,
    allUsers: state.users,
    allDishes: state.dishes,
    allCheckIns: state.checkIns
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  putOneDishInState: (_id) => dispatch(FixinsActions.putOneDishInState(_id)),
  putOneSubNeighborhoodInState: (_id) => dispatch(FixinsActions.putOneSubNeighborhoodInState(_id)),
  putOneSpotInState: (_id) => dispatch(FixinsActions.putOneSpotInState(_id)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyDashboard)
