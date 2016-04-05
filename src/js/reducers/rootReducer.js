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
    if(state.length === 0){
    return [
      ...state, ...action.allReviews
    ]
  }
    else{
      return state
    }
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
    console.log(action)
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
      console.log(action._id)
          return state.map(x =>{
            console.log(x)
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
        spot_name: action.spot_name,
        spot_genres: action.spot_genres,
        spot_dish: action.spot_dishes,
        spot_blurb: action.spot_blurb,
        spot_subNeighborhood: action.spot_subNeighborhood,
        spot_coordinates: action.spot_coordinates,
        addDate: action.addDate
      }
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
          return state.map(x =>{
           if (x._id !== action._id){
              return x
           }
         })
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
        ...state, dish(undefined, action)
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
        ...state, subNeighborhood(undefined, action)
      ]
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
