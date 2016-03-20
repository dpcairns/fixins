import React from "react"
import CustomDropdown from "./CustomDropdown"

export default class CheckInForm extends React.Component{
	constructor(){
		super();
		this.state = {
			blurb: '',
			dish: '',
			spot: ''
		}
	}

	handleSpotChange(e){
		this.setState({name: e.target.value})
	}

	handleBlurbChange(){
		this.setState({blurb: e.target.value})
	}

	handleDishChange(){
		this.setState({blurb: e.target.value})
	}

	handleSubmit(){
		e.preventDefault();
		var newCheckInObject = {}
		newCheckInObject.blurb = this.state.blurb
		newCheckInObject.dish = this.state.dish
		newCheckInObject.spot = this.state.spot
		FixinsActions.createCheckIn(newCheckInObject)
		this.setState({blurb: '', dish: ''})
	}

	render(){
	return(
		<div>
	<form onSubmit={this.handleSubmit.bind(this)}>
		<div class="input-group">
			Blurb:
		  <input type="text" value={this.state.blurb} onChange={this.handleBlurbChange.bind(this)} class="form-control" placeholder="dish blurb" />
		</div>
		<div class="input-group">
			Dish:
			<CustomDropdown setValueTo={this.state.dish} onChange={this.handleDishChange.bind(this)} data={this.props.allGenres} nameName="genre_name" />
		</div>
		<div class="input-group">
			Spot:
			<CustomDropdown setValueTo={this.state.spot} onChange={this.handleSpotChange.bind(this)} data={this.props.allSpots} nameName="spot_name" />
		</div>
	<input class="button btn-danger align-right" type="submit" value="Post"/>
	</form>
</div>

		)

	}

}