import React from "react"
import * as FixinsActions from "../../actions/FixinsActions"

export default class RemoveButton extends React.Component {

	edit(){
		if (this.props.type==="User"){
			
	}
		else if	(this.props.type==="Neighborhood"){
		FixinsActions.findAndChangeNeighborhood(changedNeighborhood)
	}
		else if	(this.props.type==="Dish"){
		FixinsActions.findAndChangeDish(changedDish)
	}
		else if (this.props.type==="Spot"){
		FixinsActions.findAndChangeSpot(changedSpot)
	}
		else if	(this.props.type==="Review"){
		FixinsActions.findAndChangeReview(changedReview)
	}
		else if	(this.props.type==="CheckIn"){
		FixinsActions.findAndChangeCheckIn(changedCheckIn)
	}
		else if	(this.props.type==="SubNeighborhood"){
		FixinsActions.findAndChangeSubNeighborhood(changedSubNeighborhood)
	}
		else if	(this.props.type==="Genre"){
		FixinsActions.findAnfChangeGenre(changedGenre)
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