import React from "react"

export default class CustomDropdown extends React.Component{
	render(){
		var optionNodes = this.props.data.map(function(item){
			return(
			 <option key={item.key} value={item.{this.props.nameName}} selected disabled>{item.{this.props.nameName}}</option>
			 	)
		})

	return(
		<select value={this.props.setValueTo} class="form-control">
		    <option value="" selected disabled>Pick one</option>
			{optionNodes}
		</select>
		)

	}

}