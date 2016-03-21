import React from "react"
import CustomDropdown from "./CustomDropdown"
import * as FixinsActions from "../../actions/FixinsActions"

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

	handlePasswordChange(e){
	this.setState({password: e.target.value})
	}

	handleSubmit(e){
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

		<div className="input-group">
			Username:
		  <input type="text" value={this.state.username} onChange={this.handleUsernameChange.bind(this)} className="form-control" placeholder="username"/>
		</div>
		<div className="input-group">
			Password:
		  <input type="password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} className="form-control" placeholder="password"/>
		</div>
		<div className="input-group">
			Neighborhood:
			<CustomDropdown data={this.props.allNeighborhoods} nameName="neighborhood_name" />
		</div>
	<input className="button btn-danger align-right" type="submit" value="Post"/>
	</form>
</div>

		)

	}

}