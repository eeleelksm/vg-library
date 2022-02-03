import { useEffect, useRef } from "react";
import { init } from "ityped";
import "./home.scss";

function Home() {
	const textRef = useRef();

	useEffect(() => {
		// from the ityped documentation
		init(textRef.current, {
			showCursor: true,
			backDelay: 1500,
			backSpeed: 60,
			strings: [
				"Fantasy",
				"Sci-Fi",
				"Thriller",
				"Horror",
				"Comedy",
				"Documentaries",
				"Romance",
				"Anime",
			],
		});
	});

	return (
		<div className="home" id="/">
			<h1>welcome to your playbox!</h1>
			<h3>
				Do you like <span ref={textRef}></span>?
			</h3>

			<p className="description">
				<br />
				Looking for a video game recommendation based on the movie genres you love?
				<br />
				Want to add a video game recommendation yourself?
				<br />
				<br />
				<span>This page is for you</span>
				<br />
				<br />
				Playbox is an interactive library where you can view and add video games you'd
				like to enjoy for later or would like to recommend to others.
				<br />
				View and add to our extensive library!
			</p>
			<div className="contact">
				Contact us! Email: Github: Created by: Keshia-Lee Martin
			</div>
		</div>
	);
}

export default Home;
