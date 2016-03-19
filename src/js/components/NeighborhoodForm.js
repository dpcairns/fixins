import React from "react"
import CustomDropdown from "./CustomDropdown"

export default class NeighborhoodForm extends React.Component{
	constructor(){
		super();
		this.state = {
			name: ''
		}
	}

	handleNameChange(e){
		this.setState({name: e.target.value})
	}

	handleSubmit(){
		e.preventDefault();
		var newNeighborhoodObject = {}
		newNeighborhoodObject.name = this.state.name
		FixinActions.createNeighborhood(newNeighborhoodObject)
		this.setState({name: ""})
	}

	render(){
	return(
	<form onSubmit={this.handleSubmit.bind(this)}>
		<div class="input-group">
			Neighborhood name:
		  <input type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)} class="form-control" placeholder="neighborhood name" />
		</div>
	<input class="button btn-danger align-right" type="submit" value="Post"/>
	</form>

		)

	}

}