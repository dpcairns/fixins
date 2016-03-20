import { EventEmitter } from "events";
import * as FixinsActions from "../actions/FixinsActions"

import dispatcher from "../../dispatcher"

class FixinsStore extends EventEmitter {
	constructor(){
		super()
		this.reviews: [],
		this.spots: []
		this.dishes: []
		this.checkIns: []
		this.neighborhoods: []
		this.subNeighborhoods: []
		this.genres: []
		this.checkIns: []
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
		this.emit("change")
	}


	setSubNeighborhoodsInStore(allSubNeighborhoods){
		this.subNeighborhoods = allSubNeighborhoods
		this.emit("change")
	}


	setSpotsInStore(allSpots){
		this.spots = allSpots
		this.emit("change")
	}


	setReviewsInStore(allReviews){
		this.reviews = allReviews
		this.emit("change")
	}


	setNeighborhoodsInStore(allNeighborhoods){
		this.neighborhoods = allNeighborhoods
		this.emit("change")
	}


	setGenresInStore(allGenres){
		this.Genres = allGenres		
		this.emit("change")
	}


	setDishesInStore(allDishes){
		this.dishes = allDishes
		this.emit("change")
	}


	setCheckInsInStore(allCheckIns){
		this.checkIns = allCheckIns
		this.emit("change")
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
			case "CREATE_USER":{
				console.log("CREATE_USER")
				this.addUserToStore(action.newUser)
			}
			case "CREATE_SPOT":{
				console.log("CREATE_SPOT")
				this.addSpotToStore(action.newSpot)
			}
			case "CREATE_DISH":{
				console.log("CREATE_DISH")
				this.addDishToStore(action.newDish)
			}
			case "CREATE_REVIEW":{
				console.log("CREATE_REVIEW")
				this.addReviewToStore(action.newReview)
			}
			case "CREATE_CHECKIN":{
				console.log("CREATE_CHECKIN")
				this.addCheckInToStore(action.newCheckin)
			}
			case "CREATE_GENRE":{
				console.log("CREATE_GENRE")
				this.addGenreToStore(action.newGenre)
			}
			case "CREATE_NEIGHBORHOOD":{
				console.log("CREATE_NEIGHBORHOOD")
				this.addNeighborhoodToStore(action.newNeighborhood)
			}	
				}
			case "CREATE_SUBNEIGHBORHOOD":{
				console.log("CREATE_SUBNEIGHBORHOOD")
				this.addSubNeighborhood(action.newSubNeighborhood)
			}	
			case "FETCH_USERS":{
				console.log("FETCH_USERS")
				this.setUsersInStore(action.allUsers)
			}	
			case "FETCH_CHECKINS":{
				console.log("FETCH_CHECKINS")
				this.setCheckinsInStore(action.allCheckIns)
			}	
			case "FETCH_DISHES":{
				console.log("FETCH_DISHES")
				this.setDishesInStore(action.allDishes)
			}	
			case "FETCH_GENRES":{
				console.log("FETCH_GENRES")
				this.setGenresInStore(action.allGenres)
			}	
			case "FETCH_NEIGHBORHOODS":{
				console.log("FETCH_NEIGHBORHOODS")
				this.setNeighborhoodsInStore(action.allNeighborhoods)
			}	
			case "FETCH_SUBNEIGHBORHOODS":{
				console.log("FETCH_SUBNEIGHBORHOODS")
				this.setSubneihborhoodsInStore(action.allSubNeighborhoods)
			}	
			case "FETCH_REVIEWS":{
				console.log("FETCH_REVIEWS")
				this.setReviewsInStore(action.allReviews)
			}	
			case "FETCH_SPOTS":{
				console.log("FETCH_SPOTS")
				this.setSpotsInStore(action.allSpots)
			}

					
		}
	}
const fixinsStore = new FixinsStore;
dispatcher.register(fixinsStore.handleActions.bind(fixinsStore));
export default fixinsStore;
