import React from "react"
import CustomDropdown from "./CustomDropdown"

export default class UserForm extends React.Component{
	constructor(){
		super();
		this.state = {
			username: '',
			password: '',
			neighborhood: ''
		}
	}

	handleUsernameChange(e){
	this.setState({username: e.target.value})
	}

	handlePasswordChange(){
	this.setState({password: e.target.value})
	}

	handleSubmit(){
		e.preventDefault();
		var newUserObject = {}
		newUserObject.username = this.state.username
		newUserObject.password = this.state.password
		newUserObject.neighborhood = this.state.neighborhood
		FixinsActions.createUser(newUserObject)
		this.setState({username: "", password: "", neighborhood: ""})
	
	}

	render(){
	return(
		<div>
				<form onSubmit={this.handleSubmit.bind(this)}>

		<div class="input-group">
			Username:
		  <input type="text" value={this.state.username} onChange={this.handleUsernameChange.bind(this)} class="form-control" placeholder="username"/>
		</div>
		<div class="input-group">
			Password:
		  <input type="password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} class="form-control" placeholder="password"/>
		</div>
		<div class="input-group">
			Neighborhood:
			<CustomDropdown data={this.props.allNeighborhoods} nameName="neighborhood_name" />
		</div>
	<input class="button btn-danger align-right" type="submit" value="Post"/>
	</form>
</div>

		)

	}

}