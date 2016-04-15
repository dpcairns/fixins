import React from "react"
import RemoveButton from "./RemoveButton"
import UserEditForm from "./UserEditForm"
import CalorieDollarChart from "./CalorieDollarChart"
import { Link } from 'react-router'

export default class UserList extends React.Component{
	constructor(){
		super()
		this.state={
			showEditOptions: false,
			editStyles: {display: "none"}
		}
	}

toggleEdit(){
		if(!this.state.showEditOptions){
			this.setState({
				editStyles: {
					display: "block",
					background: "rgba(86, 0, 65, .6)",
					position: 'fixed',
  					zIndex: "2",
  					width: "100%",
  					height: "100%",
  					top: "0",
  					bottom: "0",
  					left: "0",
  					right: "0"

				}})
			this.setState({showEditOptions: true})
		}
		else if(this.state.showEditOptions===true){
			this.setState({editStyles:{
				display: "none"
				}})
			this.setState({showEditOptions: false})
		}
}
	render(){
		let allReviews = this.props.allReviews
		let allSubNeighborhoods = this.props.allSubNeighborhoods
		let allUsers = this.props.allUsers
		let allDishes = this.props.allDishes
		let allCheckIns = this.props.allCheckIns
		let removeUser = this.props.removeUser
		let putOneUserInState = this.props.putOneUserInState
		let putOneDishInState = this.props.putOneDishInState
		let putOneSubNeighborhoodInState = this.props.putOneSubNeighborhoodInState
		let findAndChangeUser = this.props.findAndChangeUser
		let userNodes = allUsers.map(function(user){

			function findCheckInsFilter(checkIn){
									return (checkIn.checkIn_user._id === user._id || checkIn.checkIn_user === user._id)
						}
			 let userCheckIns = 	allCheckIns.filter(findCheckInsFilter).map(function(checkIn){
								return checkIn
						})
				let checkInNodes = allCheckIns.filter(findCheckInsFilter).map(function(checkIn){
					let dishId = checkIn.checkIn_dish._id
									return (
										<div key={checkIn._id}>
											<ul>
											<Link to={`/dish/${dishId}`}>
											<li onClick={putOneDishInState.bind(this, dishId)}>
											<b>{checkIn.checkIn_dish.dish_name}</b></li>
											</Link>
											<li>{checkIn.checkIn_dish.dish_calories} calories</li>
											<li>{checkIn.checkIn_dish.dish_price} dollars</li>
											<li>{checkIn.checkIn_blurb}</li>
											<li>{checkIn.checkIn_dish.dish_spot.spot_name}</li>
											</ul>
										</div>

										)
				})

			function findReviewsFilter(review){
									return (review.review_user._id === user._id || review.review_user === user._id)
						}
				let reviewNodes = allReviews.filter(findReviewsFilter).map(function(review){
					let dishId = review.reviewed_dish._id
									return (
										<div key={review._id}>
										<ul>
										<Link to={`/dish/${dishId}`}>
											<li onClick={putOneDishInState.bind(this, dishId)}>
											<b>{review.reviewed_dish.dish_name}</b></li>
											</Link>
											<li>{review.reviewed_dish.dish_calories}  calories</li>
											<li>{review.reviewed_dish.dish_price} dollars</li>
											<li>{review.review_words}</li>
											<li>{review.review_stars} stars</li>
											<li>{review.review_date}</li>

											</ul>
										</div>

										)
				})

				let userId = user._id
				let subNeighborhoodId = user.user_sub_neighborhood._id

			return(
			<div className="row user-boxes" onClick={putOneUserInState.bind(this, userId)} key={userId}>

				<div className="col-md-6">
					<ul>
					<Link to={`/user/${userId}`}>

						<li><h2>{user.username}</h2></li>
						<li> Password: {user.password}</li>
						</Link>

						<Link to={`/SubNeighborhood/${subNeighborhoodId}`}>
						<li onClick={putOneSubNeighborhoodInState.bind(this, subNeighborhoodId)}>
						SubNeighborhood: {user.user_sub_neighborhood.subNeighborhood_name}</li>
						</Link>
						<li> CheckIns: {checkInNodes}</li>
						<li> Reviews: {reviewNodes}</li>

						<li> <RemoveButton removeUser={removeUser} type="User" id={user._id}/></li>
					</ul>
				</div>
				<div className="col-md-6">
											<UserEditForm
								userID={user._id}
								allUsers={allUsers}
								allCheckIns={allCheckIns}
								allDishes={allDishes}
								allReviews={allReviews}
								allSubNeighborhoods={allSubNeighborhoods}/> <br/>
				</div>

				<br/>
</div>

				)
		})
	return(
		<div>
			{userNodes}
		</div>

		)

	}

}


						//<li> Latest review: {user.user_reviews[-1].reviewed_dish.dish_name}</li>
						//<li> Latest checkIn: {user.user_checkIns[-1].checkIn_spot.spot_name}</li>
