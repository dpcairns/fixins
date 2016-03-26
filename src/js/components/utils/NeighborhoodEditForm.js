import React from "react"
import CustomDropdown from "./CustomDropdown"
import * as FixinsActions from "../../actions/FixinsActions"

export default class NeighborhoodEditForm extends React.Component{
	constructor(){
		super();
		this.state = {
				newSubNeighborhood: "",
		}
	}

	handleSubNeighborhoodChange(e){
		this.setState({newSubNeighborhood: e.target.value})
	}

	handleUserChange(e){
		this.setState({newUser: e.target.value})
	}


	handleSubmit(e){
		e.preventDefault();
		var NewNeighborhoodInfo = {}
		NewNeighborhoodInfo._id = this.props.neighborhoodID
		NewNeighborhoodInfo.newSubNeighborhood = this.state.newSubNeighborhood
		FixinsActions.findAndChangeNeighborhood(NewNeighborhoodInfo)
		this.setState({
						newSubNeighborhood: "",
						})
		}

	render(){
	return(
		<div>
		<form onSubmit={this.handleSubmit.bind(this)}>
		<div className="input-group">
			Add Sub-Neighborhood:
			<CustomDropdown setValueTo={this.state.newSubNeighborhood} 
					onchange2={this.handleSubNeighborhoodChange.bind(this)} 
					data={this.props.allSubNeighborhoods} 
					nameName="subNeighborhood_name" />
		</div>

	<input className="button btn-danger align-right" type="submit" value="Update"/>
	</form>
</div>

		)

	}

}