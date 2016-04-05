import React from "react"
import ReactDOM from "react-dom"
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, IndexRoute, hashHistory } from "react-router"
import 'babel-polyfill'
import Splash from "./js/components/Splash"
import SplashContainer from "./js/container/SplashContainer"
import Layout from "./js/components/Layout"
import AdminContainer from "./js/container/AdminContainer"
import MapPage from "./js/components/MapPage"
import FixinsApp from './js/reducers/rootReducer'
const app = document.getElementById('app');

let store = createStore(
											FixinsApp,
											applyMiddleware(thunk)
										)
										console.log("the store:")
console.log(store.getState())
ReactDOM.render(
	<Provider store={store}>
<Router history={hashHistory}>
	<Route path="/" component={SplashContainer}></Route>
	<Route path="index" component={Layout}>
		<IndexRoute component={AdminContainer}></IndexRoute>
		<Route path="mapPage" component={MapPage}></Route>
	</Route>
</Router>
</Provider>, app);
