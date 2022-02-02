import React, { useState } from "react";
import {
	ApolloProvider,
	ApolloClient,
	InMemoryCache,
	createHttpLink,
} from "@apollo/client";

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

const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
});
function App() {
	// the navigation bar opening and closing
	const [navOpen, setNavOpen] = useState(false);

	return (
		<ApolloProvider client={client}>
			<div className="app">
				<Header navOpen={navOpen} setNavOpen={setNavOpen} />
				<Nav navOpen={navOpen} setNavOpen={setNavOpen} />
				<div className="sections">
					<Home />
					<ListedGames />
					<SavedGames />
					<Login />
					<Signup />
				</div>
			</div>
		</ApolloProvider>
	);
}

export default App;
