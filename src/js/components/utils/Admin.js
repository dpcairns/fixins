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
import GenreForm from "./GenreForm"
import GenreList from "./GenreList"
import NeighborhoodForm from "./NeighborhoodForm"
import NeighborhoodList from "./NeighborhoodList"
import SubNeighborhoodForm from "./SubNeighborhoodForm"
import SubNeighborhoodList from "./SubNeighborhoodList"
import * as FixinsActions from "../../actions/FixinsActions"
import FixinsStore from "../../stores/FixinsStore"

export default class Admin extends React.Component{
	constructor(){
		super()
		this.state={
			allUsers: [],
			allNeighborhoods: [],
			allSubNeighborhoods: [],
			allReviews: [],
			allGenres: [],
			allDishes: [],
			allSpots: [],
			allCheckIns: []
		}
	}
	goFindNeighborhoods(){
		this.setState(
			{
				allNeighborhoods: FixinsStore.getNeighborhoodsFromStore()
			})
		}

	goFindSubNeighborhoods(){
		this.setState(
			{
				allSubNeighborhoods: FixinsStore.getSubNeighborhoodsFromStore()
			})
		}

	goFindGenres(){
		this.setState(
			{
				allGenres: FixinsStore.getGenresFromStore()
			})
		}

	goFindDishes(){
		this.setState(
			{
				allDishes: FixinsStore.getDishesFromStore()
			})
		}


	goFindSpots(){
		this.setState(
			{
				allSpots: FixinsStore.getSpotsFromStore()
			}

			)

		}

	goFindCheckIns(){
		this.setState(
			{
				allCheckIns: FixinsStore.getCheckInsFromStore()
			})
		}


	goFindUsers(){
		this.setState(
			{
				allUsers: FixinsStore.getUsersFromStore()
			}
			)
		}



	goFindReviews(){
		this.setState(
			{
				allReviews: FixinsStore.getReviewsFromStore()
			})
		}

	goFindEverything(){
		this.setState(
			{
				allUsers: FixinsStore.getUsersFromStore(),
				allSpots: FixinsStore.getSpotsFromStore(),
				allCheckIns: FixinsStore.getCheckInsFromStore(),
				allDishes: FixinsStore.getDishesFromStore(),
				allSubNeighborhoods: FixinsStore.getSubNeighborhoodsFromStore(),
				allNeighborhoods: FixinsStore.getNeighborhoodsFromStore(),
				allReviews: FixinsStore.getReviewsFromStore(),
				allGenres: FixinsStore.getGenresFromStore()
			}

		)
	}

	componentDidMount(){
		this.goFindEverything()
	}

	componentWillMount(){
		FixinsStore.on("changedReviews", this.goFindReviews.bind(this))
		FixinsStore.on("changedUsers", this.goFindUsers.bind(this))
		FixinsStore.on("changedSubNeighborhoods", this.goFindSubNeighborhoods.bind(this))
		FixinsStore.on("changedNeighborhoods", this.goFindNeighborhoods.bind(this))
		FixinsStore.on("changedDishes", this.goFindDishes.bind(this))
		FixinsStore.on("changedSpots", this.goFindSpots.bind(this))
		FixinsStore.on("changedCheckIns", this.goFindCheckIns.bind(this))
		FixinsStore.on("changedGenres", this.goFindGenres.bind(this))

	}

	componentWillUnmount(){
		FixinsStore.removeListener("changedReviews", this.goFindReviews.bind(this))
		FixinsStore.removeListener("changedUsers", this.goFindUsers.bind(this))
		FixinsStore.removeListener("changedSubNeighborhoods", this.goFindSubNeighborhoods.bind(this))
		FixinsStore.removeListener("changedNeighborhoods", this.goFindNeighborhoods.bind(this))
		FixinsStore.removeListener("changedDishes", this.goFindDishes.bind(this))
		FixinsStore.removeListener("changedSpots", this.goFindSpots.bind(this))
		FixinsStore.removeListener("changedCheckIns", this.goFindCheckIns.bind(this))
		FixinsStore.removeListener("changedGenres", this.goFindGenres.bind(this))
	}

