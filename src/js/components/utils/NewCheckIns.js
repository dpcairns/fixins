import React from "react"
import { Link } from "react-router"
import StarRatingComponent from 'react-star-rating-component';

export default class NewCheckIns extends React.Component{
  render(){
    let allCheckIns = this.props.checkIns
    let putOneUserInState = this.props.putOneUserInState
    let putOneDishInState = this.props.putOneUserInState
    let recentCheckInNodes = []
    let checkInBoxStyle = {padding: "10px", minWidth:"280px", margin:"0 auto", height: "100%", position: "fixed", background:"pink"}
    let scrollItemStyle = {width: "80%", padding: "10px", margin: "0 auto"}
    			if (allCheckIns.length>90){
    			let lastFiveCheckIns = allCheckIns.slice(1, 90)
    			recentCheckInNodes = lastFiveCheckIns.map(function(checkIn){
    				return (<h4 style={scrollItemStyle} key={checkIn._id}>
    					<Link to={`/user/${checkIn.checkIn_user._id}`} onClick={putOneUserInState.bind(this, checkIn.checkIn_user._id)}>
    					{checkIn.checkIn_user.username + " "}
    					</Link>
    					ate
    					<Link onClick={putOneDishInState.bind(this, checkIn.checkIn_dish._id)} to={`/dish/${checkIn.checkIn_dish._id}`}>
    					{" " + checkIn.checkIn_dish.dish_name + " "}
    					</Link>

    					at {" " +checkIn.checkIn_date+ " "} and said "{checkIn.checkIn_blurb}"<hr/></h4>)
    			})
    		}


  return(
  <div style={checkInBoxStyle} className="shadow-container">
    <div className="CheckInBoxAnim">
  {allCheckIns.length>88 ? recentCheckInNodes :  <img height="50" width="100" src="./static/loading.gif" />}
    </div>
    </div>
  )
  }
}
