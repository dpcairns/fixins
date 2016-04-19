
export function putOneSpotInState(_id){
  return {type: "PUT_ONE_SPOT_IN_STATE", _id:_id}
}

export function putOneSubNeighborhoodInState(_id){
  return {type: "PUT_ONE_SUBNEIGHBORHOOD_IN_STATE", _id:_id}
}

export function putOneNeighborhoodInState(_id){
  return {type: "PUT_ONE_NEIGHBORHOOD_IN_STATE", _id:_id}
}

export function putOneGenreInState(_id){
  return {type: "PUT_ONE_GENRE_IN_STATE", _id:_id}
}

export function putOneUserInState(_id){
  return {type: "PUT_ONE_USER_IN_STATE", _id:_id}
}

export function putOneDishInState(_id){
  return {type: "PUT_ONE_DISH_IN_STATE", _id:_id}
}

export function createUser(newUser, dispatch){
		$.ajax({
			url: "http://localhost:4444/api/Users",
			type: 'POST',
			data: newUser,
			success: function(postedUser){
						dispatch(//
								//type: "CREATE_USER",
								//postedUser
							{
							    type: 'CREATE_USER',
							    ...postedUser
							  }

											);
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Users', status, err.toString());
			}.bind(this)
		});
	}


export function createSpot(newSpot, dispatch){
		$.ajax({
			url: "http://localhost:4444/api/Spots",
			type: 'POST',
			data: newSpot,
			success: function(postedSpot){
				dispatch(//
						//type: "CREATE_USER",
						//postedUser
					{
							type: 'CREATE_SPOT',
							...postedSpot
						}

									);
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Spots', status, err.toString());
			}.bind(this)
		});
	}

export function createDish(newDish, dispatch){
		$.ajax({
			url: "http://localhost:4444/api/Dishes",
			type: 'POST',
			data: newDish,
			success: function(postedDish){
				dispatch(//
						//type: "CREATE_USER",
						//postedUser
					{
							type: 'CREATE_DISH',
							...postedDish
						}

									);
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Dishes', status, err.toString());
			}.bind(this)
		});
	}


export function createReview(newReview, dispatch){
		$.ajax({
			url: "http://localhost:4444/api/Reviews",
			type: 'POST',
			data: newReview,
			success: function(postedReview){
				dispatch(//
						//type: "CREATE_USER",
						//postedUser
					{
							type: 'CREATE_REVIEW',
							...postedReview
						}

									);
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Reviews', status, err.toString());
			}.bind(this)
		});
	}


export function createNeighborhood(newNeighborhood, dispatch){
		$.ajax({
			url: "http://localhost:4444/api/Neighborhoods",
			type: 'POST',
			data: newNeighborhood,
			success: function(postedNeighborhood){
				dispatch(//
						//type: "CREATE_USER",
						//postedUser
					{
							type: 'CREATE_NEIGHBORHOOD',
							...postedNeighborhood
						}

									);
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Neighborhoods', status, err.toString());
			}.bind(this)
		});
	}


export function createSubNeighborhood(newSubNeighborhood, dispatch){
		$.ajax({
			url: "http://localhost:4444/api/SubNeighborhoods",
			type: 'POST',
			data: newSubNeighborhood,
			success: function(postedSubNeighborhood){
				dispatch(//
						//type: "CREATE_USER",
						//postedUser

					{
							type: 'CREATE_SUBNEIGHBORHOOD',
							...postedSubNeighborhood
						}

									);
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./SubNeighborhoods', status, err.toString());
			}.bind(this)
		});
	}


export function createGenre(newGenre, dispatch){
		$.ajax({
			url: "http://localhost:4444/api/Genres",
			type: 'POST',
			data: newGenre,
			success: function(postedGenre){
				dispatch(//
						//type: "CREATE_USER",
						//postedUser
					{
							type: 'CREATE_GENRE',
							...postedGenre
						}

									);
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Genres', status, err.toString());
			}.bind(this)
		});
	}


export function createCheckIn(newCheckIn, dispatch){
		$.ajax({
			url: "http://localhost:4444/api/CheckIns",
			type: 'POST',
			data: newCheckIn,
			success: function(postedCheckIn){
						dispatch(
							{
									type: 'CREATE_CHECKIN',
									...postedCheckIn
								}

											);
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./CheckIns', status, err.toString());
			}.bind(this)
		});
	}


export function initializeUsers(dispatch){
		$.ajax({
			url: "http://localhost:4444/api/Users",
			type: 'GET',
			dataType: "json",
			success: function(allUsers){
						dispatch({type: "FETCH_USERS", allUsers})
			},
			error: function(xhr, status, err){
				console.error('./Users', status, err.toString());
			}
		});
	}



