import dispatcher from "../dispatcher"

export function createUser(newUser){
		$.ajax({
			url: "http://localhost:4444/api/Users",
			type: 'POST',
			data: newUser,
			success: function(postedUser){
				console.log(postedUser)
						dispatcher.dispatch({
								type: "CREATE_USER",
								postedUser
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Users', status, err.toString());
			}.bind(this)
		});
	}

export function createSpot(newSpot){
		$.ajax({
			url: "http://localhost:4444/api/Spots",
			type: 'POST',
			data: newSpot,
			success: function(postedSpot){
						dispatcher.dispatch({
								type: "CREATE_SPOT",
								postedSpot
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Spots', status, err.toString());
			}.bind(this)
		});
	}

export function createDish(newDish){
		$.ajax({
			url: "http://localhost:4444/api/Dishes",
			type: 'POST',
			data: newDish,
			success: function(postedDish){
						dispatcher.dispatch({
								type: "CREATE_DISH",
								postedDish
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Dishes', status, err.toString());
			}.bind(this)
		});
	}

export function createReview(newReview){
		$.ajax({
			url: "http://localhost:4444/api/Reviews",
			type: 'POST',
			data: newReview,
			success: function(postedReview){
						dispatcher.dispatch({
								type: "CREATE_REVIEW",
								postedReview
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Reviews', status, err.toString());
			}.bind(this)
		});
	}
export function createNeighborhood(newNeighborhood){
		$.ajax({
			url: "http://localhost:4444/api/Neighborhoods",
			type: 'POST',
			data: newNeighborhood,
			success: function(postedNeighborhood){
						dispatcher.dispatch({
								type: "CREATE_NEIGHBORHOOD",
								postedNeighborhood
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Neighborhoods', status, err.toString());
			}.bind(this)
		});
	}

export function createSubNeighborhood(newSubNeighborhood){
		$.ajax({
			url: "http://localhost:4444/api/SubNeighborhoods",
			type: 'POST',
			data: newSubNeighborhood,
			success: function(postedSubNeighborhood){
						dispatcher.dispatch({
								type: "CREATE_SUBNEIGHBORHOOD",
								postedSubNeighborhood
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./SubNeighborhoods', status, err.toString());
			}.bind(this)
		});
	}

export function createGenre(newGenre){
		$.ajax({
			url: "http://localhost:4444/api/Genres",
			type: 'POST',
			data: newGenre,
			success: function(postedGenre){
						dispatcher.dispatch({
								type: "CREATE_GENRE",
								postedGenre
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Genres', status, err.toString());
			}.bind(this)
		});
	}


export function createCheckIn(newCheckIn){
		$.ajax({
			url: "http://localhost:4444/api/CheckIns",
			type: 'POST',
			data: newCheckIn,
			success: function(postedCheckIn){
						dispatcher.dispatch({
								type: "CREATE_CHECKIN",
								postedCheckIn
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./CheckIns', status, err.toString());
			}.bind(this)
		});
	}

export function initializeUsers(){
		$.ajax({
			url: "http://localhost:4444/api/Users",
			type: 'GET',
			dataType: "json",
			success: function(data){
						dispatcher.dispatch({
								type: "FETCH_USERS",
								allUsers: data
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Users', status, err.toString());
			}.bind(this)
		});
	}



export function initializeSpots(){
		$.ajax({
			url: "http://localhost:4444/api/Spots",
			type: 'GET',
			dataType: "json",
			success: function(data){
						dispatcher.dispatch({
								type: "FETCH_SPOTS",
								allSpots: data
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Spots', status, err.toString());
			}.bind(this)
		});
	}

export function initializeDishes(){
		$.ajax({
			url: "http://localhost:4444/api/Dishes",
			type: 'GET',
			dataType: "json",
			success: function(data){
						dispatcher.dispatch({
								type: "FETCH_DISHES",
								allDishes: data
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Dishes', status, err.toString());
			}.bind(this)
		});
	}

export function initializeReviews(){
		$.ajax({
			url: "http://localhost:4444/api/Reviews",
			type: 'GET',
			dataType: "json",
			success: function(data){
						dispatcher.dispatch({
								type: "FETCH_REVIEWS",
								allReviews: data
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Reviews', status, err.toString());
			}.bind(this)
		});
	}
export function initializeNeighborhoods(){
		$.ajax({
			url: "http://localhost:4444/api/Neighborhoods",
			type: 'GET',
			dataType: "json",
			success: function(data){
						dispatcher.dispatch({
								type: "FETCH_NEIGHBORHOODS",
								allNeighborhoods: data
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Neighborhoods', status, err.toString());
			}.bind(this)
		});
	}

export function initializeSubNeighborhoods(){
		$.ajax({
			url: "http://localhost:4444/api/SubNeighborhoods",
			type: 'GET',
			dataType: "json",
			success: function(data){
						dispatcher.dispatch({
								type: "FETCH_SUBNEIGHBORHOODS",
								allSubNeighborhoods: data
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./SubNeighborhoods', status, err.toString());
			}.bind(this)
		});
	}

export function initializeGenres(data){
		$.ajax({
			url: "http://localhost:4444/api/Genres",
			type: 'GET',
			dataType: "json",
			success: function(data){
						dispatcher.dispatch({
								type: "FETCH_GENRES",
								allGenres: data
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Genres', status, err.toString());
			}.bind(this)
		});
	}


export function initializeCheckIns(data){
		$.ajax({
			url: "http://localhost:4444/api/CheckIns",
			type: 'GET',
			dataType: "json",
			success: function(){
						dispatcher.dispatch({
								type: "FETCH_CHECKINS",
								allCheckIns: data
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./CheckIns', status, err.toString());
			}.bind(this)
		});
	}

	export function removeUser(ID){
		$.ajax({
			url: "http://localhost:4444/api/Users/" + ID,
			type: 'DELETE',
			success: function(postedUser){
						dispatcher.dispatch({
								type: "REMOVE_USER",
								user: ID
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Users', status, err.toString());
			}.bind(this)
		});
	}


	export function removeNeighborhood(ID){
		$.ajax({
			url: "http://localhost:4444/api/Neighborhoods/" + ID,
			type: 'DELETE',
			success: function(postedUser){
						dispatcher.dispatch({
								type: "REMOVE_NEIGHBORHOOD",
								neighborhood: ID
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Users', status, err.toString());
			}.bind(this)
		});
	}


	export function removeDish(ID){
		$.ajax({
			url: "http://localhost:4444/api/Dishes/" + ID,
			type: 'DELETE',
			success: function(postedUser){
						dispatcher.dispatch({
								type: "REMOVE_DISH",
								dish: ID
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Users', status, err.toString());
			}.bind(this)
		});
	}
	export function removeSubNeighborhood(ID){
		$.ajax({
			url: "http://localhost:4444/api/SubNeighborhoods/" + ID,
			type: 'DELETE',
			success: function(){
						dispatcher.dispatch({
								type: "REMOVE_SUBNEIGHBORHOOD",
								subNeighborhoods: ID
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Users', status, err.toString());
			}.bind(this)
		});
	}
	export function removeGenre(ID){
		$.ajax({
			url: "http://localhost:4444/api/Genres/" + ID,
			type: 'DELETE',
			success: function(){
						dispatcher.dispatch({
								type: "REMOVE_GENRE",
								genre: ID
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Users', status, err.toString());
			}.bind(this)
		});
	}
	export function removeReview(ID){
		$.ajax({
			url: "http://localhost:4444/api/Reviews/" + ID,
			type: 'DELETE',
			success: function(postedUser){
						dispatcher.dispatch({
								type: "REMOVE_REVIEW",
								review: ID
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Users', status, err.toString());
			}.bind(this)
		});
	}
	export function removeCheckIn(ID){
		$.ajax({
			url: "http://localhost:4444/api/CheckIns/" + ID,
			type: 'DELETE',
			success: function(){
						dispatcher.dispatch({
								type: "REMOVE_CHECKIN",
								checkIn: ID
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Users', status, err.toString());
			}.bind(this)
		});
	}

	export function removeSpot(ID){
		$.ajax({
			url: "http://localhost:4444/api/Spots/" + ID,
			type: 'DELETE',
			success: function(){
						dispatcher.dispatch({
								type: "REMOVE_SPOT",
								spot: ID
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Users', status, err.toString());
			}.bind(this)
		});
	}

		export function findAndChangeUser(newUserInfo){
		$.ajax({
			url: "http://localhost:4444/api/Users/" + newUserInfo._id,
			type: 'PUT',
			data: newUserInfo,
			success: function(changedUser){
						dispatcher.dispatch({
								type: "CHANGED_USER",
								changedUser: changedUser
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Users', status, err.toString());
			}.bind(this)
		});
	}


	export function findAndChangeNeighborhood(newNeighborhoodInfo){
		$.ajax({
			url: "http://localhost:4444/api/Neighborhoods/" + newNeighborhoodInfo._id,
			type: 'PUT',
			data: newNeighborhoodInfo,
			success: function(changedNeighborhood){
						dispatcher.dispatch({
								type: "CHANGED_NEIGHBORHOOD",
								changedNeighborhood: changedNeighborhood
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Neighborhoods', status, err.toString());
			}.bind(this)
		});
	}

	export function findAndChangeDish(newDishInfo){
		$.ajax({
			url: "http://localhost:4444/api/Dishes/" + newDishInfo._id,
			type: 'PUT',
			data: newDishInfo,
			success: function(changedDish){
						dispatcher.dispatch({
								type: "CHANGED_DISH",
								changedDish: changedDish
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Dishes', status, err.toString());
			}.bind(this)
		});
	}

		export function findAndChangeSubNeighborhood(newSubNeighborhoodInfo){
		$.ajax({
			url: "http://localhost:4444/api/SubNeighborhoods/" + newSubNeighborhoodInfo._id,
			type: 'PUT',
			data: newSubNeighborhoodInfo,
			success: function(changedSubNeighborhood){
						dispatcher.dispatch({
								type: "CHANGED_SUBNEIGHBORHOOD",
								changedSubNeighborhood: changedSubNeighborhood
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./SubNeighborhoods', status, err.toString());
			}.bind(this)
		});
	}


	export function findAndChangeGenre(newGenreInfo){
		$.ajax({
			url: "http://localhost:4444/api/Genres/" + newGenreInfo._id,
			type: 'PUT',
			data: newGenreInfo,
			success: function(changedGenre){
						dispatcher.dispatch({
								type: "CHANGED_GENRE",
								changedGenre: changedGenre
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Genres', status, err.toString());
			}.bind(this)
		});
	}

	export function findAndChangeReview(newReviewInfo){
		$.ajax({
			url: "http://localhost:4444/api/Reviews/" + newReviewInfo._id,
			type: 'PUT',
			data: newReviewInfo,
			success: function(changedReview){
						dispatcher.dispatch({
								type: "CHANGED_REVIEW",
								changedReview: changedReview
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Reviews', status, err.toString());
			}.bind(this)
		});
	}

		export function findAndChangeCheckIn(newCheckInInfo){
		$.ajax({
			url: "http://localhost:4444/api/CheckIns/" + newCheckInInfo._id,
			type: 'PUT',
			data: newCheckInInfo,
			success: function(changedCheckIn){
						dispatcher.dispatch({
								type: "CHANGED_CHECKIN",
								changedCheckIn: changedCheckIn
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./CheckIns', status, err.toString());
			}.bind(this)
		});
	}


		export function findAndChangeSpot(newSpotInfo){
		$.ajax({
			url: "http://localhost:4444/api/Spots/" + newSpotInfo._id,
			type: 'PUT',
			data: newSpotInfo,
			success: function(changedSpot){
						dispatcher.dispatch({
								type: "CHANGED_SPOT",
								changedSpot: changedSpot
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Spots', status, err.toString());
			}.bind(this)
		});
	}
