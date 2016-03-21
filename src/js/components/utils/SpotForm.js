import React from "react"
import CustomDropdown from "./CustomDropdown"
import * as FixinsActions from "../../actions/FixinsActions"

export default class SpotForm extends React.Component{
	constructor(){
		super();
		this.state = {
			name: '',
			blurb: '',
			genres: '',
			coordinates: '',
			neighborhood: '',
			subNeighborhood: '',
		}
	}

	handleNameChange(e){
	this.setState({name: e.target.value})
	}

	handleBlurbChange(e){
		this.setState({blurb: e.target.value})
	}

	handleGenresChange(e){
		this.setState({genres: e.target.value})
	}	

	handleCoordinatesChange(e){
		this.setState({coordinates: e.target.value})
	}	

	handleNeighborhoodChange(e){
		this.setState({neighborhood: e.target.value})
	}	

	handleSubNeighborhoodChange(e){
		this.setState({subNeighborhood: e.target.value})
	}

	handleSubmit(e){
		e.preventDefault();
		var newSpotObject = {}
		newSpotObject.name = this.state.name
		newSpotObject.blurb = this.state.blurb
		newSpotObject.coordinates = this.state.coordinates
		newSpotObject.neighborhood = this.state.neighborhood
		newSpotObject.subNeighborhood = this.state.subNeighborhood
		newSpotObject.genres = this.state.genres
		FixinsActions.createSpot(newSpotObject)
		this.setState({username: "", blurb: "", genres: "", coordinates: "", neighborhood: '', subNeighborhood: ''})
	}

	render(){
	return(
		<div>
		<form onSubmit={this.handleSubmit.bind(this)}>

		<div className="input-group">
			Spot name:
		  <input type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)} className="form-control" placeholder="spot name" />
		</div>
		<div className="input-group">
			Blurb:
		  <input type="text" value={this.state.blurb} onChange={this.handleBlurbChange.bind(this)} className="form-control" placeholder="spot blurb" />
		</div>
		<div className="input-group">
			Genres:
			<CustomDropdown setValueTo={this.state.genres} onChange={this.handleGenresChange.bind(this)} data={this.props.allGenres} nameName="genre_name" />
		</div>
		<div className="input-group">
			Neighborhood:
			<CustomDropdown setValueTo={this.state.neighborhood} onChange={this.handleNeighborhoodChange.bind(this)} data={this.props.allNeighborhoods} nameName="neighborhood_name" />
		</div>
		<div className="input-group">
			subNeighborhood:
			<CustomDropdown setValueTo={this.state.subNeighborhood} onChange={this.handleSubNeighborhoodChange.bind(this)} data={this.props.allSubNeighborhoods} nameName="subNeighborhood_name" />
		</div>
	<input className="button btn-danger align-right" type="submit" value="Post"/>
	</form>
</div>


		)

	}

}