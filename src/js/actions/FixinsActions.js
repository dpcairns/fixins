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
				console.log("user probably deleted")
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
				console.log("neighborhood probably deleted")
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
				console.log("dish probably deleted")
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
				console.log("subNeighborhood probably deleted")
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
				console.log("genre probably deleted")
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
				console.log("review probably deleted")
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
				console.log("checkIn probably deleted")
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
				console.log("spot probably deleted")
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

		export function findAndChangeUser(userToChange){
		$.ajax({
			url: "http://localhost:4444/api/Users/" + userToChange._id,
			type: 'PUT',
			success: function(changedUser){
				console.log("user probably changed to:")
				console.log(changedUser)
						dispatcher.dispatch({
								type: "CHANGED_USER",
								user: changedUser
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Users', status, err.toString());
			}.bind(this)
		});
	}


	export function findAndChangeNeighborhood(ID){
		$.ajax({
			url: "http://localhost:4444/api/Neighborhoods/" + ID,
			type: 'PUT',
		success: function(changedNeighborhood){
				console.log("user probably changed to:")
				console.log(changedNeighborhood)
						dispatcher.dispatch({
								type: "CHANGED_NEIGHBORHOOD",
								user: changedNeighborhood
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Users', status, err.toString());
			}.bind(this)
		});
	}


	export function findAndChangeDish(ID){
		$.ajax({
			url: "http://localhost:4444/api/Dishes/" + ID,
			type: 'PUT',
		success: function(changedDish){
				console.log("dish probably changed to:")
				console.log(changedDish)
						dispatcher.dispatch({
								type: "CHANGED_DISH",
								user: changedDish
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Users', status, err.toString());
			}.bind(this)
		});
	}
	export function findAndChangeSubNeighborhood(ID){
		$.ajax({
			url: "http://localhost:4444/api/SubNeighborhoods/" + ID,
			type: 'PUT',
		success: function(changedSubNeighborhood){
				console.log("subNeighborhood probably changed to:")
				console.log(changedSubNeighborhood)
						dispatcher.dispatch({
								type: "CHANGED_SUBNEIGHBORHOOD",
								user: changedSubNeighborhood
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Users', status, err.toString());
			}.bind(this)
		});
	}
	export function findAndChangeGenre(ID){
		$.ajax({
			url: "http://localhost:4444/api/Genres/" + ID,
			type: 'PUT',
		success: function(changedGenre){
				console.log("genre probably changed to:")
				console.log(changedGenre)
						dispatcher.dispatch({
								type: "CHANGED_GENRE",
								user: changedGenre
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Users', status, err.toString());
			}.bind(this)
		});
	}
	export function findAndChangeReview(ID){
		$.ajax({
			url: "http://localhost:4444/api/Reviews/" + ID,
			type: 'PUT',
		success: function(changedReview){
				console.log("review probably changed to:")
				console.log(changedReview)
						dispatcher.dispatch({
								type: "CHANGED_REVIEW",
								user: changedReview
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Users', status, err.toString());
			}.bind(this)
		});
	}
	export function findAndChangeCheckIn(ID){
		$.ajax({
			url: "http://localhost:4444/api/CheckIns/" + ID,
			type: 'PUT',
		success: function(changedCheckIn){
				console.log("checkIn probably changed to:")
				console.log(changedCheckIn)
						dispatcher.dispatch({
								type: "CHANGED_CHECKIN",
								user: changedCheckIn
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Users', status, err.toString());
			}.bind(this)
		});
	}

	export function findAndChangeSpot(ID){
		$.ajax({
			url: "http://localhost:4444/api/Spots/" + ID,
			type: 'PUT',
			success: function(changedSpot){
				console.log("spot probably changed to:")
				console.log(changedSpot)
						dispatcher.dispatch({
								type: "CHANGED_SPOT",
								user: changedSpot
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Users', status, err.toString());
			}.bind(this)
		});
	}