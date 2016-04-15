import React from "react"
import CustomDropdown from "./CustomDropdown"
import {Link} from "react-router"

export default class UserForm extends React.Component{
	constructor(){
		super();
		this.state = {
			username: '',
			password: '',
			user_sub_neighborhood: '',
			target: '',
      signUpFailureStyles: {display: "none"},
      signUpSuccessStyles: {display: "none"}
		}
	}

	  showSignUpFailure(){
	    this.setState({
				signUpSuccessStyles: {
					display: "none"
				},
				signUpFailureStyles: {
	      display: "block",
	      background: '#FF6666',
	      height: '50px',
	      width: '100%'
	    }
	  })
	}


	  showSignUpSuccess(){
	    this.setState({
	      signUpFailureStyles: {display: "none"},
	      signUpSuccessStyles: {
	      display: "block",
	      background: '#98FB98',
	      height: '50px',
	      width: '100%'
	    }
	  })

	}

	handleUsernameChange(e){
	this.setState({username: e.target.value})
	}

		handleTargetChange(e){
		this.setState({target: e.target.value})
		}

	handlePasswordChange(e){
	this.setState({password: e.target.value})
	}

	handleSubNeighborhoodChange(e){
	this.setState({user_sub_neighborhood: e.target.value})
	}

	handleSubmit(e){
		e.preventDefault();
		var newUser = {}
		newUser.name = this.state.username
		newUser.password = this.state.password
		newUser.user_sub_neighborhood = this.state.user_sub_neighborhood
		if(newUser.name.length<1 || newUser.password.length<1 || newUser.user_sub_neighborhood.length<1){
			this.showSignUpFailure();
		}
		else{
		this.props.createUser(newUser)
		this.showSignUpSuccess();
		}
		this.setState({username: "", password: "", user_sub_neighborhood: ""})
	}

	render(){
	return(
		<div>
				<form onSubmit={this.handleSubmit.bind(this)}>
			<h3>
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
		<div className="input-group">
			What is your calorieDollar target?
		  <input type="number"
		  	value={this.state.target}
		  	onChange={this.handleTargetChange.bind(this)}
		  	className="form-control"
		  	placeholder="ex: 250"/> <h4>calories per dollar.</h4>
		</div>

	<input className="button btn-danger align-right" type="submit" value="Sign up!"/>
	</h3>

	</form>
	<div style={this.state.signUpFailureStyles}><h2>Signup failed. Try again and do something different.</h2></div>
	<div style={this.state.signUpSuccessStyles}><h2>Signup success! Click here to <Link to="index/login">login</Link>.</h2>.</div>

</div>

		)

	}

}
