import { connect } from 'react-redux'
import * as FixinsActions from "../actions/FixinsActions"
import Splash from '../components/Splash'

const mapStateToProps = (state) => {
  return {
    allReviews: state.reviews,
    genres: state.genres,
    spots: state.spots,
    dishes: state.dishes,
    users: state.users,
    neighborhoods: state.neighborhoods,
    subNeighborhoods: state.subNeighborhoods,
    reviews: state.reviews,
    checkIns: state.checkIns,
    jackpot: state.jackpot,
    currentUser: state.currentUser
  }
}

function noDice(){
  return {type: "NO_DICE"}
}
function jackpotGo(){
  return {type: "JACKPOT"}
}

const userLogout = () => {
        return {
          type: "LOG_OUT",
	       }
    }


function mapDispatchToProps(dispatch) {
  return {
      jackpotGo: () => dispatch(jackpotGo()),
      noDice: () => dispatch(noDice()),
      logout: () => dispatch(logout()),
      checkForSession: () => FixinsActions.checkForSession(dispatch),
      initializeSubNeighborhoods: () => FixinsActions.initializeSubNeighborhoods(dispatch),
      initializeNeighborhoods: () => FixinsActions.initializeNeighborhoods(dispatch),
      initializeGenres: () => FixinsActions.initializeGenres(dispatch),
      initializeSpots: () => FixinsActions.initializeSpots(dispatch),
      initializeUsers: () => FixinsActions.initializeUsers(dispatch),
      initializeReviews: () => FixinsActions.initializeReviews(dispatch),
      initializeDishes: () => FixinsActions.initializeDishes(dispatch),
      initializeCheckIns: () => FixinsActions.initializeCheckIns(dispatch),

          putOneUserInState: (_id) => dispatch(FixinsActions.putOneUserInState(_id)),
          putOneSpotInState: (_id) => dispatch(FixinsActions.putOneSpotInState(_id)),
      		putOneSubNeighborhoodInState: (_id) => dispatch(FixinsActions.putOneSubNeighborhoodInState(_id)),
      		putOneDishInState: (_id) => dispatch(FixinsActions.putOneDishInState(_id))
    }
}

const SplashContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash)

export default SplashContainer
