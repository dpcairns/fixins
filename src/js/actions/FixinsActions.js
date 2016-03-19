import dispatcher from "../dispatcher"

export function createUser(newUser){
		$.ajax({
			url: "http://localhost:4444/api/Users",
			type: 'POST',
			data: newUser,
			success: function(){
						dispatcher.dispatch({
								type: "CREATE_USER",
								newUser
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
			success: function(){
						dispatcher.dispatch({
								type: "CREATE_SPOT",
								newSpot
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
			success: function(){
						dispatcher.dispatch({
								type: "CREATE_DISH",
								newDish
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
			success: function(){
						dispatcher.dispatch({
								type: "CREATE_REVIEW",
								newReview
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
			success: function(){
						dispatcher.dispatch({
								type: "CREATE_NEIGHBORHOOD",
								newNeighborhood
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
			success: function(){
						dispatcher.dispatch({
								type: "CREATE_SUBNEIGHBORHOOD",
								newSubNeighborhood
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
			success: function(){
						dispatcher.dispatch({
								type: "CREATE_GENRE",
								newGenre
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
			success: function(){
						dispatcher.dispatch({
								type: "CREATE_CHECKIN",
								newCheckIn
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
			success: function(){
						dispatcher.dispatch({
								type: "FETCH_USERS",
								allUsers
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
			success: function(){
						dispatcher.dispatch({
								type: "FETCH_SPOTS",
								allSpots
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
			success: function(){
						dispatcher.dispatch({
								type: "FETCH_DISHES",
								allDishes
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
			success: function(){
						dispatcher.dispatch({
								type: "FETCH_REVIEWS",
								allReviews
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
			success: function(){
						dispatcher.dispatch({
								type: "FETCH_NEIGHBORHOODS",
								allNeighborhoods
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
			success: function(){
						dispatcher.dispatch({
								type: "FETCH_SUBNEIGHBORHOODS",
								allSubNeighborhoods
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./SubNeighborhoods', status, err.toString());
			}.bind(this)
		});
	}

export function initializeGenres(){
		$.ajax({
			url: "http://localhost:4444/api/Genres",
			type: 'GET',
			success: function(){
						dispatcher.dispatch({
								type: "FETCH_GENRES",
								allGenres
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./Genres', status, err.toString());
			}.bind(this)
		});
	}


export function initializeCheckIns(){
		$.ajax({
			url: "http://localhost:4444/api/CheckIns",
			type: 'GET',
			success: function(){
						dispatcher.dispatch({
								type: "FETCH_CHECKINS",
								allCheckIns
											});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('./CheckIns', status, err.toString());
			}.bind(this)
		});
	}



