import React from "react"
import { Link } from "react-router"

export default class Splash extends React.Component{

	componentDidMount(){
		console.log("Splash.componentWillMount() says")
		FixinActions.initializeUsers();
		FixinActions.initializeDishes();
		FixinActions.initializeGenres();
		FixinActions.initializeSubNeighborhoods();
		FixinActions.initializeNeighborhoods();
		FixinActions.initializeReviews();
		FixinActions.initializeSpots();
		FixinActions.initializeCheckIns();
		console.log("1) Splash page tried to initialize the data")
	}

		render(){
			<h2>Hello and welcome to fixins!</h2>
			<h2><Link to="index">for now, just click here to go to the admin page</Link></h2>
		}
}