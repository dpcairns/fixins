import { connect } from 'react-redux'
import * as FixinsActions from "../actions/FixinsActions"
import Splash from '../components/Splash'



const mapStateToProps = (state) => {
  return {
    genres: state.allGenres,
    spots: state.allSpots,
    dishes: state.allDishes,
    users: state.allUsers,
    neighborhoods: state.allNeighborhoods,
    subNeighborhoods: state.allSubNeighborhoods,
    reviews: state.allReviews,
    checkIns: state.allCheckIns
  }
  console.log("here is state")
  console.log(state)
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
    }
}

const SplashContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash)

export default SplashContainer
