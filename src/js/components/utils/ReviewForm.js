import React from "react"
import CustomDropdown from "./CustomDropdown"

export default class ReviewForm extends React.Component{
	constructor(){
		super();
		this.state = {
			reviewed_dish: '',
			review_user: '',
			stars: '',
			words: ''
		}
	}

	handleDishChange(e){
		this.setState({reviewed_dish: e.target.value})
	}

	handleWordsChange(e){
		this.setState({words: e.target.value})
	}

	handleUserChange(e){
		this.setState({review_user: e.target.value})
	}

	handleStarsChange(e){
		this.setState({stars: e.target.value})
	}


	handleSubmit(e){
		e.preventDefault();
		var newReviewObject = {}
		newReviewObject.reviewed_dish = this.state.reviewed_dish
		newReviewObject.words = this.state.words
		newReviewObject.stars = this.state.stars
		newReviewObject.review_user = this.state.review_user
		this.props.createReview(newReviewObject)
		this.setState({reviewed_dish: '',
			review_user: '',
			stars: '',
			words: ''})
	}

	render(){
	return(
		<div>
	<form onSubmit={this.handleSubmit.bind(this)}>
		<div className="input-group">
			Words:
		  <input
		  type="text"
		  value={this.state.words}
		  onChange={this.handleWordsChange.bind(this)}
		  className="form-control"
		  placeholder="words of review"/>
		</div>

		<div className="input-group">
			Number of stars:
		  <input type="number" min="0" max="5"
		  	value={this.state.stars}
		  	onChange={this.handleStarsChange.bind(this)}
		  	className="form-control" />
		</div>
	 <div className="input-group">
					Dish reviewed:
					<CustomDropdown
					setValueTo={this.state.reviewed_dish}
					onchange2={this.handleDishChange.bind(this)}
					data={this.props.allDishes}
					nameName="dish_name" />
				</div>
		<div className="input-group">
					User who wrote it:
					<CustomDropdown
					setValueTo={this.state.review_user}
					onchange2={this.handleUserChange.bind(this)}
					data={this.props.allUsers}
					nameName="username" />
				</div>



	<input className="button btn-danger align-right" type="submit" value="Post"/>
	</form>
</div>

		)

	}

}
