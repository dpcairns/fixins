import dispatcher from "../dispatcher"

export function createUser(newUser){
		$.ajax({
			url: "http://localhost:4444/api/Users",
			type: 'POST',
			data: newUser,
			success: function(postedUser){
				console.log("trying to make a user")
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

	export function removeUser(userID){
		$.ajax({
			url: "http://localhost:4444/api/Users/" + userID,
			type: 'DELETE',
			success: function(postedUser){
				console.log("user probably deleted")
						dispatcher.dispatch({
								type: "REMOVE_USER",
								postedUser
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Users', status, err.toString());
			}.bind(this)
		});
	}


	export function removeNeighborhood(ID){
		$.ajax({
			url: "http://localhost:4444/api/Dishes/" + ID,
			type: 'DELETE',
			success: function(postedUser){
				console.log("neighborhood probably deleted")
						dispatcher.dispatch({
								type: "REMOVE_USER",
								postedUser
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
								type: "REMOVE_USER",
								postedUser
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Users', status, err.toString());
			}.bind(this)
		});
	}