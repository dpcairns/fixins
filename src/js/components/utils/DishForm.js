import React from "react"
import CustomDropdown from "./CustomDropdown"
import { Link } from 'react-router'

export default class DishForm extends React.Component{
	constructor(){
		super();
		this.state = {
			name: '',
			calories: '',
			price: '',
			blurb: '',
			genres: '',
			dishFailureStyles: {display: "none"},
			dishSuccessStyles: {display: "none"}
		}
		}

		showDishFailure(){
			this.setState({
				dishSuccessStyles: {
					display: "none"
				},
				dishFailureStyles: {
				display: "block",
				background: '#FF6666',
				height: '50px',
				width: '100%'
			}
		})
		}


		showDishSuccess(){
			this.setState({
				dishFailureStyles: {display: "none"},
				dishSuccessStyles: {
				display: "block",
				background: '#98FB98',
				height: '50px',
				width: '100%'
			}
		})

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


	handleSubmit(e){
		e.preventDefault();
		var newDishObject = {}
		newDishObject.name = this.state.name
		newDishObject.calories = this.state.calories
		newDishObject.price = this.state.price
		newDishObject.spot = this.props.thisSpot
		newDishObject.blurb = this.state.blurb
		if(newDishObject.blurb.length<1 || newDishObject.price<1 || newDishObject.calories<1 ){
			this.showDishFailure();
		}
		else{
			this.props.createDish(newDishObject)
			this.showDishSuccess();
		}
		this.setState({name: "", calories: "", price: "", blurb: '', genres: ''})
	}

	render(){

		let spotId = this.props.thisSpot._id
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


	<input className="button btn-danger align-right" type="submit" value="Post"/>
	</form>
	<div style={this.state.dishFailureStyles}><h2>Dish failed. Try again and do something different.</h2></div>
	<div style={this.state.dishSuccessStyles}><h2>Dish added! Click here to <Link to={`dish/${spotId}`}> go to the page for this dish</Link>.</h2>.</div>

</div>

		)

	}

}
