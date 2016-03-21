import React from "react"
import CustomDropdown from "./CustomDropdown"
import * as FixinsActions from "../../actions/FixinsActions"

export default class ReviewForm extends React.Component{
	constructor(){
		super();
		this.state = {
			item_type: '',
			item_name: '',
			stars: '',
			words: ''
		}
	}

	handleNameChange(e){
		this.setState({item_name: e.target.value})
	}

	handleWordsChange(e){
		this.setState({words: e.target.value})
	}

	handleTypeChange(e){
		this.setState({item_type: e.target.value})
	}	

	handleStarsChange(e){
		this.setState({calories: e.target.value})
	}	


	handleSubmit(e){
		e.preventDefault();
		var newReviewObject = {}
		newReviewObject.item_reviewed = this.state.item_name
		newReviewObject.words = this.state.words
		newReviewObject.stars = this.state.stars
		newReviewObject.item_type = this.state.item_type
		FixinsActions.createReview(newReviewObject)
		this.setState({item_name: "", item_type: "", stars: "", words: ""})
	}

	render(){
	return(
		<div>
	<form onSubmit={this.handleSubmit.bind(this)}>
		<div className="input-group">
			Words:
		  <input type="text" value={this.state.words} onChange={this.handleWordsChange.bind(this)} className="form-control" placeholder="words of review"/>
		</div>

		<div className="input-group">
			Number of stars:
		  <input type="number" min="0" max="5" value={this.state.stars} onChange={this.handleStarsChange.bind(this)} className="form-control" />
		</div>

		///missing
	

		
		}

	<input className="button btn-danger align-right" type="submit" value="Post"/>
	</form>
</div>

		)

	}

}




/*
	

		{
		 if(this.state.item_type==="spot"){
		 	return(
				<div className="input-group">
					Spot reviewed:
					<CustomDropdown setValueTo={this.state.spot} onChange={this.handleNameChange.bind(this)} data={this.props.allSpots} nameName="spot_name" />
				</div>
			 		)

						}
		 else{
			return(
				<div className="input-group">
					Dish reviewed:
					<CustomDropdown setValueTo={this.state.dish} onChange={this.handleNameChange.bind(this)} data={this.props.allDishes} nameName="dish_name" />
				</div>

				)
						}
*/