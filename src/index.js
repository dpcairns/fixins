import React from "react"
import ReactDOM from "react-dom"
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, IndexRoute, hashHistory } from "react-router"
import 'babel-polyfill'
import Layout from "./js/components/Layout"
import SplashContainer from "./js/container/SplashContainer"
import AdminContainer from "./js/container/AdminContainer"
import MapContainer from "./js/container/MapContainer"
import FixinsApp from './js/reducers/rootReducer'
import UserDetailContainer from './js/components/details/UserDetail'
import GenreDetailContainer from './js/components/details/GenreDetail'
import SpotDetailContainer from './js/components/details/SpotDetail'
import DishDetailContainer from './js/components/details/DishDetail'
import NeighborhoodDetail from './js/components/details/NeighborhoodDetail'
import SubNeighborhoodDetailContainer from './js/components/details/SubNeighborhoodDetail'
import LogInPageRedux from './js/components/pages/LogInPageRedux'
import SignUpPage from './js/components/pages/SignUpPage'
import NewCheckInPage from './js/components/pages/NewCheckInPage'
import NewReviewPage from './js/components/pages/NewReviewPage'
import NewDishPage from './js/components/pages/NewDishPage'
import NewSpotPage from './js/components/pages/NewSpotPage'
import AllNeighborhoods from './js/components/details/AllNeighborhoods'
import AllGenres from './js/components/details/AllGenres'
import MyDashboard from './js/components/pages/MyDashboard'
import { loginSuccess } from './js/components/utils/AuthModule'

const app = document.getElementById('app');


let initialState = {
	hiddenValue: "none",
	jackpot: "none",
	currentUser: {},
	genre: "",
	genres: [],
	neighborhood: "",
	neighborhoods: [],
	spot: "",
	spots: [],
	dish: "",
	dishes: [],
	user: {},
	users: [],
	review: "",
	reviews: [],
	checkIn: "",
	checkIns: [],
	subNeighborhood: "",
	subNeighborhoods: [],
}

let createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
let store = createStoreWithMiddleware(
											FixinsApp,
											initialState,
											window.devToolsExtension ? window.devToolsExtension() : f => f
										)

/*function requireAuth(nextState, replaceState) {
	let state = store.getState()
	  if (state.currentUser._id !== null){
		  window.locaton = '/login'
										}
						}
*/

						let token = localStorage.getItem('token')
						let username = localStorage.getItem('username')

						if (token !== null) {
						  store.dispatch(loginSuccess(token, username))
						}


ReactDOM.render(
	<Provider store={store}>
<Router history={hashHistory}>
	<Route path="/" component={SplashContainer}></Route>
	<Route path="index" component={Layout}>
		<IndexRoute component={AdminContainer}></IndexRoute>
		<Route name="user" path="/user/:id" component={UserDetailContainer}></Route>
		<Route name="genre" path="/genre/:id" component={GenreDetailContainer}></Route>
		<Route name="spot" path="/spot/:id" component={SpotDetailContainer}></Route>
		<Route name="dish" path="/dish/:id" component={DishDetailContainer}></Route>
		<Route name="subNeighborhood" path="/subNeighborhood/:id" component={SubNeighborhoodDetailContainer}></Route>
		<Route name="neighborhood" path="/neighborhood/:id" component={NeighborhoodDetail}></Route>
		<Route name="login" path="login" component={LogInPageRedux}></Route>
		<Route name="myDashboard" path="myDashboard" component={MyDashboard}></Route>
		<Route name="signup" path="signup" component={SignUpPage}></Route>
		<Route name="newCheckIn" path="newCheckIn" component={NewCheckInPage}></Route>
		<Route name="newReview" path="newReview" component={NewReviewPage}></Route>
		<Route name="newDish" path="newDish" component={NewDishPage}></Route>
		<Route name="newSpot" path="newSpot" component={NewSpotPage}></Route>
		<Route name="allNeighborhoods" path="allNeighborhoods" component={AllNeighborhoods}></Route>
		<Route name="allGenres" path="allGenres" component={AllGenres}></Route>
		<Route name= "mapPage" path="mapPage" component={MapContainer}></Route>

	</Route>
</Router>
</Provider>, app);
