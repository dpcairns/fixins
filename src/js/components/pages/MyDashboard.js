import React from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Links from "../utils/Links"
import CalorieDollarChart from "../utils/CalorieDollarChart"
import HorizontalRainbow from "../utils/HorizontalRainbow"

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
  let putOneSubNeighborhoodInState = this.props.putOneSubNeighborhoodInState

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
                  <h4>
                    <td>
                    <h4><Link to={`/dish/${dishId}`} onClick={putOneDishInState.bind(this, dishId)}>{review.reviewed_dish.dish_name}</Link></h4></td>
                    <td><h4>{review.reviewed_dish.dish_calories}  calories</h4></td>
                    <td><h4>{review.reviewed_dish.dish_price} dollars </h4></td>
                    <td><h5>{review.review_words} </h5></td>
                    <td><h4>{review.review_stars} stars </h4></td>
                    <td><h4>{review.review_date}</h4></td>
                    </h4>
                  </tr>
                  )
      })

  return (
<div>
<div className="bg-warning med-pad med-mar">

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
<CalorieDollarChart username={thisUser.username} userCheckIns={userCheckIns} />

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


function putOneDishInState(_id){
  return {type: "PUT_ONE_DISH_IN_STATE", _id:_id}
}

function putOneSubNeighborhoodInState(_id){
  return {type: "PUT_ONE_SUBNEIGHBORHOOD_IN_STATE", _id:_id}
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
  putOneDishInState: (_id) => dispatch(putOneDishInState(_id)),
  putOneSubNeighborhoodInState: (_id) => dispatch(putOneSubNeighborhoodInState(_id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyDashboard)
