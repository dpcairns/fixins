import React from "react"
import CustomDropdown from "./CustomDropdown"

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

	handleBlurbChange(){
		this.setState({blurb: e.target.value})
	}

	handleGenresChange(){
		this.setState({genres: e.target.value})
	}	

	handleCoordinatesChange(){
		this.setState({coordinates: e.target.value})
	}	

	handleNeighborhoodChange(){
		this.setState({neighborhood: e.target.value})
	}	

	handleSubNeighborhoodChange(){
		this.setState({subNeighborhood: e.target.value})
	}

	handleSubmit(){
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

		<div class="input-group">
			Spot name:
		  <input type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)} class="form-control" placeholder="spot name" />
		</div>
		<div class="input-group">
			Blurb:
		  <input type="text" value={this.state.blurb} onChange={this.handleBlurbChange.bind(this)} class="form-control" placeholder="spot blurb" />
		</div>
		<div class="input-group">
			Genres:
			<CustomDropdown setValueTo={this.state.genres} onChange={this.handleGenresChange.bind(this)} data={this.props.allGenres} nameName="genre_name" />
		</div>
		<div class="input-group">
			Neighborhood:
			<CustomDropdown setValueTo={this.state.neighborhood} onChange={this.handleNeighborhoodChange.bind(this)} data={this.props.allNeighborhoods} nameName="neighborhood_name" />
		</div>
		<div class="input-group">
			subNeighborhood:
			<CustomDropdown setValueTo={this.state.subNeighborhood} onChange={this.handleSubNeighborhoodChange.bind(this)} data={this.props.allSubNeighborhoods} nameName="subNeighborhood_name" />
		</div>
	<input class="button btn-danger align-right" type="submit" value="Post"/>
	</form>
</div>


		)

	}

}