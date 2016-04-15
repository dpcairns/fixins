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
			let myGif = ""
			let myGlitterFood = ""
			let myOtherGlitterFood = ""
			let jackpot = this.props.jackpot
			let jackpotStyles = {display: "none", textDecoration: "none", zIndex:"5", position: "fixed", marginLeft: "130px", fontSize: "7em", marginTop: "-230px"}
			let putOneDishInState = this.props.putOneDishInState
			let putOneSpotInState = this.props.putOneSpotInState
			let putOneUserInState = this.props.putOneUserInState
			let putOneSubNeighborhoodInState = this.props.putOneSubNeighborhoodInState
			let checkInBoxStyle = {padding: "10px", maxWidth:"300px", margin:"0 auto", height: "100%", background:"pink"}
			let dishesBoxStyle = {padding: "10px", maxWidth:"300px", margin:"0 auto", height: "100%", background:"lightblue"}
			let topFiveStyle = {overflow: "hidden", height:"220px", paddingTop: "1px", paddingLeft: "4px", paddingRight: "4px", textAlign: "center", marginBottom: "20px", borderRadius: "15px", background:"#ffd281"}
			let topFiveDishNodes = []
			let recentCheckInNodes = []
			let topFiveSubNeighborhoodNodes = []

			if(this.props.subNeighborhoods.length>5){
				let itemBoxStyle = {margin:"2px",maxWidth:"150px",padding:"5px",float:"left",textAlign:"center", background:"#BDA0CB", borderRadius:"10px"}
				let allSubNeighborhoods = this.props.subNeighborhoods
				let allUsers = this.props.users
				let allSpots = this.props.spots
				let sortedSubNeighborhoods = []
				let randA = Math.floor(Math.random()*7)
				let randB = Math.floor(Math.random()*5)
				let randC = Math.floor(Math.random()*5)
				myGif = "url(./static/pizza" + randA + ".gif)"
				myGlitterFood = "./static/glitterFood" + randB + ".gif"
				myOtherGlitterFood = "./static/glitterFood" + randC + ".gif"
				if(randB === randC){
					jackpot()
					jackpotStyles.display = "block"
				}

				allSubNeighborhoods.forEach(function(subNeighborhood){

					function userFilter(user){return (subNeighborhood._id === user.user_sub_neighborhood._id )}
					let thisManyUsers = allUsers.filter(userFilter).length

					function spotFilter(spot){return (spot.spot_subNeighborhood._id === subNeighborhood._id)}
					let thisManySpots = allSpots.filter(spotFilter).length

					sortedSubNeighborhoods.push({
					numberOfUsers: thisManyUsers,
					numberOfSpots: thisManySpots,
					totalItems: (thisManyUsers + thisManySpots),
					_id: subNeighborhood._id,
					subNeighborhood_name: subNeighborhood.subNeighborhood_name,
					})
				})
				sortedSubNeighborhoods.sort(function(subNeighborhoodA, subNeighborhoodB){return subNeighborhoodB.totalItems - subNeighborhoodA.totalItems})
				let topFiveSubNeighborhoods = [sortedSubNeighborhoods[0],sortedSubNeighborhoods[1],sortedSubNeighborhoods[2],sortedSubNeighborhoods[3], sortedSubNeighborhoods[4]]
				topFiveSubNeighborhoodNodes = topFiveSubNeighborhoods.map(function(subNeighborhood){
					return (

						<div style={itemBoxStyle} className="shad2" key={subNeighborhood._id}>
						<Link onClick={putOneSubNeighborhoodInState.bind(this, subNeighborhood._id)} to={`/subNeighborhood/${subNeighborhood._id}`}>
						<h3> {subNeighborhood.subNeighborhood_name + " "}</h3>
						</Link>
						<h4>  <i>{subNeighborhood.numberOfUsers} users <br/>and {subNeighborhood.numberOfSpots} spots!</i></h4>
							</div>
						)
				})


			}


			if (this.props.dishes.length>9){
				let allDishes = this.props.dishes
				let allCheckIns = this.props.checkIns
				let sortedDishes = []
				allDishes.forEach(function(dish){
					function checkInFilter(checkIn){return (checkIn.checkIn_dish._id === dish._id)}
					let thisManyCheckIns = allCheckIns.filter(checkInFilter).length
					sortedDishes.push({
					numberOfCheckIns: thisManyCheckIns,
					_id: dish._id,
					spotId: dish.dish_spot._id,
					nameOfSpot: dish.dish_spot.spot_name,
					name: dish.dish_name})
				})
				sortedDishes.sort(function(dishA, dishB){return dishB.numberOfCheckIns - dishA.numberOfCheckIns})
				let topFiveDishes = [sortedDishes[0],sortedDishes[1],sortedDishes[2],sortedDishes[3], sortedDishes[4], sortedDishes[5], sortedDishes[6], sortedDishes[7]]
				topFiveDishNodes = topFiveDishes.map(function(dish){
					return (<h4 key={dish._id}>
						<Link onClick={putOneDishInState.bind(this, dish._id)} to={`/dish/${dish._id}`}>
						 {dish.name + " "}
						</Link>
						  at
						 <Link to={`/spot/${dish.spotId}`}  onClick={putOneSpotInState.bind(this, dish.spotId)}>
						  {" " + dish.nameOfSpot}
						 </Link>
						  <br/><i> has {dish.numberOfCheckIns} checkIns </i></h4>)
				})

			}


			if (this.props.checkIns.length>12){
			let allCheckIns = this.props.checkIns

			let lastFiveCheckIns = [allCheckIns[allCheckIns.length -1], allCheckIns[allCheckIns.length -2],
																allCheckIns[allCheckIns.length -3], allCheckIns[allCheckIns.length -4],
																allCheckIns[allCheckIns.length -5], allCheckIns[allCheckIns.length -6],
																 allCheckIns[allCheckIns.length -7], allCheckIns[allCheckIns.length -8]]

			recentCheckInNodes = lastFiveCheckIns.map(function(checkIn){

				return (<h4 key={checkIn._id}>
					<Link to={`/user/${checkIn.checkIn_user._id}`} onClick={putOneUserInState.bind(this, checkIn.checkIn_user._id)}>
					{checkIn.checkIn_user.username + " "}
					</Link>
					ate
					<Link onClick={putOneDishInState.bind(this, checkIn.checkIn_dish._id)} to={`/dish/${checkIn.checkIn_dish._id}`}>
					{" " + checkIn.checkIn_dish.dish_name + " "}
					</Link>

					at {" " +checkIn.checkIn_date+ " "} and said "{checkIn.checkIn_blurb}"</h4>)
			})
		}
			return(
				<div>
				<div className="bg-info" style={{height: "100%", width: "100%", position:"fixed", backgroundImage: myGif, backgroundSize: "cover", zIndex:"-1"}}>
				</div>

		<div className="ontainer-fluid text-center" style={{zIndex:"2", opacity:"0.9"}}>
			<div className="col-md-3">
				<div style={dishesBoxStyle} className="shadow-container">
				<h3>top dishes</h3>
				{this.props.dishes.length>5 ? topFiveDishNodes : "never mind"}
				</div>
			</div>

		<div className="col-md-6">



		<Link to="index/myDashboard"> <h1> || FIXINS || <br/>
			 || GET STUFT || </h1></Link>


			 		<div className="row">

			 				<div className="col-md-12">
			 						<div style={topFiveStyle} className="shadow-container">
			 									<h3>top five subNeighborhoods in pdx</h3>
			 									<div className="top-five flex">
			 												{this.props.subNeighborhoods.length>5 ? topFiveSubNeighborhoodNodes : "never mind"}
			 									</div>
			 						</div>
			 				</div>
					</div>
					<div className="row">


							<div className="col-md-2">
									<Link to="index"><img src={myGlitterFood} height="240px" width="400px" style={{marginBottom: "25px", borderRadius:"10px"}}/></Link>
									<div style={jackpotStyles}><a target="_blank" href="http://pizzaparty.party" className="jackpot">JACKPOT</a></div>
									</div>
			 				<div className="col-md-offset-2 col-md-3">
			 					<img src={myOtherGlitterFood} height="240px" width="400px" style={{marginBottom: "25px", borderRadius:"10px"}}/>
			 				</div>


			 		</div>

</div>

		<div className="col-md-3">
			<div className="shadow-container" style={checkInBoxStyle}>
			<h3>checkIn ticker</h3>
			{this.props.checkIns.length>5 ? recentCheckInNodes : "never mind"}
			</div>
		</div>


		</div>
		</div>
		)

		}
}
