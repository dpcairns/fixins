import React from "react"

export default class RemoveButton extends React.Component {

	remove(){
		if (this.props.type==="User"){
		this.props.removeUser(this.props.id)
	}
		else if	(this.props.type==="Neighborhood"){
		this.props.removeNeighborhood(this.props.id)
	}
		else if	(this.props.type==="Dish"){
		this.props.removeDish(this.props.id)
	}
		else if (this.props.type==="Spot"){
		this.props.removeSpot(this.props.id)
	}
		else if	(this.props.type==="Review"){
		this.props.removeReview(this.props.id)
	}
		else if	(this.props.type==="CheckIn"){
		this.props.removeCheckIn(this.props.id)
	}
		else if	(this.props.type==="SubNeighborhood"){
		this.props.removeSubNeighborhood(this.props.id)
	}
		else if	(this.props.type==="Genre"){
		this.props.removeGenre(this.props.id)
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
