import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./js/components/Layout"
import Admin from "./js/components/utils/Admin";


const app = document.getElementById('app');

ReactDOM.render(
<Router history={hashHistory}>
	<Route path="/" component={Splash}></Route>
	<Route path="index/" name="index" component={Layout}>
		<IndexRoute component={Admin}></IndexRoute>
//		<Route path="/newPattern" name="newPattern" component={PatternForm}></Route>
//		<Route path="/patterns" name="patterns" component={List}></Route>
//		<Route path="/patterns/:PatternId" component={Detail}></Route>
	</Route>
</Router>, app);
