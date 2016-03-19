import React from "react"
import CustomDropdown from "./CustomDropdown"

export default class SpotForm extends React.Component{
	constructor(){
		super();
		this.state = {
			name: '',
			spot: '',
			calories: '',
			price: '',
			blurb: '',
			genres: ''
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

	handleCaloriesChange(){
		this.setState({calories: e.target.value})
	}	

	handlePriceChange(){
		this.setState({price: e.target.value})
	}	

	handleSpotChange(){
		this.setState({spot: e.target.value})
	}

	handleSubmit(){
		e.preventDefault();
		var newDishObject = {}
		newDishObject.name = this.state.name
		newDishObject.blurb = this.state.blurb
		newDishObject.genres = this.state.genres
		newDishObject.calories = this.state.calories
		newDishObject.price = this.state.price
		newDishObject.spot = this.state.spot
		FixinActions.createDish(newDishObject)
		this.setState({name: "", spot: "", calories: "", price: "", blurb: '', genres: ''})
	}

	render(){
	return(
		<div>
	<form onSubmit={this.handleSubmit.bind(this)}>
		<div class="input-group">
			Dish name:
		  <input type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)} class="form-control" placeholder="dish name"/>
		</div>
		<div class="input-group">
			Blurb:
		  <input type="text" value={this.state.blurb} onChange={this.handleBlurbChange.bind(this)} class="form-control" placeholder="dish blurb"/>
		</div>
		<div class="input-group">
			Calories:
		  <input type="text" value={this.state.calories} onChange={this.handleCaloriesChange.bind(this)} class="form-control" placeholder="dish calories"/>
		</div>
		<div class="input-group">
			Price:
		  <input type="text" value={this.state.price} onChange={this.handlePriceChange.bind(this)} class="form-control" placeholder="dish price"/>
		</div>
		<div class="input-group">
			Genres:
			<CustomDropdown setValueTo={this.state.genres} onChange={this.handleGenresChange.bind(this)} data={this.props.allGenres} nameName="genre_name" />
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