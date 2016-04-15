import React from "react"

export default class ApproveButton extends React.Component {

	approve(){
		if (this.props.type==="Dish"){
				let newDishInfo = this.props.item
				if (newDishInfo.approved !== undefined){
				newDishInfo.toggleApproved = !this.props.item.approved
			}
			this.props.findAndChange(newDishInfo)
		}

		else if (this.props.type==="Spot"){
			let newSpotInfo = this.props.item
			if (newSpotInfo.approved !== undefined){
			newSpotInfo.toggleApproved = !this.props.item.approved
		}
			this.props.findAndChange(newSpotInfo)
	}
		else {
			console.log("no type specified to approve")
		}
	}
	render(){
		let approvedStyle = {background: "green"}
		let unapprovedStyle = {background: "red"}

	return(
			<button onClick={this.approve.bind(this)} style={this.props.approved ? approvedStyle: unapprovedStyle} className="btn btn-xs">
					<h4>{this.props.approved ? "it's VISIBLE: unapprove this item?" : "it's HIDDEN: approve this item?"}</h4>
			</button>
		)
	}
}
