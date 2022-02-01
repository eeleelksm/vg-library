import React, { useState } from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import SearchGames from "./pages/SearchGames/SearchGames";
import SavedGames from "./pages/SavedGames/SavedGames";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import "./App.scss";

function App() {
	// the navigation bar opening and closing
	const [navOpen, setNavOpen] = useState(false);

	return (
		<div className="app">
			<Header navOpen={navOpen} setNavOpen={setNavOpen} />
			<Nav navOpen={navOpen} setNavOpen={setNavOpen} />
			<div className="sections">
				<Home />
				<SearchGames />
				<SavedGames />
				<Contact />
				<Login />
			</div>
		</div>
	);
}

export default App;