export function initializeSpots(dispatch){
		$.ajax({
			url: "http://localhost:4444/api/Spots",
			type: 'GET',
			dataType: "json",
			success: function(allSpots){
						dispatch({
								type: "FETCH_SPOTS",
								allSpots
							});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Spots', status, err.toString());
			}.bind(this)
		});
	}

export function initializeDishes(dispatch){
		$.ajax({
			url: "http://localhost:4444/api/Dishes",
			type: 'GET',
			dataType: "json",
			success: function(allDishes){
						dispatch({
								type: "FETCH_DISHES",
								allDishes
							});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Dishes', status, err.toString());
			}
		});
	}

export function initializeReviews(dispatch){
		$.ajax({
			url: "http://localhost:4444/api/Reviews",
			type: 'GET',
			dataType: "json",
			success: function(allReviews){
						dispatch({
								type: "FETCH_REVIEWS",
								allReviews
							});
			},
			error: function(xhr, status, err){
				console.error('./Reviews', status, err.toString());
			}
		});
	}
export function initializeNeighborhoods(dispatch){
		$.ajax({
			url: "http://localhost:4444/api/Neighborhoods",
			type: 'GET',
			dataType: "json",
			success: function(allNeighborhoods){
						dispatch({
								type: "FETCH_NEIGHBORHOODS",
								allNeighborhoods
							});
			},
			error: function(xhr, status, err){
				console.error('./Neighborhoods', status, err.toString());
			}.bind(this)
		});
	}

export function initializeSubNeighborhoods(dispatch){
		$.ajax({
			url: "http://localhost:4444/api/SubNeighborhoods",
			type: 'GET',
			dataType: "json",
			success: function(allSubNeighborhoods){
							dispatch({
								type: "FETCH_SUBNEIGHBORHOODS",
								allSubNeighborhoods
							});
			},
			error: function(xhr, status, err){
				console.error('./SubNeighborhoods', status, err.toString());
			}.bind(this)
		});
	}

export function initializeGenres(dispatch){
		$.ajax({
			url: "http://localhost:4444/api/Genres",
			type: 'GET',
			dataType: "json",
			success: function(allGenres){
						dispatch({
								type: "FETCH_GENRES",
								allGenres
							});
			},
			error: function(xhr, status, err){
				console.error('./Genres', status, err.toString());
			}.bind(this)
		});
	}


