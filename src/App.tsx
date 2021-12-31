import React from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Error from "./pages/Error";
import Listing from "./pages/Listing";
import Learn from "./pages/Learn";
import Shop from "./pages/Shop";

function App() {
	return (
		<Router basename="/">
			<Switch>
				<Route path="/" component={Listing} exact />
				<Route path="/learn/:id" component={Learn} />
				<Route path="/shop/:id" component={Shop} />
				<Route component={Error} />
			</Switch>
		</Router>
	);
}

export default App;
