import React from "react"

export default class UserList extends React.Component{
	render(){
		let userNodes = this.props.allUsers.map(function(user){
			return(
				<li>
					<li>Name: {user.name}</li>
					<li> Password: {user.password}</li>
					<li> Neighborhood: {user.neighborhood}</li>
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