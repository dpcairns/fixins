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
		console.log(checkIn)
		this.checkIns.push(checkIn)
		this.emit("changedCheckIns")
	}

	addGenreToStore(genre){
		this.genres.push(genre)
		this.emit("changedGenres")
	}

	findAndRemoveCheckIn(ID){
		for(let i = 0; i < this.checkIns.length; i++){
			if(this.checkIns[i]._id === ID){
				this.checkIns.splice(i, 1);
				break;
			}
		}
		this.emit("changedCheckIns")

	}

	findAndRemoveDish(ID){
		for(let i = 0; i < this.dishes.length; i++){
			if(this.dishes[i]._id === ID){
				this.dishes.splice(i, 1);
				break;
			}
		}
		this.emit("changedDishes")

	}

	findAndRemoveReview(ID){
		for(let i = 0; i < this.reviews.length; i++){
			if(this.reviews[i]._id === ID){
				this.reviews.splice(i, 1);
				break;
			}
		}
		this.emit("changedReviews")

	}

	findAndRemoveSpot(ID){
		for(let i = 0; i < this.spots.length; i++){
			if(this.spots[i]._id === ID){
				this.spots.splice(i, 1);
				break;
			}
		}
		this.emit("changedSpots")

	}

	findAndRemoveSubNeighborhood(ID){
		for(let i = 0; i < this.subNeighborhoods.length; i++){
			if(this.subNeighborhoods[i]._id === ID){
				this.subNeighborhoods.splice(i, 1);
				break;
			}
		}
		this.emit("changedSubNeighborhoods")

	}

	findAndRemoveNeighborhood(ID){
		for(let i = 0; i < this.neighborhoods.length; i++){
			if(this.neighborhoods[i]._id === ID){
				this.neighborhoods.splice(i, 1);
				break;
			}
		}
		this.emit("changedNeighborhoods")

	}

	findAndRemoveGenre(ID){
			for(let i = 0; i < this.genres.length; i++){
			if(this.genres[i]._id === ID){
				this.genres.splice(i, 1);
				break;
			}
		}
		this.emit("changedGenres")

	}

	findAndRemoveUser(ID){
		for(let i = 0; i < this.users.length; i++){
			if(this.users[i]._id === ID){
				this.users.splice(i, 1);
				break;
			}
		}
		this.emit("changedUsers")

	}


//////

		modifyStoreCheckIn(changedCheckIn){
		for (let i in this.checkIns){
			if (this.checkIns[i]._id = changedCheckIn._id){
				this.checkIns[i] = changedCheckIn
				break;
			}
		}
		this.emit("changedCheckIns")

	}

	modifyStoreDish(changedDish){
			for (let i in this.dishes){
			if (this.dishes[i]._id = changedDish._id){
				this.dishes[i] = changedDish
				break;
			}
		}
		this.emit("changedDishes")

	}

	modifyStoreReview(changedReview){
		for (let i in this.review){
			if (this.reviews[i]._id = changedReview._id){
				this.reviews[i] = changedReview
				break;
			}
		}
		this.emit("changedReviews")

	}

	modifyStoreSpot(changedSpot){
			for (let i in this.spots){
			if (this.spots[i]._id = changedSpot._id){
				this.spots[i] = changedSpot
				break;
			}
		}
		this.emit("changedSpots")

	}

	modifyStoreSubNeighborhood(changedSubNeighborhood){
		for (let i in this.subNeighborhoods){
			if (this.subNeighborhoods[i]._id = changedSubNeighborhood._id){
				this.subNeighborhoods[i] = changedSubNeighborhood
				break;
			}
		}
		this.emit("changedSubNeighborhoods")

	}

	modifyStoreNeighborhood(changedNeighborhood){
		for (let i in this.neighborhoods){
			if (this.neighborhoods[i]._id = changedNeighborhood._id){
				this.neighborhoods[i] = changedNeighborhood
				break;
			}
		}
		this.emit("changedNeighborhoods")

	}

	modifyStoreGenre(changedGenre){
		for (let i in this.genres){
			if (this.genres[i]._id = changedGenre._id){
				this.genres[i] = changedGenre
				break;
			}
		}
		this.emit("changedGenres")

	}

	modifyStoreUser(changedUser){
		for (let i in this.users){
			if (this.users[i]._id = changedUser._id){
				this.users[i] = changedUser
				break;
			}
		}
		this.emit("changedUsers")

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
				console.log(action.postedCheckIn)
				this.addCheckInToStore(action.postedCheckIn)
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


			case "CHANGED_CHECKIN":
				console.log("CHANGED_CHECKIN")
				this.modifyStoreCheckIn(action.changedCheckIn)
				break;
				
			case "CHANGED_DISH":
				console.log("CHANGED_DISH")
				this.modifyStoreDish(action.changedDish)
				break;
				
			case "CHANGED_GENRE":
				console.log("CHANGED_GENRE")
				this.modifyStoreGenre(action.changedGenre)
				break;
				
			case "CHANGED_NEIGHBORHOOD":
				console.log("CHANGED_NEIGHBORHOOD")
				this.modifyStoreNeighborhood(action.changedNeighborhood)
				break;
				
			case "CHANGED_SUBNEIGHBORHOOD":
				console.log("CHANGED_SUBNEIGHBORHOOD")
				this.modifyStoreSubNeighborhood(action.changedSubNeighborhood)
				break;

			case "CHANGED_REVIEW":
				console.log("CHANGED_REVIEW")
				this.modifyStoreReview(action.changedReview)
				break;
			
			case "CHANGED_SPOT":
				console.log("CHANGED_SPOT")
				this.modifyStoreSpot(action.changedSpot)
				break;
		
			case "CHANGED_USER":
					console.log("CHANGED_USER")
					console.log(action.changedUser)
				this.modifyStoreUser(action.changedUser)
				break;			
		}
	}
}
const fixinsStore = new FixinsStore;
dispatcher.register(fixinsStore.handleActions.bind(fixinsStore));
export default fixinsStore;
