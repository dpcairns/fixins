import React from "react"
import CustomDropdown from "./CustomDropdown"

export default class GenresForm extends React.Component{
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
		var newGenreObject = {}
		newGenreObject.name = this.state.name
		FixinActions.createGenre(newGenreObject)
		this.setState({name: ""})
	}

	render(){
	return(
	<form onSubmit={this.handleSubmit.bind(this)}>
		<div class="input-group">
			Genre name:
		  <input type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)} class="form-control" placeholder="genre name" />
		</div>
	<input class="button btn-danger align-right" type="submit" value="Post"/>
	</form>

		)

	}

}