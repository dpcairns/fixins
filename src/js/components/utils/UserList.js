import React from "react"
import * as FixinsActions from "../../actions/FixinsActions"
import RemoveButton from "./RemoveButton"
export default class UserList extends React.Component{

showEditOptions(){

}
	render(){

		let userNodes = this.props.allUsers.map(function(user){
			return(
				<li key={user._id}>
					<ul>
						<li>Name: {user.username}</li>
						<li> Password: {user.password}</li>
						<li> Neighborhood: {user.user_sub_neighborhood}</li>
						<li> <RemoveButton type="User" id={user._id}/></li>
						<li> 
							<button onclick={this.showEditOptions.bind(this)}>
									Edit user
							</button>
						</li>
					</ul>
					<div className={this.state.editStyles}>
					<UserEditForm allUsers={this.props.allUsers}
								  allCheckIns={this.props.allCheckIns}
								  allReviews={this.props.allReviews}
								  allSubNeighborhoods={this.props.allSubNeighborhoods}/>
					</div>

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