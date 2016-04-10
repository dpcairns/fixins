import React from "react"
import { getState } from "redux"
import { Link } from "react-router"

export default class Splash extends React.Component{

	componentDidMount(){
		this.props.initializeUsers();
		this.props.initializeDishes();
		this.props.initializeGenres();
		this.props.initializeSubNeighborhoods();
		this.props.initializeNeighborhoods();
		this.props.initializeReviews();
		this.props.initializeSpots();
		this.props.initializeCheckIns();
	}

		render(){
			return(
		<div className="bg-success">
			<h2>Hello and welcome to fixins!</h2>
			<h2><Link to="index">for now, just click here to go to the admin page</Link></h2>
			<h2><Link to="index/mapPage">or click here to see all the data on a map</Link></h2>
			<h2><Link to="index/login">or just like maybe ever click here to login</Link></h2>

		</div>
		)
		}
}
