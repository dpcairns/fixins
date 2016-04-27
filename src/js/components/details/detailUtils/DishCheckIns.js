import React from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router'


export default class DishCheckIns extends React.Component{
	render(){
    let listStyle={maxHeight:"400px",overflowX:"hidden",overflowY:"scroll"}
      let allCheckIns = this.props.allCheckIns
      let dish = this.props.dish
      let putOneUserInState = this.props.putOneUserInState
function findCheckInsFilter(checkIn){
            return (checkIn.checkIn_dish._id === dish._id)
      }
  let checkInNodes = allCheckIns.filter(findCheckInsFilter).map(function(checkIn){
		let userId = checkIn.checkIn_user._id
		let dishId = checkIn.checkIn_dish._id
            return (


								 <tr key={checkIn._id}>

																	<td><h5>{checkIn.checkIn_blurb}</h5></td>
																	<td><Link to={`/user/${userId}`} onClick={putOneUserInState.bind(this, userId)}>
																	<h5>{checkIn.checkIn_user.username}</h5>
																	</Link></td>
																	<td><h5>{checkIn.checkIn_date}</h5></td>

																	</tr>

              )
  }).reverse()

  return(




    <div className="col-md-6" style={listStyle}>
    <table className="table">
    <caption><h3>CheckIns for {dish.dish_name}</h3></caption>

        <tbody>
        {allCheckIns.filter(findCheckInsFilter).length>0 ? checkInNodes : (<tr><td>no checkIns for {dish.dish_name}...yet! <Link to="index/newCheckIn"> Click here to be the first!.</Link> </td></tr>)}
        </tbody>
    </table>
    </div>





  )
}
}
