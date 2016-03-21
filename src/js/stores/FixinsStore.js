import { EventEmitter } from "events";
import * as FixinsActions from "../actions/FixinsActions"

import dispatcher from "../dispatcher"

class FixinsStore extends EventEmitter {
	constructor(){
		super()
		this.reviews = []
		this.spots = []
		this.dishes = []
		this.checkIns = []
		this.neighborhoods = []
		this.subNeighborhoods = []
		this.genres = []
		this.checkIns = []
	}

	getCheckInsFromStore() {
		return this.checkIns;
	}

	getDishesFromStore() {
		return this.dishes;
	}
	
	getGenresFromStore() {
		return this.genres;
	}
	
	getNeighborhoodsFromStore() {
		return this.neighborhoods;
	}
	
	getReviewsFromStore() {
		return this.reviews;
	}
	
	getSpotsFromStore() {
		console.log("getSpotsFromStore.this.spots")
		console.log(this.spots)

		return this.spots;
	}
	
	getSubNeighborhoodsFromStore() {
		return this.subNeighborhoods;
	}
	
	getUsersFromStore() {
		return this.users;
	}
	
	
	setUsersInStore(allUsers){
		this.users = allUsers
		this.emit("changedUsers")
	}


	setSubNeighborhoodsInStore(allSubNeighborhoods){
		this.subNeighborhoods = allSubNeighborhoods
		this.emit("changedSubNeighborhoods")
	}


	setSpotsInStore(allSpots){
		console.log("setSpotsInStore.allSpots")
		console.log(allSpots)
		this.spots = allSpots
		console.log("setSpotsInStore.this.spots")
		console.log(this.spots)
		this.emit("changedSpots")
	}


	setReviewsInStore(allReviews){
		this.reviews = allReviews
		this.emit("changedReviews")
	}


	setNeighborhoodsInStore(allNeighborhoods){
		this.neighborhoods = allNeighborhoods
		this.emit("changedNeighborhoods")
	}


	setGenresInStore(allGenres){
		this.Genres = allGenres		
		this.emit("changedGenres")
	}


	setDishesInStore(allDishes){
		this.dishes = allDishes
		this.emit("changedDishes")
	}


	setCheckInsInStore(allCheckIns){
		this.checkIns = allCheckIns
		this.emit("changedCheckIns")
	}


	addNeighborhoodToStore(neighborhood){
		this.neighborhoods.push(neighborhood)
		this.emit("changedNeighborhoods")
	}


	addSubNeighborhoodToStore(subNeighborhood){
		this.subNeighborhoods.push(subNeighborhood)
		this.emit("changedSubNeighborhoods")
	}
	

	addUserToStore(user){
		this.users.push(user)
		this.emit("changedUsers")
	}
	

	addReviewToStore(review){
		this.reviews.push(review)
		this.emit("changedReviews")
	}
	

	addSpotToStore(spot){
		this.spots.push(spot)
		this.emit("changedSpots")
	}
	

	addDishToStore(dish){
		this.dishes.push(dish)
		this.emit("changedDishes")
	}
	
	addCheckInToStore(checkIn){
		this.checkIns.push(checkIn)
		this.emit("changedCheckIns")
	}

	addGenreToStore(genre){
		this.genres.push(genre)
		this.emit("changedGenres")
	}

	handleActions(action){
		switch(action.type){
			case "CREATE_USER":
				console.log("CREATE_USER")
				this.addUserToStore(action.newUser)
				break;
			
			case "CREATE_SPOT":
				console.log("CREATE_SPOT")
				this.addSpotToStore(action.newSpot)
				break;
			
			case "CREATE_DISH":
				console.log("CREATE_DISH")
				this.addDishToStore(action.newDish)
				break;
			
			case "CREATE_REVIEW":
				console.log("CREATE_REVIEW")
				this.addReviewToStore(action.newReview)
				break;
			
			case "CREATE_CHECKIN":
				console.log("CREATE_CHECKIN")
				this.addCheckInToStore(action.newCheckin)
				break;
			
			case "CREATE_GENRE":
				console.log("CREATE_GENRE")
				this.addGenreToStore(action.newGenre)
				break;
			
			case "CREATE_NEIGHBORHOOD":
				console.log("CREATE_NEIGHBORHOOD")
				this.addNeighborhoodToStore(action.newNeighborhood)
				break;
				
			case "CREATE_SUBNEIGHBORHOOD":
				console.log("CREATE_SUBNEIGHBORHOOD")
				this.addSubNeighborhood(action.newSubNeighborhood)
				break;
				
			case "FETCH_USERS":
				console.log("FETCH_USERS")
				this.setUsersInStore(action.allUsers)
				break;
				
			case "FETCH_CHECKINS":
				console.log("FETCH_CHECKINS")
				this.setCheckInsInStore(action.allCheckIns)
				break;
				
			case "FETCH_DISHES":
				console.log("FETCH_DISHES")
				this.setDishesInStore(action.allDishes)
				break;
				
			case "FETCH_GENRES":
				this.setGenresInStore(action.allGenres)
				break;
				
			case "FETCH_NEIGHBORHOODS":
				console.log("FETCH_NEIGHBORHOODS")
				this.setNeighborhoodsInStore(action.allNeighborhoods)
				break;
				
			case "FETCH_SUBNEIGHBORHOODS":
				console.log("FETCH_SUBNEIGHBORHOODS")
				this.setSubNeighborhoodsInStore(action.allSubNeighborhoods)
							break;

			case "FETCH_REVIEWS":
				console.log("FETCH_REVIEWS")
				this.setReviewsInStore(action.allReviews)
				break;
			
			case "FETCH_SPOTS":
				console.log("=============FETCH_SPOTS=================")
				console.log(action)

				this.setSpotsInStore(action.allSpots)
				break;
			

					
		}
	}
}
const fixinsStore = new FixinsStore;
dispatcher.register(fixinsStore.handleActions.bind(fixinsStore));
export default fixinsStore;
