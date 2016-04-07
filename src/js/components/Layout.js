import React from "react"

export default class Layout extends React.Component{
		render(){
			return(
				<div className="bg-warning">
			<h2>this is the layout page!</h2>
			{this.props.children}
			</div>
			)
		}
}
