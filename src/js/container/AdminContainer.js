import { connect } from 'react-redux'
import Admin from '../components/utils/Admin'
import * as FixinsActions from "../actions/FixinsActions"

const mapStateToProps = (state) => {
  return {
    allGenres: state.genres,
    allSpots: state.spots,
    allDishes: state.dishes,
    allUsers: state.users,
    allNeighborhoods: state.neighborhoods,
    allSubNeighborhoods: state.subNeighborhoods,
    allReviews: state.reviews,
    allCheckIns: state.checkIns
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

          putOneUserInState: (_id) => dispatch(FixinsActions.putOneUserInState(_id)),
          putOneSpotInState: (_id) => dispatch(FixinsActions.putOneSpotInState(_id)),
          putOneGenreInState: (_id) => dispatch(FixinsActions.putOneGenreInState(_id)),
          putOneSubNeighborhoodInState: (_id) => dispatch(FixinsActions.putOneSubNeighborhoodInState(_id)),
          putOneDishInState: (_id) => dispatch(FixinsActions.putOneDishInState(_id)),
          putOneNeighborhoodInState: (_id) => dispatch(FixinsActions.putOneNeighborhoodInState(_id)),


          createSubNeighborhood: (newSubNeighborhood) => FixinsActions.createSubNeighborhood(newSubNeighborhood, dispatch),
          createNeighborhood: (newNeighborhood) => FixinsActions.createNeighborhood(newNeighborhood, dispatch),
          createGenre: (newGenre) => FixinsActions.createGenre(newGenre, dispatch),
          createUser: (newUser) => FixinsActions.createUser(newUser, dispatch),
          createSpot: (newSpot) => FixinsActions.createSpot(newSpot, dispatch),
          createDish: (newDish) => FixinsActions.createDish(newDish, dispatch),
          createReview: (newReview) => FixinsActions.createReview(newReview, dispatch),
          createCheckIn: (newCheckIn) => FixinsActions.createCheckIn(newCheckIn, dispatch),

          removeSubNeighborhood: (id) => FixinsActions.removeSubNeighborhood(id, dispatch),
          removeNeighborhood: (id) => FixinsActions.removeNeighborhood(id, dispatch),
          removeGenre: (id) => FixinsActions.removeGenre(id, dispatch),
          removeUser: (id) => FixinsActions.removeUser(id, dispatch),
          removeSpot: (id) => FixinsActions.removeSpot(id, dispatch),
          removeDish: (id) => FixinsActions.removeDish(id, dispatch),
          removeReview: (id) => FixinsActions.removeReview(id, dispatch),
          removeCheckIn: (id) => FixinsActions.removeCheckIn(id, dispatch),

          findAndChangeSubNeighborhood: (newInfo) => FixinsActions.findAndChangeSubNeighborhood(newInfo, dispatch),
          findAndChangeNeighborhood: (newInfo) => FixinsActions.findAndChangeNeighborhood(newInfo, dispatch),
          findAndChangeGenre: (newInfo) => FixinsActions.findAndChangeGenre(newInfo, dispatch),
          findAndChangeUser: (newInfo) => FixinsActions.findAndChangeUser(newInfo, dispatch),
          findAndChangeSpot: (newInfo) => FixinsActions.findAndChangeSpot(newInfo, dispatch),
          findAndChangeDish: (newInfo) => FixinsActions.findAndChangeDish(newInfo, dispatch),
          findAndChangeReview: (newInfo) => FixinsActions.findAndChangeReview(newInfo, dispatch),
          findAndChangeCheckIn: (newInfo) => FixinsActions.findAndChangeCheckIn(newInfo, dispatch)

  }
}
const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(Admin)

export default AdminContainer
