import React from "react"
import { Link } from "react-router"
import * as FixinsActions from "../actions/FixinsActions"

export default class Splash extends React.Component{

	componentDidMount(){
		console.log("Splash.componentWillMount() says")
		FixinsActions.initializeUsers();
		FixinsActions.initializeDishes();
		FixinsActions.initializeGenres();
		FixinsActions.initializeSubNeighborhoods();
		FixinsActions.initializeNeighborhoods();
		FixinsActions.initializeReviews();
		FixinsActions.initializeSpots();
		FixinsActions.initializeCheckIns();
		console.log("1) Splash page tried to initialize the data")
	}

		render(){
			return(
		<div>
			<h2>Hello and welcome to fixins!</h2>
			<h2><Link to="index">for now, just click here to go to the admin page</Link></h2>
		</div>
		)
		}
}