	render(){
	return(
		<div>
			<div className="container">


				<div className="admin-dish-box row">

					<div className="admin-dish-input col-md-4">
									<h2>New Dish</h2>

						<DishForm 
						allSpots={this.state.allSpots} 
									allGenres={this.state.allGenres} />
					</div>
					<div className="admin-dish-output col-md-8">
									<h2>All Dishes</h2>

						<DishList 
						allDishes={this.state.allDishes} />
					</div>

				</div>

			<hr />
				<div className="admin-user-box row">
					<div className="admin-user-input col-md-4">
									<h2>New User</h2>
						<UserForm 
						allSubNeighborhoods={this.state.allSubNeighborhoods} />
					</div>
					<div className="admin-user-output col-md-8">
								<h2>All Users</h2>

						<UserList 
						allUsers={this.state.allUsers}
						allCheckIns={this.state.allCheckIns}
						allReviews={this.state.allReviews}
						allDishes={this.state.allDishes}
						allSubNeighborhoods={this.state.allSubNeighborhoods}						/>
					</div>
				</div>
			
			<hr />

				<div className="admin-spot-box row">
					<div className="admin-spot-input col-md-4">
									<h2>New Spot</h2>

						<SpotForm 
						allGenres={this.state.allGenres} 
						allSubNeighborhoods={this.state.allSubNeighborhoods} />
					</div>
					<div className="admin-spot-output col-md-8">
								<h2>All Spots</h2>

						<SpotList 
						allSpots={this.state.allSpots}
						allSubNeighborhoods={this.state.allSubNeighborhoods}
						allReviews={this.state.allReviews}
						allGenres={this.state.allGenres}
						allDishes={this.state.allDishes}/>

					</div>
				</div>
			
			<hr />

				<div className="admin-genre-box row">
					<div className="admin-genre-input col-md-4">
									<h2>New Genre</h2>

						<GenreForm />
					</div>

					<div className="admin-genre-output col-md-8">
							<h2>All Genres</h2>

						<GenreList 
						allGenres={this.state.allGenres} />
					</div>
				</div>
				
			<hr />

				<div className="admin-review-box row">
					<div className="admin-review-input col-md-4">
									<h2>New Review</h2>

						<ReviewForm 
						allDishes={this.state.allDishes} 
						allUsers={this.state.allUsers}/>
					</div>
					<div className="admin-review-output col-md-8">
							<h2>All Reviews</h2>

						<ReviewList 
						allReviews={this.state.allReviews} />
					</div>
				</div>

			<hr />

				<div className="admin-checkIn-box row">
					<div className="admin-checkIn-input col-md-4">
									<h2>New CheckIn</h2>

						<CheckInForm
						 allUsers={this.state.allUsers} 
						allDishes={this.state.allDishes}/>
					</div>
					<div className="admin-checkIn-output col-md-8">
									<h2>All CheckIns</h2>

						<CheckInList 
						allCheckIns={this.state.allCheckIns}/>
					</div>
				</div>

			<hr />
				
				<div className="admin-neighborhood-box row">
					<div className="admin-neighborhood-input col-md-4">
									<h2>New Neighborhood</h2>

						<NeighborhoodForm />
					</div>

					<div className="admin-neighborhood-output col-md-8">
									<h2>All Neighborhoods</h2>

						<NeighborhoodList 
						allNeighborhoods={this.state.allNeighborhoods} />
					</div>
				</div>

			<hr />

				<div className="admin-subNeighborhood-box row">
					<div className="admin-subNeighborhood-input col-md-4">
									<h2>New Sub-Neighborhood</h2>

						<SubNeighborhoodForm 
						allNeighborhoods={this.state.allNeighborhoods}/>
					</div>

					<div className="admin-subNeighborhood-output col-md-8">
									<h2>All Sub-Neighborhoods</h2>					
						<SubNeighborhoodList
						 allSubNeighborhoods={this.state.allSubNeighborhoods} />
					</div>
				</div>
			</div>
		</div>
			
		)
	}
}
