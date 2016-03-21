import React from "react"
import CustomDropdown from "./CustomDropdown"
import * as FixinsActions from "../../actions/FixinsActions"

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

	handleSubmit(e){
		e.preventDefault(e);
		var newNeighborhoodObject = {}
		newNeighborhoodObject.name = this.state.name
		FixinsActions.createNeighborhood(newNeighborhoodObject)
		this.setState({name: ""})
	}

	render(){
	return(
	<form onSubmit={this.handleSubmit.bind(this)}>
		<div className="input-group">
			Neighborhood name:
		  <input type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)} className="form-control" placeholder="neighborhood name" />
		</div>
	<input className="button btn-danger align-right" type="submit" value="Post"/>
	</form>

		)

	}

}