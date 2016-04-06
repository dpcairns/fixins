import React from "react"
import CustomDropdown from "./CustomDropdown"

export default class UserEditForm extends React.Component{
	constructor(){
		super();
		this.state = {
				newUsername: "",
				newPassword: "",
				newSubNeighborhood: "",
				newFriend: "",
				newFavorite: "",
				newCheckIn: "",
				newReview: ""
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
	}

	handleFriendChange(e){
		this.setState({newFriend: e.target.value})
	}

	handleFavoriteChange(e){
		this.setState({newFavorite: e.target.value})
	}

	handleReviewChange(e){
		this.setState({newReview: e.target.value})
	}

	handleCheckInChange(e){
		this.setState({newCheckIn: e.target.value})
	}

	handleSubmit(e){
		e.preventDefault();
		var newUserInfo = {}
		newUserInfo._id = this.props.userID
		newUserInfo.newUsername = this.state.newUsername
		newUserInfo.newPassword = this.state.newPassword
		newUserInfo.newSubNeighborhood = this.state.newSubNeighborhood
		newUserInfo.newFriend = this.state.newFriend
		newUserInfo.newFavorite = this.state.newFavorite
		newUserInfo.newReview = this.state.newReview
		newUserInfo.newCheckIn = this.state.newCheckIn
		this.props.findAndChangeUser(newUserInfo)
		this.setState({newUsername: "",
						newPassword: "",
						newSubNeighborhood: "",
						newFriend: "",
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
