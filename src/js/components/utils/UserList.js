import React from "react"
import * as FixinsActions from "../../actions/FixinsActions"
import RemoveButton from "./RemoveButton"
import UserEditForm from "./UserEditForm"

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
		let userNodes = allUsers.map(function(user){
			return(
			<div key={user._id}>
				<li>
					<ul>
						<li>Name: {user.username}</li>
						<li> Password: {user.password}</li>
						<li> Neighborhood: {user.user_sub_neighborhood}</li>
						<li> <RemoveButton type="User" id={user._id}/></li>
						<li> 
							<UserEditForm 
								userID={user._id}
								allUsers={allUsers}
								allCheckIns={allCheckIns}
								allDishes={allDishes}
								allReviews={allReviews}
								allSubNeighborhoods={allSubNeighborhoods}/>
						</li>
					</ul>
				</li>
			</div>

					
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