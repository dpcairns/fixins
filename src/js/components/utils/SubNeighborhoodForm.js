import React from "react"
import CustomDropdown from "./CustomDropdown"

export default class SubNeighborhoodForm extends React.Component{
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
		var newSubNeighborhoodObject = {}
		newSubNeighborhoodObject.name = this.state.name
		FixinsActions.createSubNeighbodrhood(newSubNeighborhoodObject)
		this.setState({name: ""})
	}

	render(){
	return(
	<form onSubmit={this.handleSubmit.bind(this)}>
		<div class="input-group">
			Sub-Neighborhood name:
		  <input type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)} class="form-control" placeholder="sub-neighborhood name" />
		</div>
	<input class="button btn-danger align-right" type="submit" value="Post"/>
	</form>

		)

	}

}