import React from "react"
import UserList from "./UserList"
import SpotForm from "./SpotForm"
import SpotList from "./SpotList"
import DishList from "./DishList"
import ReviewList from "./ReviewList"
import CheckInList from "./CheckInList"
import GenreForm from "./GenreForm"
import GenreList from "./GenreList"
import NeighborhoodForm from "./NeighborhoodForm"
import NeighborhoodList from "./NeighborhoodList"
import SubNeighborhoodForm from "./SubNeighborhoodForm"
import SubNeighborhoodList from "./SubNeighborhoodList"
import Links from "./Links"
import * as FixinsActions from "../../actions/FixinsActions"
import FixinsStore from "../../stores/FixinsStore"
import { connect } from 'react-redux'

export default class Admin extends React.Component{
	render(){


	  if(this.props.currentUser === undefined || this.props.currentUser.username !== "admin321"){
		  this.context.router.push('index/login')
		  }


	return(
		<div>
			<div>

							<div className="admin-spot-box row bg-info">
								<div className="admin-spot-output col-md-12">

											<h2>All Spots</h2>



									<SpotList
									allSpots={this.props.allSpots}
									allSubNeighborhoods={this.props.allSubNeighborhoods}
									allReviews={this.props.allReviews}
									allGenres={this.props.allGenres}
									allDishes={this.props.allDishes}
									removeSpot={this.props.removeSpot}
									findAndChangeSpot={this.props.findAndChangeSpot}
									putOneSpotInState={this.props.putOneSpotInState}
									putOneSubNeighborhoodInState={this.props.putOneSubNeighborhoodInState}

									/>

								</div>
							</div>

						<hr />
						<hr />
						<hr />
						<hr />


										<div className="admin-dish-box bg-success row">

											<div className="admin-dish-output col-md-12">
<h1>All dishes</h1>
												<DishList
												allReviews={this.props.allReviews}
												allCheckIns={this.props.allCheckIns}
												allDishes={this.props.allDishes}
												removeDish={this.props.removeDish}
												findAndChangeDish={this.props.findAndChangeDish}
												putOneDishInState={this.props.putOneDishInState}

						 							/>
											</div>

										</div>

										<hr />
										<hr />
										<hr />

				<div className="admin-user-box bg-success row">
				<div className="admin-user-input col-md-4">
					</div>
					<div className="admin-user-output col-md-8">
								<h2>All Users</h2>

						<UserList
						allUsers={this.props.allUsers}
						allCheckIns={this.props.allCheckIns}
						allReviews={this.props.allReviews}
						allDishes={this.props.allDishes}
						allSubNeighborhoods={this.props.allSubNeighborhoods}
						removeUser={this.props.removeUser}
						findAndChangeUser={this.props.findAndChangeUser}
						putOneUserInState={this.props.putOneUserInState}
						putOneDishInState={this.props.putOneDishInState}
						putOneSubNeighborhoodInState={this.props.putOneSubNeighborhoodInState}

						/>
					</div>
				</div>


						<hr />
						<hr />
						<hr />

				<div className="admin-review-box bg-success row">
					<div className="admin-review-input col-md-4">

					</div>
					<div className="admin-review-output col-md-8">
							<h2>All Reviews</h2>

						<ReviewList
						allReviews={this.props.allReviews}
						removeReview={this.props.removeReview}
						findAndChangeReview={this.props.findAndChangeReview}

 />
					</div>
				</div>

			<hr />
			<hr />
			<hr />

				<div className="admin-checkIn-box bg-info row">
					<div className="admin-checkIn-input col-md-4">

					</div>
					<div className="admin-checkIn-output col-md-8">
									<h2>All CheckIns</h2>

						<CheckInList
						allCheckIns={this.props.allCheckIns}
						removeCheckIn={this.props.removeCheckIn}
						findAndChangeCheckIn={this.props.findAndChangeCheckIn}

/>
					</div>
				</div>

			<hr />
			<hr />
			<hr />

				<div className="admin-neighborhood-box bg-success row">
					<div className="admin-neighborhood-input col-md-4">
									<h2>New Neighborhood</h2>

						<NeighborhoodForm
						createNeighborhood={this.props.createNeighborhood}
						/>
					</div>

					<div className="admin-neighborhood-output col-md-8">
									<h2>All Neighborhoods</h2>

						<NeighborhoodList
						allNeighborhoods={this.props.allNeighborhoods}
						allSubNeighborhoods={this.props.allSubNeighborhoods}
						removeNeighborhood={this.props.removeNeighborhood}
						putOneNeighborhoodInState={this.props.putOneNeighborhoodInState}
						putOneSubNeighborhoodInState={this.props.putOneSubNeighborhoodInState}
						findAndChangeNeighborhood={this.props.findAndChangeNeighborhood}


 />
					</div>
				</div>

			<hr />
			<hr />
			<hr />

				<div className="admin-subNeighborhood-box bg-info row">
					<div className="admin-subNeighborhood-input col-md-4">

					</div>

					<div className="admin-subNeighborhood-output col-md-8">
									<h2>All Sub-Neighborhoods</h2>
						<SubNeighborhoodList
						 allSubNeighborhoods={this.props.allSubNeighborhoods}
						 removeSubNeighborhood={this.props.removeSubNeighborhood}
						 findAndChangeSubNeighborhood={this.props.findAndChangeSubNeighborhood}
						 putOneSubNeighborhoodInState={this.props.putOneSubNeighborhoodInState}


 />
					</div>
				</div>

				<hr/>
				<hr />
				<hr />

				<div className="admin-genre-box row bg-success">
					<div className="admin-genre-input col-md-4">
									<h2>New Genre</h2>

						<GenreForm
						createGenre={this.props.createGenre}
						/>
					</div>

					<div className="admin-genre-output col-md-8">
							<h2>All Genres</h2>

						<GenreList
						allGenres={this.props.allGenres}
						allDishes={this.props.allDishes}
						removeGenre={this.props.removeGenre}
						putOneGenreInState={this.props.putOneGenreInState}
						putOneSpotInState={this.props.putOneSpotInState}
						findAndChangeGenre={this.props.findAndChangeGenre}
				/>

					</div>
				</div>


			</div>
		</div>

		)
	}
}


Admin.contextTypes = {
  router: React.PropTypes.object.isRequired
}
