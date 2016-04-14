import React from "react"
import CustomDropdown from "./CustomDropdown"
import { Link } from 'react-router'

export default class ReviewForm extends React.Component{
	constructor(){
		super();
		this.state = {
			stars: '',
			words: '',
			reviewFailureStyles: {display: "none"},
			reviewSuccessStyles: {display: "none"}
		}
	}

		showReviewFailure(){
			this.setState({
				reviewSuccessStyles: {
					display: "none"
				},
				reviewFailureStyles: {
				display: "block",
				background: '#FF6666',
				height: '50px',
				width: '100%'
			}
		})
		}


		showReviewSuccess(){
			this.setState({
				reviewFailureStyles: {display: "none"},
				reviewSuccessStyles: {
				display: "block",
				background: '#98FB98',
				height: '50px',
				width: '100%'
			}
		})

		}


	handleWordsChange(e){
		this.setState({words: e.target.value})
	}

	handleStarsChange(e){
		this.setState({stars: e.target.value})
	}


	handleSubmit(e){
		e.preventDefault();
		var newReviewObject = {}
		newReviewObject.reviewed_dish = this.props.thisDish
		newReviewObject.words = this.state.words
		newReviewObject.stars = this.state.stars
		newReviewObject.review_user = this.props.currentUser
		if(newReviewObject.words.length<1 || newReviewObject.stars === null){
			this.showReviewFailure();
		}
		else{
			this.props.createReview(newReviewObject)
			this.showReviewSuccess();
		}
		this.setState({reviewed_dish: '',
			review_user: '',
			stars: '',
			words: ''})
	}

	render(){
	return(
		<div>
	<form style={{width:"300px"}} onSubmit={this.handleSubmit.bind(this)}>
		<div className="input-group">
			Words:
		  <textarea
			rows="5"
			length="300px"
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
	<input className="button btn-danger align-right" type="submit" value="Post"/>
	</form>
	<div style={this.state.reviewFailureStyles}><h2>review failed. Try again and do something different.</h2></div>
	<div style={this.state.reviewSuccessStyles}><h2>review success! Click here to <Link to="index/myDashboard">view your dashboard</Link>.</h2>.</div>

</div>

		)

	}

}
