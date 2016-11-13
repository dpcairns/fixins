import React from "react"
import { getState } from "redux"
import { Link } from "react-router"
import StarRatingComponent from 'react-star-rating-component';
import TopFiveSubNeighborhoods from './utils/TopFiveSubNeighborhoods'
import NewCheckIns from './utils/NewCheckIns'
import TopDishes from './utils/TopDishes'
import GlitterFoods from './utils/GlitterFoods'

export default class Splash extends React.Component{
	constructor(){
		super();
		this.state = {myGif: 0}
	}
	componentDidMount(){
		this.props.initializeUsers();
		this.props.initializeDishes();
		this.props.initializeGenres();
		this.props.initializeSubNeighborhoods();
		this.props.initializeNeighborhoods();
		this.props.initializeReviews();
		this.props.initializeSpots();
		this.props.initializeCheckIns();
		this.props.checkForSession();
		let randA = Math.floor(Math.random()*7)
		this.setState({myGif: randA})
	}
		render(){
			let allSubNeighborhoods = this.props.subNeighborhoods
	    let allUsers = this.props.users
	    let allSpots = this.props.spots
			let jackpotGo = this.props.jackpotGo
			let noDice = this.props.noDice
			let jackpot = this.props.jackpot
			let logout = this.props.logout
		  let allReviews = this.props.allReviews
			let putOneDishInState = this.props.putOneDishInState
			let putOneSpotInState = this.props.putOneSpotInState
			let putOneUserInState = this.props.putOneUserInState
			let putOneSubNeighborhoodInState = this.props.putOneSubNeighborhoodInState


			return(
				<div style={{overflow: "hidden"}}>
				<div className="bg-info" style={{height: "100%", width: "100%", position:"fixed",
																				 backgroundImage: "url(./static/pizza" + this.state.myGif + ".gif)",
																				backgroundSize: "cover", zIndex:"0"}}>
				</div>

		<div className="text-center" style={{overflow: "hidden", zIndex:"2", opacity:"0.9"}}>
			<div className="col-sm-3">
				<TopDishes
				checkIns={this.props.checkIns}
				dishes={this.props.dishes}
				putOneDishInState={putOneDishInState}
				putOneSpotInState={putOneSpotInState}
				reviews={allReviews}
				/>
			</div>

		<div className="col-sm-6">

		<Link to="index/mapPage"> <h1 style={{color:"white"}}> || FIXINS || <br/>
			 || GET STUFT || </h1></Link>

			 		<div className="row">

			 						<TopFiveSubNeighborhoods
									currentUser={this.props.currentUser}
									users={allUsers}
									spots={allSpots}
									putOneSubNeighborhoodInState={putOneSubNeighborhoodInState}
									subNeighborhoods={allSubNeighborhoods}/>
					</div>
					<div className="row">

					<GlitterFoods noDice={noDice} jackpotGo={jackpotGo} jackpot={jackpot}/>


			 		</div>

</div>

		<div className="col-sm-3">
			<NewCheckIns
			checkIns={this.props.checkIns}
			putOneDishInState={putOneDishInState}
			putOneUserInState={putOneUserInState}
			/>
		</div>


		</div>
		</div>
		)

		}
}
