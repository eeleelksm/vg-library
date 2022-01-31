import "./index.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

function App() {
	return (
		<div className="app">
			<Header />
			<Nav />
			<Home />
		</div>
	);
}

export default App;
