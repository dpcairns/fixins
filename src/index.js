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
import LogInPage from './js/components/pages/LogInPage'
import SignUpPage from './js/components/pages/SignUpPage'
import NewCheckInPage from './js/components/pages/NewCheckInPage'
import MyDashboard from './js/components/pages/MyDashboard'


const app = document.getElementById('app');


let initialState = {
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

function requireAuth(nextState, replaceState) {
	let state = store.getState()
console.log(state.currentUser._id)
	  if (state.currentUser._id !== null){
		  window.locaton = '/login'
										}
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
		<Route name="login" path="login" component={LogInPage}></Route>
		<Route name="myDashboard" path="myDashboard" component={MyDashboard}></Route>
		<Route name="signup" path="signup" component={SignUpPage}></Route>
		<Route name="newCheckIn" path="newCheckIn" component={NewCheckInPage}></Route>

		<Route name= "mapPage" path="mapPage" component={MapContainer}></Route>

	</Route>
</Router>
</Provider>, app);
