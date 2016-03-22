import React from "react"
import CustomDropdown from "./CustomDropdown"
import * as FixinsActions from "../../actions/FixinsActions"

export default class UserEditForm extends React.Component{
	constructor(){
		super();
		this.state = {
				newUsername: "", 
				newPassword: "", 
				newSubNeighborhood: "",
				newReview: "", 
				newFriend: "", 
				newCheckIn: "", 
				newFavorite: ""
		}
	}

	handleUsernameChange(e){
		this.setState({newUsername: e.target.value})
	}

	handlePasswordChange(e){
		this.setState({newPassword: e.target.value})
	}

	handleSubNeighborhoodChange(e){
		this.setState({newSubNeighborhood: e.target.value})
		console.log(this.state.newSubNeighborhood)
	}

	handleFriendChange(e){
		this.setState({newFriend: e.target.value})
		console.log(this.state.newFriend)
	}

	handleCheckInChange(e){
		this.setState({newCheckIn: e.target.value})
		console.log(this.state.newCheckIn)
	}

	handleFavoriteChange(e){
		this.setState({newFavorite: e.target.value})
		console.log(this.state.newFavorite)
	}


	handleReviewChange(e){
		this.setState({newReview: e.target.value})
		console.log(this.state.newReview)
	}

	handleSubmit(e){
		e.preventDefault();
		var changedUser = {}
		changedUser._id = this.props.userID
		changedUser.newUsername = this.state.newUsername
		changedUser.newPassword = this.state.newPassword
		changedUser.newSubNeighborhood = this.state.newSubNeighborhood
		changedUser.newReview = this.state.newReview
		changedUser.newFriend = this.state.newFriend
		changedUser.newCheckIn = this.state.newCheckIn
		changedUser.newFavorite = this.state.newFavorite
		FixinsActions.findAndChangeUser(changedUser)
		this.setState({newUsername: "", 
						newPassword: "", 
						newSubNeighborhood: "",
						newReview: "", 
						newFriend: "", 
						newCheckIn: "", 
						newFavorite: ""})
		}

	render(){
	return(
		<div>
				<form onSubmit={this.handleSubmit.bind(this)}>

		<div className="input-group">
			Update Username:
		  <input type="text" value={this.state.newUsername} onChange={this.handleUsernameChange.bind(this)} className="form-control" placeholder="username"/>
		</div>
		<div className="input-group">
			Update Password:
		  <input type="password" value={this.state.newPassword} onChange={this.handlePasswordChange.bind(this)} className="form-control" placeholder="password"/>
		</div>
		<div className="input-group">
			Update Sub-Neighborhood:
			<CustomDropdown setValueTo={this.state.newSubNeighborhood} 
					onchange2={this.handleSubNeighborhoodChange.bind(this)} 
					data={this.props.allSubNeighborhoods} 
					nameName="subNeighborhood_name" />
		</div>
		<div className="input-group">
			Add a new Friend:
			<CustomDropdown setValueTo={this.state.newFriend} 
					onchange2={this.handleFriendChange.bind(this)} 
					data={this.props.allUsers} 
					nameName="username" />
		</div>
		<div className="input-group">
			Add a new CheckIn:
			<CustomDropdown setValueTo={this.state.newCheckIn} 
					onchange2={this.handleCheckInChange.bind(this)} 
					data={this.props.allCheckIns} 
					nameName="_id" />
		</div>
		<div className="input-group">
			Add a new Review:
			<CustomDropdown setValueTo={this.state.newReview} 
					onchange2={this.handleReviewChange.bind(this)} 
					data={this.props.allReviews} 
					nameName="_id" />
		</div>
		<div className="input-group">
			Add a new Favorite:
			<CustomDropdown setValueTo={this.state.newFavorite} 
					data = {this.props.allDishes}
					onchange2={this.handleFavoriteChange.bind(this)} 
					nameName="dish_name" />
		</div>
	<input className="button btn-danger align-right" type="submit" value="Update"/>
	</form>
</div>

		)

	}

}