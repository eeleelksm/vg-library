import { useEffect, useRef } from "react";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PersonIcon from "@mui/icons-material/Person";
import { init } from "ityped";
import "./home.scss";

function Home() {
	const textRef = useRef();

	useEffect(() => {
		// from the ityped documentation
		init(textRef.current, {
			showCursor: false,
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
				Playbox is an interactive library <br />
				where you can view and add video games <br />
				you'd like to enjoy for later or would like to recommend to others.
				<br />
				<br />
				View and add to our extensive library!
				<br />
			</p>
			<div className="contact">
				<span className="contact-us">Contact US</span>
				<span className="contact-links">
					<br />
					<a href="https://www.github.com/eeleelksm" target="_blank">
						Github
					</a>
					<br />
					<a
						href="https://www.linkedin.com/in/keshia-lee-martin-05388a75/"
						target="_blank"
					>
						LinkedIn
					</a>
					<br />
					<a href="mailto:keshialeemartin@gmail.com" target="_blank">
						Email
					</a>
				</span>
				<br />
				<div>
					{/* <EmailIcon fontSize="large" />
					<GitHubIcon fontSize="large" />
					<LinkedInIcon fontSize="large" />
					<PersonIcon fontSize="large" /> Keshia-Lee Martin */}
				</div>
			</div>
		</div>
	);
}

export default Home;
