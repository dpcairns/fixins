import { connect } from 'react-redux'
import * as FixinsActions from "../actions/FixinsActions"
import Splash from '../components/Splash'



const mapStateToProps = (state) => {
  return {
    genres: state.genres,
    spots: state.spots,
    dishes: state.dishes,
    users: state.users,
    neighborhoods: state.neighborhoods,
    subNeighborhoods: state.subNeighborhoods,
    reviews: state.reviews,
    checkIns: state.checkIns
  }
}

function putOneSpotInState(_id){
  return {type: "PUT_ONE_SPOT_IN_STATE", _id:_id}
}

function putOneSubNeighborhoodInState(_id){
  return {type: "PUT_ONE_SUBNEIGHBORHOOD_IN_STATE", _id:_id}
}

function putOneDishInState(_id){
  return {type: "PUT_ONE_DISH_IN_STATE", _id:_id}
}
function putOneUserInState(_id){
  return {type: "PUT_ONE_USER_IN_STATE", _id:_id}
}


function mapDispatchToProps(dispatch) {
  return {
      initializeSubNeighborhoods: () => FixinsActions.initializeSubNeighborhoods(dispatch),
      initializeNeighborhoods: () => FixinsActions.initializeNeighborhoods(dispatch),
      initializeGenres: () => FixinsActions.initializeGenres(dispatch),
      initializeSpots: () => FixinsActions.initializeSpots(dispatch),
      initializeUsers: () => FixinsActions.initializeUsers(dispatch),
      initializeReviews: () => FixinsActions.initializeReviews(dispatch),
      initializeDishes: () => FixinsActions.initializeDishes(dispatch),
      initializeCheckIns: () => FixinsActions.initializeCheckIns(dispatch),

          putOneUserInState: (_id) => dispatch(putOneUserInState(_id)),
          putOneSpotInState: (_id) => dispatch(putOneSpotInState(_id)),
      		putOneSubNeighborhoodInState: (_id) => dispatch(putOneSubNeighborhoodInState(_id)),
      		putOneDishInState: (_id) => dispatch(putOneDishInState(_id))
    }
}

const SplashContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash)

export default SplashContainer
