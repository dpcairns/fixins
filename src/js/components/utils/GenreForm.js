import React from "react"
import CustomDropdown from "./CustomDropdown"
import * as FixinsActions from "../../actions/FixinsActions"

export default class GenreForm extends React.Component{
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
		e.preventDefault();
		var newGenreObject = {}
		newGenreObject.name = this.state.name
		FixinsActions.createGenre(newGenreObject)
		this.setState({name: ""})
	}

	render(){
	return(
	<form onSubmit={this.handleSubmit.bind(this)}>
		<div className="input-group">
			Genre name:
		  <input type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)} className="form-control" placeholder="genre name" />
		</div>
	<input className="button btn-danger align-right" type="submit" value="Post"/>
	</form>

		)

	}

}