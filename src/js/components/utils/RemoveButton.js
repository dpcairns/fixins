import React from "react"
import * as FixinsActions from "../../actions/FixinsActions"

export default class RemoveButton extends React.Component {

	remove(){
		if (this.props.type==="User"){
		FixinsActions.removeUser(this.props.id)
	}
		else if	(this.props.type==="Neighborhood"){
		FixinsActions.removeNeighborhood(this.props.id)
	}
		else if	(this.props.type==="Dish"){
		FixinsActions.removeDish(this.props.id)
	}
		else if (this.props.type==="Spot"){
		FixinsActions.removeSpot(this.props.id)
	}
		else if	(this.props.type==="Review"){
		FixinsActions.removeReview(this.props.id)
	}
		else if	(this.props.type==="CheckIn"){
		FixinsActions.removeCheckIn(this.props.id)
	}
		else if	(this.props.type==="SubNeighborhood"){
		FixinsActions.removeSubNeighborhood(this.props.id)
	}
		else if	(this.props.type==="Genre"){
		FixinsActions.removeGenre(this.props.id)
	}
		else {
			console.log("no type specified to delete")
		}
	}
	render(){
	return(
			<button onClick={this.remove.bind(this)} className="btn btn-danger btn-xs">
					remove
			</button>
		)
	}
}