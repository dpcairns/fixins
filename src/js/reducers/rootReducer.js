import { combineReducers } from 'redux'
import auth from "../components/utils/AuthModule"
import checkInForm from "../components/utils/CheckInFormRedux"
import {reducer as formReducer} from 'redux-form';


const searchName = (state = "", action) => {
    switch(action.type) {
      case 'NAME_SEARCH':
      return action.searchName
      default: return state
    }
}
const mapStuff = (state = {}, action) => {
    switch(action.type) {
      case 'MAP_CLICK':
      return Object.assign({}, {
      ...action.payload
          })
      default: return state
        }
      }

const currentUser = (state = {}, action) => {
    switch(action.type) {
      case 'CHECK_FOR_SESSION':
      return Object.assign({}, {
      ...action.user
          })
      case 'LOG_IN':
      return Object.assign({}, {
      ...action.user
          })
      case 'LOG_OUT':
      return Object.assign({}, {
        user: {}
      })
    default:
      return state
    }
}

const showReviewModal = (state = "", action) => {
  switch (action.type) {
    case "TOGGLE_REVIEW_MODAL":
    if(state===false){
    return true}
    else{return false}
    default:
    return state
  }
}



const showGenresModal = (state = "", action) => {
  switch (action.type) {
    case "TOGGLE_GENRE_MODAL":
    if(state === false){
    return true}
    else{return false}
    default:
    return state
  }
}


const showCheckInModal = (state = "", action) => {
  switch (action.type) {
    case "TOGGLE_CHECKIN_MODAL":
    if(state === false){
    return true}
    else{return false}
    default:
    return state
  }
}


const showSignUpModal = (state = "", action) => {
  switch (action.type) {
    case "TOGGLE_SIGNUP_MODAL":
    if(state===false){
    return true}
    else{return false}
    default:
    return state
  }
}


const showLoginModal = (state = "", action) => {
  switch (action.type) {
    case "TOGGLE_LOGIN_MODAL":
    if(state === false){
    return true}
    else{return false}
    default:
    return state
  }
}


const showDishModal = (state = "", action) => {
  switch (action.type) {
    case "TOGGLE_DISH_MODAL":
    if(state === false){
    return true}
    else{return false}
    default:
    return state
  }
}


const showSpotModal = (state = "", action) => {
  switch (action.type) {
    case "TOGGLE_SPOT_MODAL":
    if(state === false){
    return true}
    else{return false}
    default:
    return state
  }
}

const neighborhood = (state = "", action) => {
  switch (action.type) {
    case 'CREATE_NEIGHBORHOOD':
      return {
        _id: action._id,
        neighborhood_name: action.neighborhood_name,
        neighborhood_subNeighborhoods: action.neighborhood_subNeighborhoods
      }
    case 'PUT_ONE_NEIGHBORHOOD_IN_STATE':
      return Object.assign({}, {
      _id: action._id
          })
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
      case 'REMOVE_NEIGHBORHOOD':
      return state.filter(x =>{
       return x._id !== action._id

     })
    case 'FETCH_NEIGHBORHOODS':
      if(state.length === 0){
      return [
        ...state, ...action.allNeighborhoods
      ]
    }
      else{
        return state
      }
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
        review_stars: action.review_stars,
        review_user: action.review_user,
        review_date: action.review_date,
        review_words: action.review_words
      }
    default:
      return state
  }
}

const reviews = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_REVIEW':
    console.log(action)
      return [
        ...state, review(undefined, action)
      ]
    case 'FETCH_REVIEWS':
    if(state.length === 0){
    return [
      ...state, ...action.allReviews
    ]
  }
    else{
      return state
    }
      case 'REMOVE_REVIEW':
      return state.filter(x =>{
       return x._id !== action._id

     })

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
        checkIn_blurb: action.checkIn_blurb,
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
        ...state, checkIn(undefined, action)
      ]
    case 'FETCH_CHECKINS':
    if(state.length === 0){
        return [
          ...state, ...action.allCheckIns
        ]
      }
        else{
          return state
    }
      case 'REMOVE_CHECKIN':
      return state.filter(x =>{
       return x._id !== action._id

     })

    default:
      return state
  }
}

const user = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        _id: action._id,
        username: action.username,
        password: action.password,
        user_sub_neighborhood: action.user_sub_neighborhood,
        user_friends: action.user_friends,
        user_favorites: action.user_favorites,
        user_checkIns: action.user_checkIns,
        user_reviews: action.user_reviews
      }
      case 'PUT_ONE_USER_IN_STATE':
      return Object.assign({}, {
        _id: action._id
    })
    default:
      return state
  }
}

const users = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return [
        ...state, user(undefined, action)
      ]
    case 'FETCH_USERS':
    if(state.length === 0){
        return [
          ...state, ...action.allUsers
        ]
      }
        else{
          return state
    }
      case 'REMOVE_USER':
      return state.filter(x =>{
       return x._id !== action._id

     })

    default:
      return state
      }
  }

