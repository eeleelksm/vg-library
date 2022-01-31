import "./index.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

function App() {
	return (
		<div>
			<Header />
			<Nav />
			<Home />
			<div className="app">test</div>
		</div>
	);
}

export default App;
