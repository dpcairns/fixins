import React from "react"
import { connect } from 'react-redux'
import CalorieDollarChart from "../utils/CalorieDollarChart"
import RemoveButton from "../utils/RemoveButton"
import { Link } from 'react-router'
import * as FixinsActions from "../../actions/FixinsActions"
import Links from "../utils/Links"
import YourReviewsAndCheckIns from "./detailUtils/YourReviewsAndCheckIns"

class UserDetail extends React.Component{

	render(){
		let listStyle={maxHeight:"400px",overflowX:"hidden",overflowY:"scroll"}
    let allReviews = this.props.allReviews
		let allSubNeighborhoods = this.props.allSubNeighborhoods
		let allUsers = this.props.allUsers
		let allDishes = this.props.allDishes
		let allCheckIns = this.props.allCheckIns
    let thisUser = this.props.user
		let putOneDishInState = this.props.putOneDishInState
		let putOneSubNeighborhoodInState = this.props.putOneSubNeighborhoodInState
		let subNeighborhoodId = thisUser.user_sub_neighborhood._id

		  function findCheckInsFilter(checkIn){
		              return (checkIn.checkIn_user._id === thisUser._id || checkIn.checkIn_user === thisUser._id)
		        }
				let userCheckIns = allCheckIns.filter(findCheckInsFilter).map(function(checkIn){
				return checkIn
		})

    return (
<div>

<div className="bg-info med-pad med-mar" style={{overflow: "hidden"}}>

			<div className="row">
			    <div className="col-md-12">
			      <ul style={{listStyleType:"none"}}>
			        <li><h2>User info for {this.props.user.username}</h2></li>
							<li>
										<Link to={`/subNeighborhood/${subNeighborhoodId}`} onClick={putOneSubNeighborhoodInState.bind(this, subNeighborhoodId)}>
												{this.props.user.user_sub_neighborhood.subNeighborhood_name}
										</Link>
						</li>
			      </ul>
			    </div>
			</div>

<CalorieDollarChart username={thisUser.username} userCheckIns={userCheckIns} />

		<div>
				<YourReviewsAndCheckIns
				 allReviews={allReviews}
				 allCheckIns={allCheckIns}
				 allDishes={allUsers}
				 putOneDishInState={putOneDishInState}
				 thisUser={thisUser}
				 />
		</div>
</div>
</div>
      )
  }
}

const mapStateToProps = (state) => {
  const selectUser = (users, id) => {
          const ridiculousArray = users.filter(x => x._id === id)
          return ridiculousArray[0]
        }
	    return {
        user: selectUser(state.users, state.user._id),
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
	 putOneSubNeighborhoodInState: (_id) => dispatch(FixinsActions.putOneSubNeighborhoodInState(_id))
 }
}


const UserDetailContainer = connect(mapStateToProps, mapDispatchToProps)(UserDetail)
export default UserDetailContainer
