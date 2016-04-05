import { combineReducers } from 'redux'

const neighborhood = (state = "", action) => {
  switch (action.type) {
    case 'CREATE_NEIGHBORHOOD':
      return {
        _id: action._id,
        neighborhood_name: action.neighborhood_name,
        neighborhood_subNeighborhoods: action.neighborhood_subNeighborhoods
      }
    default:
      return state
  }
}

const neighborhoods = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_NEIGHBORHOOD':
      return [
        ...state, neighborhood(undefined, action)
      ]
    case 'FETCH_NEIGHBORHOODS':
      return [
        ...state, action.allNeighborhoods
      ]
    default:
      return state
  }
}

const review = (state = "", action) => {
  switch (action.type) {
    case 'CREATE_REVIEW':
      return {
        _id: action._id,
        reviewed_dish: action.reviewed_dish,
        review_author: action.review_author,
        review_date: action.review_date,
      }
    default:
      return state
  }
}

const reviews = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_REVIEW':
      return [
        ...state, review(undefined, action)
      ]
    case 'FETCH_REVIEWS':
    return [
      ...state, action.allReviews
    ]
      case 'REMOVE_REVIEW':
          return state.filter(x =>
            {
          if(x._id !== action._id){
              return x
           }
         }
        )

    default:
      return state
    }
  }

const checkIn = (state = "", action) => {
  switch (action.type) {
    case 'CREATE_CHECKIN':
      return {
        _id: action._id,
        checkIn_user: action.checkIn_user,
        checkIn_dish: action.checkIn_dish,
        checkIn_date: action.checkIn_date
      }
    default:
      return state
  }
}

const checkIns = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_CHECKIN':
      return [
        ...state, neighborhood(undefined, action)
      ]
    case 'FETCH_CHECKIN':
      return [
        ...state, action.allCheckIns
      ]
      case 'REMOVE_CHECKIN':
          return state.map(x =>{
           if (x._id !== action._id){
              return x
           }
         }
        )

    default:
      return state
  }
}

const user = (state = "", action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        _id: action._id,
        username: action.username,
        password: action.password,
        user_subNeighborhood: action.user_subNeighborhood,
        user_friends: action.user_friends,
        user_favorites: action.user_favorites,
        user_checkIns: action.user_checkIns,
        user_reviews: action.user_reviews
      }
    default:
      return state
  }
}

const users = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_USERS':
      return [
        ...state, neighborhood(undefined, action)
      ]
    case 'FETCH_USERS':
    console.log("FETCH_USERS says here's the action")
    console.log(action)
      return [
        ...state, ...action.allUsers
      ]
      case 'REMOVE_USER':
          return state.map(x =>{
           if (x._id !== action._id){
              return x
            }
           }
        )

    default:
      return state
      }
  }

const spot = (state = "", action) => {
  switch (action.type) {
    case 'CREATE_SPOT':
      return {
        _id: action._id,
        spot_subNeighborhood: action.spot_subNeighborhood,
        spot_coordinates: action.spot_coordinates,
      }
    default:
      return state
  }
}

const spots = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_SPOT':
      return [
        ...state, neighborhood(undefined, action)
      ]
    case 'FETCH_SPOTS':
      return [
        ...state, action.allSpots
      ]
      case 'REMOVE_SPOT':
          return state.map(x =>{
           if (x._id !== action._id){
              return x
           }
         }
        )
    /*case 'CHANGED_SPOT':
          return

          ...state.map(x => {
           if (x._id !== action._id){
              return x
           } else {
             return action.changedSpot
           }  ///okay so here, return state up to THISPOT, add THIS SPOT, return state after THISSPOT
        ).concat(state.slice(//take the slce from THISSPOT forward))
      }
      */
    default:
      return state
  }
}

const dish = (state = "", action) => {
  switch (action.type) {
    case 'CREATE_DISH':
      return {
        _id: action._id,
        dish_name: action.neighborhood_name,
        dish_subNeighborhood: action.neighborhood_subNeighborhoods,
        dish_spot: action.dish_spot,
        dish_checkIns: action.dish_checkIns,
        dish_reviews: action.dish_reviews,
        dish_calories: action.dish_calories,
        dish_price: action.dish_price
      }
    default:
      return state
  }
}

const dishes = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_DISH':
      return [
        ...state, neighborhood(undefined, action)
      ]
    case 'REMOVE_DISH':
        return state.map(x =>{
         if (x._id !== action._id){
            return x
         }
       }
      )
    /*case 'CHANGED_DISH':
      return [
        state.map(x =>
        dish(x, action)
        )
      ]
      */
    case 'FETCH_DISHES':
      return [
        ...state, action.allDishes
      ]
    default:
      return state
  }
}

const subNeighborhood = (state = "", action) => {
  switch (action.type) {
    case 'CREATE_SUBNEIGHBORHOOD':
      return {
        _id: action._id,
        subNeighborhood_name: action.subNeighborhood_name,
        subNeighborhood_spots: action.neighborhood_subNeighborhoods,
        subNeighborhood_users: action.neighborhood_subNeighborhoods
      }
    default:
      return state
  }
}

const subNeighborhoods = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_SUBNEIGHBORHOOD':
      return [
        ...state, subneighborhood(undefined, action)
      ]
    case 'FETCH_NEIGHBORHOODS':
      return [
        ...state, action.allSubNeighborhoods
      ]

    default:
      return state
  }
}


const genre = (state = "", action) => {
  switch (action.type) {
    case 'CREATE_GENRE':
      return {
        _id: action._id,
        genre_name: action.genre_name,
      }
    default:
      return state
  }
}

const genres = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_GENRE':
      return [
        ...state, genre(undefined, action)
      ]
      case 'REMOVE_GENRE':
          return state.map(x =>{
           if (x._id !== action._id){
              return x
           }
         }
        )
    case 'FETCH_GENRES':
      return [
        ...state, action.allGenres
      ]

    default:
      return state
  }
}


const FixinsApp = combineReducers({
  review,
  reviews,
  user,
  users,
  spot,
  spots,
  dish,
  dishes,
  checkIn,
  checkIns,
  neighborhood,
  neighborhoods,
  subNeighborhood,
  subNeighborhoods,
  genre,
  genres
})

export default FixinsApp
