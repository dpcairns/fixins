import React from "react"

export default class UserList extends React.Component{
	render(){
		let userNodes = this.props.allUsers.map(function(user){
			return(
				<li>
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