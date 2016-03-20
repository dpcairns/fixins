import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, hashHistory } from "react-router"

import Splash from "./js/components/Splash"
import Layout from "./js/components/Layout"
import Admin from "./js/components/utils/Admin"


const app = document.getElementById('app');

ReactDOM.render(
<Router history={hashHistory}>
	<Route path="/" component={Splash}></Route>
	<Route path="index" name="index" component={Layout}>
		<IndexRoute component={Admin}></IndexRoute>
	</Route>
</Router>, app);
