import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import SearchGames from "./pages/SearchGames/SearchGames";
import SavedGames from "./pages/SavedGames/SavedGames";
import Contact from "./pages/Contact/Contact";
import "./App.scss";

function App() {
	return (
		<div className="app">
			<Header />
			test
			<div className="sections">
				<Home />
				<SearchGames />
				<SavedGames />
				<Contact />
			</div>
		</div>
	);
}

export default App;