export function initializeCheckIns(dispatch){
		$.ajax({
			url: "http://localhost:4444/api/CheckIns",
			type: 'GET',
			dataType: "json",
			success: function(allCheckIns){
						dispatch({
								type: "FETCH_CHECKINS",
								allCheckIns
							});
			},
			error: function(xhr, status, err){
				console.error('./CheckIns', status, err.toString());
			}.bind(this)
		});
	}

	export function removeUser(ID, dispatch){
		$.ajax({
			url: "http://localhost:4444/api/Users/" + ID,
			type: 'DELETE',
			success: function(postedUser){
						dispatch({
								type: "REMOVE_USER",
								_id: ID
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Users', status, err.toString());
			}.bind(this)
		});
	}


	export function removeNeighborhood(ID, dispatch){
		$.ajax({
			url: "http://localhost:4444/api/Neighborhoods/" + ID,
			type: 'DELETE',
			success: function(postedUser){
						dispatch({
								type: "REMOVE_NEIGHBORHOOD",
								_id: ID
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Users', status, err.toString());
			}.bind(this)
		});
	}


	export function removeDish(ID, dispatch){
		$.ajax({
			url: "http://localhost:4444/api/Dishes/" + ID,
			type: 'DELETE',
			success: function(postedUser){
						dispatch({
								type: "REMOVE_DISH",
								_id: ID
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Users', status, err.toString());
			}.bind(this)
		});
	}
	export function removeSubNeighborhood(ID, dispatch){
		$.ajax({
			url: "http://localhost:4444/api/SubNeighborhoods/" + ID,
			type: 'DELETE',
			success: function(){
						dispatch({
								type: "REMOVE_SUBNEIGHBORHOOD",
								_id: ID
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Users', status, err.toString());
			}.bind(this)
		});
	}
	export function removeGenre(ID, dispatch){
		$.ajax({
			url: "http://localhost:4444/api/Genres/" + ID,
			type: 'DELETE',
			success: function(){
						dispatch({
								type: "REMOVE_GENRE",
								_id: ID
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Users', status, err.toString());
			}.bind(this)
		});
	}
	export function removeReview(ID, dispatch){
		$.ajax({
			url: "http://localhost:4444/api/Reviews/" + ID,
			type: 'DELETE',
			success: function(postedUser){
						dispatch({
								type: "REMOVE_REVIEW",
								_id: ID
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Users', status, err.toString());
			}.bind(this)
		});
	}
	export function removeCheckIn(ID, dispatch){
		$.ajax({
			url: "http://localhost:4444/api/CheckIns/" + ID,
			type: 'DELETE',
			success: function(){
						dispatch({
								type: "REMOVE_CHECKIN",
								_id: ID
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Users', status, err.toString());
			}.bind(this)
		});
	}

	export function removeSpot(ID, dispatch){
		$.ajax({
			url: "http://localhost:4444/api/Spots/" + ID,
			type: 'DELETE',
			success: function(){
						dispatch({
								type: "REMOVE_SPOT",
								_id: ID
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Users', status, err.toString());
			}.bind(this)
		});
	}

		export function findAndChangeUser(newUserInfo, dispatch){
		$.ajax({
			url: "http://localhost:4444/api/Users/" + newUserInfo._id,
			type: 'PUT',
			data: newUserInfo,
			success: function(changedUser){
						dispatch({
								type: "CHANGED_USER",
								changedUser: changedUser
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Users', status, err.toString());
			}.bind(this)
		});
	}


	export function findAndChangeNeighborhood(newNeighborhoodInfo, dispatch){
		$.ajax({
			url: "http://localhost:4444/api/Neighborhoods/" + newNeighborhoodInfo._id,
			type: 'PUT',
			data: newNeighborhoodInfo,
			success: function(changedNeighborhood){
						dispatch({
								type: "CHANGED_NEIGHBORHOOD",
								changedNeighborhood: changedNeighborhood
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Neighborhoods', status, err.toString());
			}.bind(this)
		});
	}

	export function findAndChangeDish(newDishInfo, dispatch){
		$.ajax({
			url: "http://localhost:4444/api/Dishes/" + newDishInfo._id,
			type: 'PUT',
			data: newDishInfo,
			success: function(changedDish){
						dispatch({
								type: "CHANGED_DISH",
								...changedDish
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Dishes', status, err.toString());
			}.bind(this)
		});
	}

		export function findAndChangeSubNeighborhood(newSubNeighborhoodInfo, dispatch){
		$.ajax({
			url: "http://localhost:4444/api/SubNeighborhoods/" + newSubNeighborhoodInfo._id,
			type: 'PUT',
			data: newSubNeighborhoodInfo,
			success: function(changedSubNeighborhood){
						dispatch({
								type: "CHANGED_SUBNEIGHBORHOOD",
								changedSubNeighborhood: changedSubNeighborhood
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./SubNeighborhoods', status, err.toString());
			}.bind(this)
		});
	}


	export function findAndChangeGenre(newGenreInfo, dispatch){
		$.ajax({
			url: "http://localhost:4444/api/Genres/" + newGenreInfo._id,
			type: 'PUT',
			data: newGenreInfo,
			success: function(changedGenre){
						dispatch({
								type: "CHANGED_GENRE",
								changedGenre: changedGenre
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Genres', status, err.toString());
			}.bind(this)
		});
	}

	export function findAndChangeReview(newReviewInfo, dispatch){
		$.ajax({
			url: "http://localhost:4444/api/Reviews/" + newReviewInfo._id,
			type: 'PUT',
			data: newReviewInfo,
			success: function(changedReview){
						dispatch({
								type: "CHANGED_REVIEW",
								changedReview: changedReview
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Reviews', status, err.toString());
			}.bind(this)
		});
	}

		export function findAndChangeCheckIn(newCheckInInfo, dispatch){
		$.ajax({
			url: "http://localhost:4444/api/CheckIns/" + newCheckInInfo._id,
			type: 'PUT',
			data: newCheckInInfo,
			success: function(changedCheckIn){
						dispatch({
								type: "CHANGED_CHECKIN",
								changedCheckIn: changedCheckIn
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./CheckIns', status, err.toString());
			}.bind(this)
		});
	}


		export function findAndChangeSpot(newSpotInfo, dispatch){
		$.ajax({
			url: "http://localhost:4444/api/Spots/" + newSpotInfo._id,
			type: 'PUT',
			data: newSpotInfo,
			success: function(changedSpot){
						dispatch({
								type: "CHANGED_SPOT",
								...changedSpot
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Spots', status, err.toString());
			}.bind(this)
		});
	}
