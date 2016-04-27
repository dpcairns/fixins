import React from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Links from "../utils/Links"
import CalorieDollarChart from "../utils/CalorieDollarChart"
import HorizontalRainbow from "../utils/HorizontalRainbow"
import * as FixinsActions from "../../actions/FixinsActions"
import MtSvgLines from 'react-mt-svg-lines';      // ES6+
import RecommendedDishes from '../details/detailUtils/RecommendedDishes'
import MyDashboardHeader from '../details/detailUtils/MyDashboardHeader'
import YourReviewsAndCheckIns from '../details/detailUtils/YourReviewsAndCheckIns'
import StarRatingComponent from 'react-star-rating-component'

class MyDashboard extends React.Component{

render(){
  if(this.props.currentUser._id === undefined){
  this.context.router.push('index/login')
  }
  let showCheckInModal = this.props.showCheckInModal
  let toggleCheckInModal = this.props.toggleCheckInModal
  let allReviews = this.props.allReviews
  let allSubNeighborhoods = this.props.allSubNeighborhoods
  let allUsers = this.props.allUsers
  let allDishes = this.props.allDishes
  let allCheckIns = this.props.allCheckIns
  let thisUser = this.props.currentUser
  let putOneDishInState = this.props.putOneDishInState
  let putOneSpotInState = this.props.putOneSpotInState
  let putOneSubNeighborhoodInState = this.props.putOneSubNeighborhoodInState
  function findCheckInsFilter(checkIn){
              return (checkIn.checkIn_user._id === thisUser._id || checkIn.checkIn_user === thisUser._id)
        }
  let userCheckIns = 	allCheckIns.filter(findCheckInsFilter).map(function(checkIn){
      return checkIn
  })


  return (
    <div>
    <div className="bg-warning med-pad med-mar" style={{overflow: "hidden"}}>

    <HorizontalRainbow />
    <MyDashboardHeader
      thisUser={thisUser}
      putOneSubNeighborhoodInState={putOneSubNeighborhoodInState}
      />
    <HorizontalRainbow />

    <br/>
    <CalorieDollarChart username={thisUser.username}
    userTarget={thisUser.user_target}
    userCheckIns={userCheckIns} />

    <RecommendedDishes allDishes={allDishes}
        allReviews={allReviews}
        showCheckInModal={showCheckInModal}
        putOneSpotInState={putOneSpotInState}
        putOneDishInState={putOneDishInState}
        toggleCheckInModal={toggleCheckInModal} />

    <div>
      <YourReviewsAndCheckIns
      allReviews={allReviews}
      allCheckIns={allCheckIns}
      allDishes={allDishes}
      putOneDishInState={putOneDishInState}
      thisUser={thisUser}
       />

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


const toggleCheckInModal = () => {
	return {type:"TOGGLE_CHECKIN_MODAL"}
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    allDishes: state.dishes,
    allReviews: state.reviews,
    allSubNeighborhoods: state.subNeighborhoods,
    allUsers: state.users,
    allDishes: state.dishes,
    allCheckIns: state.checkIns,
    showCheckInModal: state.showCheckInModal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  putOneDishInState: (_id) => dispatch(FixinsActions.putOneDishInState(_id)),
  putOneSubNeighborhoodInState: (_id) => dispatch(FixinsActions.putOneSubNeighborhoodInState(_id)),
  putOneSpotInState: (_id) => dispatch(FixinsActions.putOneSpotInState(_id)),
  toggleCheckInModal: () => dispatch(toggleCheckInModal()),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyDashboard)
