import React, { useState } from "react";
import {
	ApolloProvider,
	ApolloClient,
	InMemoryCache,
	createHttpLink,
} from "@apollo/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { setContext } from "@apollo/client/link/context";

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import ListedGames from "./pages/ListedGames/ListedGames";
import SavedGames from "./pages/SavedGames/SavedGames";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import "./App.scss";

const httpLink = createHttpLink({
	uri: "http://localhost:3003/graphql",
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem("id_token");
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : "",
		},
	};
});
const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

function App() {
	// the navigation bar opening and closing
	const [navOpen, setNavOpen] = useState(false);

	return (
		<ApolloProvider client={client}>
			<Router>
				<div className="app">
					<Header navOpen={navOpen} setNavOpen={setNavOpen} />
					<Nav navOpen={navOpen} setNavOpen={setNavOpen} />
					<div className="sections">
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/listed-games" component={ListedGames} />
							<Route exact path="/saved-games" component={SavedGames} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/signup" component={Signup} />
						</Switch>
					</div>
				</div>
			</Router>
		</ApolloProvider>
	);
}

export default App;
