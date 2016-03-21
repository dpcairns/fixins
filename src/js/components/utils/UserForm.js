import React from "react"
import CustomDropdown from "./CustomDropdown"
import * as FixinsActions from "../../actions/FixinsActions"

export default class UserForm extends React.Component{
	constructor(){
		super();
		this.state = {
			username: '',
			password: '',
			user_sub_neighborhood: ''
		}
	}

	handleUsernameChange(e){
	console.log(this.state.username)

	this.setState({username: e.target.value})
	}

	handlePasswordChange(e){
	this.setState({password: e.target.value})
	}

	handleSubNeighborhoodChange(e){
	this.setState({user_sub_neighborhood: e.target.value})
	console.log(this.state.user_sub_neighborhood)
	}

	handleSubmit(e){
		e.preventDefault();
		var newUser = {}
		newUser.name = this.state.username
		newUser.password = this.state.password
		newUser.user_sub_neighborhood = this.state.user_sub_neighborhood
		FixinsActions.createUser(newUser)
		this.setState({username: "", password: "", user_sub_neighborhood: ""})
	
	}

	render(){
	return(
		<div>
				<form onSubmit={this.handleSubmit.bind(this)}>

		<div className="input-group">
			Username:
		  <input type="text" value={this.state.username} onChange={this.handleUsernameChange.bind(this)} className="form-control" placeholder="username"/>
		</div>
		<div className="input-group">
			Password:
		  <input type="password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} className="form-control" placeholder="password"/>
		</div>
		<div className="input-group">
			Sub-Neighborhood:
			<CustomDropdown setValueTo={this.state.user_sub_neighborhood} 
					onchange2={this.handleSubNeighborhoodChange.bind(this)} 
					data={this.props.allSubNeighborhoods} 
					nameName="subNeighborhood_name" />
		</div>
	<input className="button btn-danger align-right" type="submit" value="Post"/>
	</form>
</div>

		)

	}

}