import React from "react"
import * as FixinsActions from "../../actions/FixinsActions"

export default class UserList extends React.Component{

	removeUser(UserId){
		FixinsActions.removeUser(UserId)
	}

	render(){

	let removeUser = this.removeUser
		let userNodes = this.props.allUsers.map(function(user){
			return(
				<li key={user._id}>
					<ul>
						<li>Name: {user.username}</li>
						<li> Password: {user.password}</li>
						<li> Neighborhood: {user.user_sub_neighborhood}</li>
					</ul>
				</li>
				)
		})
	return(
		<div>
			<ol>
			{userNodes}
			</ol>
		</div>

		)

	}

}