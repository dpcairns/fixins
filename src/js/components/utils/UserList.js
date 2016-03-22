import React from "react"
import * as FixinsActions from "../../actions/FixinsActions"
import RemoveButton from "./RemoveButton"
export default class UserList extends React.Component{


	render(){

		let userNodes = this.props.allUsers.map(function(user){
			return(
				<li key={user._id}>
					<ul>
						<li>Name: {user.username}</li>
						<li> Password: {user.password}</li>
						<li> Neighborhood: {user.user_sub_neighborhood}</li>
						<li> <RemoveButton type="User" id={user._id}/></li>
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