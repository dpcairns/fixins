import React from "react"
import UserForm from "./UserForm"
import UserList from "./UserList"
import SpotForm from "./SpotForm"
import SpotList from "./SpotList"
import DishForm from "./DishForm"
import DishList from "./DishList"
import ReviewForm from "./ReviewForm"
import ReviewList from "./ReviewList"
import CheckInForm from "./CheckInForm"
import CheckInList from "./CheckInList"
import NeighborhoodForm from "./NeighborhoodForm"
import NeighborhoodList from "./NeighborhoodList"
import SubNeighborhoodForm from "./SubNeighborhoodForm"
import SubNeighborhoodList from "./SubNeighborhoodList"
import FixinsActions from "../../actions/FixinsActions"


export default class Admin extends React.Component{
	constructor(){
		super()
		this.state={
			allUsers: this.goFindUsers().bind(this),
			allNeighborhoods: this.goFindNeighborhoods().bind(this),
			allSubNeighborhoods: this.goFindSubNeighborhoods().bind(this),
			allGenres: this.goFindGenres().bind(this),
			allDishes: this.goFindDishes().bind(this),
			allSpots: this.goFindSpots().bind(this),
			allCheckIns: this.goFindCheckins().bind(this)
		}
	}
	goFindNeighborhoods(){
		this.setState(
			{
				allNeighborhoods: FixinsActions.getNeighborhoodsFromStore()
			})
		}

	goFindSubNeighborhoods(){
		this.setState(
			{
				allSubNeighborhoods: FixinsActions.getSubNeighborhoodsFromStore()
			})
		}

	goFindGenres(){
		this.setState(
			{
				allGenres: FixinsActions.getGenresFromStore()
			})
		}

	goFindDishes(){
		this.setState(
			{
				allDishes: FixinsActions.getDishesFromStore()
			})
		}


	goFindSpots(){
		this.setState(
			{
				allSpots: FixinsActions.getSpotsFromStore()
			})
		}

	goFindCheckins(){
		this.setState(
			{
				allCheckins: FixinsActions.getCheckInsFromStore()
			})
		}


	goFindReviews(){
		this.setState(
			{
				allReviews: FixinsActions.getReviewsFromStore()
			})
		}

	componentWillMount(){
		FixinsStore.on("changedReviews", this.goFindReviews.bind(this))
		FixinsStore.on("changedUsers", this.goFindUsers.bind(this))
		FixinsStore.on("changedSubNeighborhoods", this.goFindSubNeighborhoods.bind(this))
		FixinsStore.on("changedNeighborhoods", this.goFindNeighborhoods.bind(this))
		FixinsStore.on("changedDishes", this.goFindDishes.bind(this))
		FixinsStore.on("changedSpots", this.goFindSpots.bind(this))
		FixinsStore.on("changedCheckins", this.goFindCheckIns.bind(this))
	}

	componentWillUnmount(){
		FixinsStore.removeListener("changedReviews", this.goFindReviews.bind(this))
		FixinsStore.removeListener("changedUsers", this.goFindUsers.bind(this))
		FixinsStore.removeListener("changedSubNeighborhoods", this.goFindSubNeighborhoods.bind(this))
		FixinsStore.removeListener("changedNeighborhoods", this.goFindNeighborhoods.bind(this))
		FixinsStore.removeListener("changedDishes", this.goFindDishes.bind(this))
		FixinsStore.removeListener("changedSpots", this.goFindSpots.bind(this))
		FixinsStore.removeListener("changedCheckins", this.goFindCheckIns.bind(this))
	}

	render(){

	return(
		<div>
			<div class="container">
				<div class="admin-user-box row">
					<div class="admin-user-input col-md-6">
						<UserForm allNeighborhoods={this.state.allNeighborhoods} />
					</div>
					<div class="admin-user-output col-md-6">
						<UserList allUsers={this.state.allUsers}/>
					</div>
				</div>

				<div class="admin-spot-box row">
					<div class="admin-spot-input col-md-6">
						<SpotForm allGenres={this.state.allGenres} 
								allNeighborhoods={this.state.allNeighborhoods} 
								allSubNeighborhoods={this.state.allSubNeighborhoods} />
					</div>
					<div class="admin-spot-output col-md-6">
						<SpotList allSpots={this.state.allSpots} />
					</div>
				</div>
			
				<div class="admin-dish-box row">

					<div class="admin-dish-input col-md-6">
						<DishForm allSpots={this.state.allSpots} 
									allGenres={this.state.allGenres} />
					</div>
					<div class="admin-dish-output col-md-6">
						<DishList allDishes={this.state.allDishes} />
					</div>

				</div>

				<div class="admin-genres-box row">
					<div class="admin-genres-input col-md-6">
						<GenresForm />
					</div>

					<div class="admin-genres-output col-md-6">
						<GenresList allGenres={this.state.allGenres} />
					</div>
				</div>
				
				<div class="admin-review-box row">
					<div class="admin-review-input col-md-6">
						<ReviewForm allDishes={this.state.allDishes} 
						allSpots={this.state.allSpots}/>
					</div>
					<div class="admin-review-output col-md-6">
						<ReviewList allReviews={this.state.allReviews} />
					</div>
				</div>
				
				<div class="admin-checkIn-box row">
					<div class="admin-checkIn-input col-md-6">
						<CheckInForm allSpots={this.state.allSpots} allDishes={this.state.allDishes}/>
					</div>
					<div class="admin-checkIn-output col-md-6">
						<CheckInList allCheckIns={this.state.allCheckIns}/>
					</div>
				</div>
				
				<div class="admin-neighborhood-box row">
					<div class="admin-neighborhood-input col-md-6">
						<NeighborhoodForm />
					</div>

					<div class="admin-neighborhood-output col-md-6">
						<NeighborhoodList allNeighborhoods={this.state.allNeighborhoods} />
					</div>
				</div>

				<div class="admin-subNeighborhood-box row">
					<div class="admin-subNeighborhood-input col-md-6">
						<SubNeighborhoodForm />
					</div>

					<div class="admin-subNeighborhood-output col-md-6">
						<SubNeighborhoodList allSubNeighborhoods={this.state.allSubNeighborhoods} />
					</div>
				</div>
			</div>
		</div>
			
		)
	}
}