const spot = (state = "", action) => {
  switch (action.type) {
    case 'CREATE_SPOT':
      return {
        _id: action._id,
        spot_name: action.spot_name,
        spot_genres: action.spot_genres,
        spot_dishes: action.spot_dishes,
        spot_blurb: action.spot_blurb,
        spot_subNeighborhood: action.spot_subNeighborhood,
        spot_coordinates: action.spot_coordinates,
        spot_address: action.spot_address,
        addDate: action.addDate
      }
    case 'CHANGED_SPOT':
      return {
        _id: action._id,
        spot_name: action.spot_name,
        spot_genres: action.spot_genres,
        spot_dishes: action.spot_dishes,
        spot_blurb: action.spot_blurb,
        spot_subNeighborhood: action.spot_subNeighborhood,
        spot_coordinates: action.spot_coordinates,
        approved: action.approved,
        addDate: action.addDate
      }
    case 'PUT_ONE_SPOT_IN_STATE':
      return Object.assign({}, {
        _id: action._id
    })
    default:
      return state
  }
}

const spots = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_SPOT':
      return [
        ...state, spot(undefined, action)
      ]
    case 'FETCH_SPOTS':
      if(state.length === 0){
      return [
        ...state, ...action.allSpots
      ]
    }
      else{
        return state
    }
      case 'REMOVE_SPOT':
      return state.filter(x =>{
       return x._id !== action._id

     })
     case 'CHANGED_SPOT':
     return [
       ...state.filter(x =>{
      return x._id !== action._id
    }), spot(state, action)
  ]
    default:
      return state
  }
}

const dish = (state = "", action) => {
  switch (action.type) {
    case 'CREATE_DISH':
      return {
        _id: action._id,
        dish_name: action.dish_name,
        dish_blurb: action.dish_blurb,
        dish_subNeighborhood: action.dish_subNeighborhood,
        dish_spot: action.dish_spot,
        dish_checkIns: action.dish_checkIns,
        dish_reviews: action.dish_reviews,
        dish_calories: action.dish_calories,
        dish_price: action.dish_price
      }
      case 'CHANGED_DISH':
        return {
          _id: action._id,
          dish_name: action.dish_name,
          dish_blurb: action.dish_blurb,
          dish_subNeighborhood: action.dish_subNeighborhood,
          dish_spot: action.dish_spot,
          dish_checkIns: action.dish_checkIns,
          dish_reviews: action.dish_reviews,
          dish_calories: action.dish_calories,
          dish_price: action.dish_price,
          approved: action.approved,
        }

    case 'PUT_ONE_DISH_IN_STATE':
      return Object.assign({}, {
        _id: action._id
    })
    default:
      return state
  }
}

const dishes = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_DISH':
      return [
        ...state, dish(undefined, action)
      ]
    case 'REMOVE_DISH':
        return state.filter(x =>{
         return x._id !== action._id

       })
    case 'CHANGED_DISH':
       return [
         ...state.filter(x =>{
        return x._id !== action._id
      }), dish(state, action)
    ]
    case 'FETCH_DISHES':
        if(state.length === 0){
        return [
          ...state, ...action.allDishes
        ]
      }
        else{
          return state
        }
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
        subNeighborhood_spots: action.subNeighborhood_spots,
        subNeighborhood_users: action.subNeighborhood_users,
        sub_neighborhood_neighborhood: action.sub_neighborhood_neighborhood
      }
    case 'PUT_ONE_SUBNEIGHBORHOOD_IN_STATE':
      return Object.assign({}, {
      _id: action._id
          })
    default:
      return state
  }
}

const subNeighborhoods = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_SUBNEIGHBORHOOD':
      return [
        ...state, subNeighborhood(undefined, action)
      ]
      case 'REMOVE_SUBNEIGHBORHOOD':
      return state.filter(x =>{
       return x._id !== action._id

     })
    case 'FETCH_SUBNEIGHBORHOODS':
        if(state.length === 0){
        return [
          ...state, ...action.allSubNeighborhoods
        ]
      }
        else{
          return state
        }

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

      case 'PUT_ONE_GENRE_IN_STATE':
      return Object.assign({}, {
        _id: action._id
    })
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
      return state.filter(x =>{
       return x._id !== action._id

     })
    case 'FETCH_GENRES':
        if(state.length === 0){
        return [
          ...state, ...action.allGenres
        ]
      }
        else{
          return state
    }
    default:
      return state
  }
}

const jackpot = (state = "", action) => {
  switch (action.type) {
    case 'JACKPOT':
    return "block"
    case 'NO_DICE':
    return "none"
  default:
    return state
     }
   }

const hiddenValue = (state = "", action) => {
  switch (action.type) {
    case 'TOGGLE_HIDDEN':
    console.log("toggle_hidden in reducer")
    if (state === "none"){
        return "block"
    }
    else if(state === "block"){
      return "none"
    }
  default:
    return state
  }
}

const FixinsApp = combineReducers({
  searchName,
  mapStuff,
  showDishModal,
  showLoginModal,
  showSpotModal,
  showSignUpModal,
  showReviewModal,
  showGenresModal,
  showCheckInModal,
  hiddenValue,
  auth,
  jackpot,
  currentUser,
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
  genres,
  form: formReducer,
})

export default FixinsApp
