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
const app = document.getElementById('app');


let initialState = {
	genre: "",
	genres: [],
	neighborhood: "",
	neighborhoods: [],
	spot: "",
	spots: [],
	dish: "",
	dishes: [],
	user: "",
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

ReactDOM.render(
	<Provider store={store}>
<Router history={hashHistory}>
	<Route path="/" component={SplashContainer}></Route>
	<Route path="index" component={Layout}>
		<IndexRoute component={AdminContainer}></IndexRoute>
		<Route path="mapPage" component={MapContainer}></Route>
	</Route>
</Router>
</Provider>, app);
