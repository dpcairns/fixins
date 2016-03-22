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
		this.spots = allSpots
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
		this.genres = allGenres		
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

	findAndRemoveCheckIn(ID){
		console.log("findAndRemoveCheckIn")
	}

	findAndRemoveDish(ID){
		console.log("findAndRemoveDish")

	}

	findAndRemoveReview(ID){
		console.log("findAndRemoveReview")

	}

	findAndRemoveSpot(ID){
		console.log("findAndRemoveSpot")

	}

	findAndRemoveSubNeighborhood(ID){
		console.log("findAndRemoveSubNeighborhood")

	}

	findAndRemoveNeighborhood(ID){
		console.log("findAndRemoveNeighborhood")

	}

	findAndRemoveGenre(ID){
		console.log("findAndRemoveGenre")

	}

	findAndRemoveUser(ID){
		console.log("findAndRemoveUser")

	}


	handleActions(action){
		switch(action.type){
			case "CREATE_USER":
				console.log("CREATE_USER")
				this.addUserToStore(action.postedUser)
				break;
			
			case "CREATE_SPOT":
				console.log("CREATE_SPOT")
				this.addSpotToStore(action.postedSpot)
				break;
			
			case "CREATE_DISH":
				console.log("CREATE_DISH")
				this.addDishToStore(action.postedDish)
				break;
			
			case "CREATE_REVIEW":
				console.log("CREATE_REVIEW")
				this.addReviewToStore(action.postedReview)
				break;
			
			case "CREATE_CHECKIN":
				console.log("CREATE_CHECKIN")
				this.addCheckInToStore(action.postedCheckin)
				break;
			
			case "CREATE_GENRE":
				console.log("CREATE_GENRE")
				this.addGenreToStore(action.postedGenre)
				break;
			
			case "CREATE_NEIGHBORHOOD":
				console.log("CREATE_NEIGHBORHOOD")
				this.addNeighborhoodToStore(action.postedNeighborhood)
				break;
				
			case "CREATE_SUBNEIGHBORHOOD":
				console.log("CREATE_SUBNEIGHBORHOOD")
				this.addSubNeighborhood(action.postedSubNeighborhood)
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
				this.setSpotsInStore(action.allSpots)
				break;
			
		
			case "FETCH_USERS":
				console.log("FETCH_USERS")
				this.setUsersInStore(action.allUsers)
				break;
				
			case "REMOVE_CHECKIN":
				console.log("REMOVE_CHECKIN")
				this.findAndRemoveCheckIn(action.checkIn)
				break;
				
			case "REMOVE_DISH":
					console.log("REMOVE_DISH")
				this.findAndRemoveDish(action.dish)
				break;
				
			case "REMOVE_GENRE":
					console.log("REMOVE_GENRE")

				this.findAndRemoveGenre(action.genre)
				break;
				
			case "REMOVE_NEIGHBORHOOD":
				console.log("REMOVE_NEIGHBORHOOD")
				this.findAndRemoveNeighborhood(action.neighborhood)
				break;
				
			case "REMOVE_SUBNEIGHBORHOOD":
				console.log("REMOVE_SUBNEIGHBORHOOD")
				this.findAndRemoveSubNeighborhood(action.subNeighborhood)
							break;

			case "REMOVE_REVIEW":
				console.log("REMOVE_REVIEW")
				this.findAndRemoveReview(action.review)
				break;
			
			case "REMOVE_SPOT":
					console.log("REMOVE_SPOT")
				this.findAndRemoveSpot(action.spot)
				break;
			

			case "REMOVE_USER":
					console.log("REMOVE_USER")
				this.findAndRemoveUser(action.user)
				break;		
		}
	}
}
const fixinsStore = new FixinsStore;
dispatcher.register(fixinsStore.handleActions.bind(fixinsStore));
export default fixinsStore;
