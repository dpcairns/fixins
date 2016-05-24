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
import InfographicPage from './js/components/InfographicPage'
import { loginSuccess } from './js/components/utils/AuthModule'

const app = document.getElementById('app');


let initialState = {
	searchName: "",
	mapStuff: {},
	showSignUpModal: false,
	showLoginModal: false,
	showDishModal: false,
	showReviewModal: false,
	showCheckInModal: false,
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
<Router history={hashHistory}>
	<Route name="/programming" path="programming" component={InfographicPage}></Route>
	</Route>
</Router>, app);
