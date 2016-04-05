import React from "react"
import CustomDropdown from "./CustomDropdown"

export default class SpotEditForm extends React.Component{
	constructor(){
		super();
		this.state = {
				newName: "",
				newSubNeighborhood: "",
				newGenre: "",
				newDish:"",
				newBlurb:"",
				newCoordinates:"",
				newReview:""
		}
	}

	handleNameChange(e){
		this.setState({newName: e.target.value})
	}

	handleBlurbChange(e){
		this.setState({newBlurb: e.target.value})
	}

	handleSubNeighborhoodChange(e){
		this.setState({newSubNeighborhood: e.target.value})
	}

	handleReviewChange(e){
		this.setState({newReview: e.target.value})
	}

	handleGenreChange(e){
		this.setState({newGenre: e.target.value})
	}

	handleDishChange(e){
		this.setState({newDish: e.target.value})
	}

	handleCoordinatesChange(e){
		this.setState({newCoordinates: e.target.value})
	}

	handleSubmit(e){
		e.preventDefault();
		var newSpotInfo = {}
		newSpotInfo._id = this.props.spotID
		newSpotInfo.newName = this.state.newName
		newSpotInfo.newSubNeighborhood = this.state.newSubNeighborhood
		newSpotInfo.newDish = this.state.newDish
		newSpotInfo.newGenre = this.state.newGenre
		newSpotInfo.newBlurb = this.state.newBlurb
		newSpotInfo.newCoordinates = this.state.newCoordinates
		console.log("trying to handleSubmit...")
		this.props.findAndChangeSpot(newSpotInfo)
		this.setState({		newName: "",
							newSubNeighborhood: "",
							newGenre: "",
							newBlurb:"",
							newCoordinates:""
							})
		}

	render(){
	return(
		<div>
				<form onSubmit={this.handleSubmit.bind(this)}>

		<div className="input-group">
			Update Spot Name:
		  <input type="text" value={this.state.newName} onChange={this.handleNameChange.bind(this)} className="form-control" placeholder="spot name"/>
		</div>
		<div className="input-group">
			Update Blurb:
		  <input type="text" value={this.state.newBlurb} onChange={this.handleBlurbChange.bind(this)} className="form-control" placeholder="spot blurb"/>
		</div>
		<div className="input-group">
			Update Coordinates:
		  <input type="text" value={this.state.newCoordinates} onChange={this.handleCoordinatesChange.bind(this)} className="form-control" placeholder="spot coordinates"/>
		</div>
		<div className="input-group">
			Add a new Dish:
			<CustomDropdown setValueTo={this.state.newDish}
					onchange2={this.handleDishChange.bind(this)}
					data={this.props.allDishes}
					nameName="dish_name" />
		</div>
		<div className="input-group">
			Update Sub-Neighborhood:
			<CustomDropdown setValueTo={this.state.newSubNeighborhood}
					onchange2={this.handleSubNeighborhoodChange.bind(this)}
					data={this.props.allSubNeighborhoods}
					nameName="subNeighborhood_name" />
		</div>
		<div className="input-group">
			Add a new Genre:
			<CustomDropdown setValueTo={this.state.newGenre}
					onchange2={this.handleGenreChange.bind(this)}
					data={this.props.allGenres}
					nameName="genre_name" />
		</div>

	<input className="button btn-danger align-right" type="submit" value="Update"/>
	</form>
</div>

		)

	}

}
