import React from "react"

export default class CustomDropdown extends React.Component{
	render(){
		console.log("here are the props for CustomDropdown")
		console.log(this.props)
		var optionNodes = this.props.data.map(function(item){
			return(
			 <option key={item.key} value={item[this.props.nameName]} defaultValue={item[this.props.nameName]} selected disabled>{item[this.props.nameName]}</option>
			 	)
		})

	return(
		<select value={this.props.setValueTo} className="form-control">
		    <option value="" disabled>Pick one</option>
			{optionNodes}
		</select>
		)

	}

}