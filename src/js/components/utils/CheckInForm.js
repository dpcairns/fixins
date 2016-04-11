import React from "react"
import CustomDropdown from "./CustomDropdown"
import { Link } from 'react-router'

export default class CheckInForm extends React.Component{
	constructor(){
		super();
		this.state = {
			blurb: '',
			dish: '',
			user: '',
			checkInFailureStyles: {display: "none"},
			checkInSuccessStyles: {display: "none"}
		}
		}

		showCheckInFailure(){
			this.setState({
				checkInSuccessStyles: {
					display: "none"
				},
				checkInFailureStyles: {
				display: "block",
				background: '#FF6666',
				height: '50px',
				width: '100%'
			}
		})
		}


		showCheckInSuccess(){
			this.setState({
				checkInFailureStyles: {display: "none"},
				checkInSuccessStyles: {
				display: "block",
				background: '#98FB98',
				height: '50px',
				width: '100%'
			}
		})

		}

	handleBlurbChange(e){
		this.setState({blurb: e.target.value})
	}


	handleSubmit(e){
		e.preventDefault();
		var newCheckInObject = {}
		newCheckInObject.blurb = this.state.blurb
		newCheckInObject.dish = this.props.thisDish
		newCheckInObject.user = this.props.currentUser
		if(newCheckInObject.blurb.length<1 || newCheckInObject.dish.length<1 || newCheckInObject.user.length<1){
			this.showCheckInFailure();
		}
		else{
		this.props.createCheckIn(newCheckInObject)
		this.showCheckInSuccess();
		}
		this.props.createCheckIn(newCheckInObject)
		this.setState({blurb: '', dish: '', user: ''})
	}

	render(){
	return(
		<div>
	<form onSubmit={this.handleSubmit.bind(this)}>
		<div className="input-group">
			Blurb:
		  <input type="text" value={this.state.blurb} onChange={this.handleBlurbChange.bind(this)} className="form-control" placeholder="dish blurb" />
		</div>
	<input className="button btn-danger align-right" type="submit" value="Post"/>
	</form>
	<div style={this.state.checkInFailureStyles}><h2>checkIn failed. Try again and do something different.</h2></div>
	<div style={this.state.checkInSuccessStyles}><h2>checkIn success! Click here to <Link to="index/myDashboard">view your dashboard</Link>.</h2>.</div>

</div>

		)

	}

}
