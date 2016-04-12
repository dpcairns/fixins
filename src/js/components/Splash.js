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
		<div className="bg-success container text-center" style={{marginTop:"10%", borderRadius:"15px"}}>
			<h2>Hello and welcome to fixins!</h2>
			<h2><Link to="index">click here to go to the (now kind of broken) admin page</Link></h2>
			<h2>or</h2>
			<h2><Link to="index/myDashboard">click here to pretend to be a user</Link></h2>

		</div>
		)
		}
}
