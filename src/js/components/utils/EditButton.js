import React from "react"

export default class RemoveButton extends React.Component {

	edit(){
		if (this.props.type==="User"){

	}
		else if	(this.props.type==="Neighborhood"){
		this.props.findAndChangeNeighborhood(changedNeighborhood)
	}
		else if	(this.props.type==="Dish"){
		this.props.findAndChangeDish(changedDish)
	}
		else if (this.props.type==="Spot"){
		this.props.findAndChangeSpot(changedSpot)
	}
		else if	(this.props.type==="Review"){
		this.props.findAndChangeReview(changedReview)
	}
		else if	(this.props.type==="CheckIn"){
		this.props.findAndChangeCheckIn(changedCheckIn)
	}
		else if	(this.props.type==="SubNeighborhood"){
		this.props.findAndChangeSubNeighborhood(changedSubNeighborhood)
	}
		else if	(this.props.type==="Genre"){
		this.props.findAnfChangeGenre(changedGenre)
	}
		else {
			console.log("no type specified to modify")
		}
	}
	render(){
	return(
			<button onClick={this.edit.bind(this)} className="btn btn-info btn-xs">
					edit
			</button>
		)
	}
}
