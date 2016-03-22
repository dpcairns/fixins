import React from "react"
import CustomDropdown from "./CustomDropdown"
import * as FixinsActions from "../../actions/FixinsActions"

export default class DishForm extends React.Component{
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

	handleBlurbChange(e){
		this.setState({blurb: e.target.value})
	}

	handleCaloriesChange(e){
		this.setState({calories: e.target.value})
	}	

	handlePriceChange(e){
		this.setState({price: e.target.value})
	}	

	handleSpotChange(e){
		this.setState({spot: e.target.value})
	}

	handleSubmit(e){
		e.preventDefault();
		var newDishObject = {}
		newDishObject.name = this.state.name
		newDishObject.calories = this.state.calories
		newDishObject.price = this.state.price
		newDishObject.spot = this.state.spot
		FixinsActions.createDish(newDishObject)
		this.setState({name: "", spot: "", calories: "", price: "", blurb: '', genres: ''})
	}

	render(){
	return(
		<div>
	<form onSubmit={this.handleSubmit.bind(this)}>
		<div className="input-group">
			Dish name:
		  <input type="text" 
		  		value={this.state.name} 
		  		onChange={this.handleNameChange.bind(this)} 
		  		className="form-control" 
		  		placeholder="dish name"/>
		</div>
		<div className="input-group">
			Blurb:
		  <input type="text" 
		  		value={this.state.blurb} 
		  		onChange={this.handleBlurbChange.bind(this)} 
		  		className="form-control" 
		  		placeholder="dish blurb"/>
		</div>
		<div className="input-group">
			Calories:
		  <input type="text"
		  		value={this.state.calories} 
		  		onChange={this.handleCaloriesChange.bind(this)} 
		  		className="form-control" 
		  		placeholder="dish calories"/>
		</div>
		<div className="input-group">
			Price:
		  <input type="text" 
		  	value={this.state.price} 
		  	onChange={this.handlePriceChange.bind(this)} 
		  	className="form-control" 	
		  	placeholder="dish price"/>
		</div>
		<div className="input-group">
			Spot:
			<CustomDropdown 
				setValueTo={this.state.spot} 
				onchange2={this.handleSpotChange.bind(this)} 
				data={this.props.allSpots} 
				nameName="spot_name" />
		</div>


	<input className="button btn-danger align-right" type="submit" value="Post"/>
	</form>
</div>

		)

	}

}