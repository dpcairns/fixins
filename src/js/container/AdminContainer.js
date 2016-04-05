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

          findAndChangeSubNeighborhood: (id) => FixinsActions.findAndChangeSubNeighborhood(id, dispatch),
          findAndChangeNeighborhood: (id) => FixinsActions.findAndChangeNeighborhood(id, dispatch),
          findAndChangeGenre: (id) => FixinsActions.findAndChangeGenre(id, dispatch),
          findAndChangeUser: (id) => FixinsActions.findAndChangeUser(id, dispatch),
          findAndChangeSpot: (id) => FixinsActions.findAndChangeSpot(id, dispatch),
          findAndChangeDish: (id) => FixinsActions.findAndChangeDish(id, dispatch),
          findAndChangeReview: (id) => FixinsActions.findAndChangeReview(id, dispatch),
          findAndChangeCheckIn: (id) => FixinsActions.findAndChangeCheckIn(id, dispatch)

  }
}
//everything listed above is available through this.props now in Admin...
const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(Admin)

export default AdminContainer

/*
const CheckInForm = connect(mapStateToProps)(CheckInForm)
const CheckInList = connect(mapStateToProps)(CheckInList)
const DishForm = connect(mapStateToProps)(DishForm)
const DishList = connect(mapStateToProps)(DishList)
const GenreForm = connect(mapStateToProps)(GenreForm)
const GenreList = connect(mapStateToProps)(GenreList)
const NeighborhoodForm = connect(mapStateToProps)(NeighborhoodForm)
const NeighborhoodList = connect(mapStateToProps)(NeighborhoodList)
const SubNeighborhoodForm = connect(mapStateToProps)(SubNeighborhoodForm)
const SubNeighborhoodList = connect(mapStateToProps)(SubNeighborhoodList)
const ReviewForm = connect(mapStateToProps)(ReviewForm)
const ReviewList = connect(mapStateToProps)(ReviewList)
const UserForm = connect(mapStateToProps)(UserForm)
const UserList = connect(mapStateToProps)(UserList)
const SpotForm = connect(mapStateToProps)(SpotForm)
const SpotList = connect(mapStateToProps)(SpotList) */
