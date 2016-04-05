import React from "react"
import CustomDropdown from "./CustomDropdown"

export default class SubNeighborhoodForm extends React.Component{
	constructor(){
		super();
		this.state = {
			name: '',
			sub_neighborhood_neighborhood: ''
		}
	}

	handleNameChange(e){
		this.setState({name: e.target.value})
	}


	handleSubNeighborhoodChange(e){
		this.setState({sub_neighborhood_neighborhood: e.target.value})
	}

	handleSubmit(){
		e.preventDefault(e);
		var newSubNeighborhoodObject = {}
		newSubNeighborhoodObject.name = this.state.name
		newSubNeighborhoodObject.neighborhood = this.state.sub_neighborhood_neighborhood
		this.props.createSubNeighbodrhood(newSubNeighborhoodObject)
		this.setState({name: ""})
	}

	render(){
	return(
	<form onSubmit={this.handleSubmit.bind(this)}>
		<div className="input-group">
			Sub-Neighborhood name:
		  <input type="text" value={this.state.name}
		  	onChange={this.handleNameChange.bind(this)}
		  	className="form-control"
		  	placeholder="sub-neighborhood name" />
		</div>
		<CustomDropdown setValueTo={this.state.sub_neighborhood_neighborhood}
			onchange2={this.handleSubNeighborhoodChange.bind(this)}
			data={this.props.allNeighborhoods}
			nameName="neighborhood_name" />
	<input className="button btn-danger align-right" type="submit" value="Post"/>
	</form>

		)

	}

}
