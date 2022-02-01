import React from "react";
import "./nav.scss";

function Nav({ navOpen, setNavOpen }) {
	return (
		<nav className={"navbar " + (navOpen && "active")}>
			<ul>
				<li onClick={() => setNavOpen(false)}>
					<a href="#home">Home</a>
				</li>
				<li onClick={() => setNavOpen(false)}>
					<a href="#search-games">Add + View Games</a>
				</li>
				<li onClick={() => setNavOpen(false)}>
					<a href="#saved-games">Your Saved Games</a>
				</li>
				<li onClick={() => setNavOpen(false)}>
					<a href="#login">Log In</a>
				</li>
				<li onClick={() => setNavOpen(false)}>
					<a href="#signup">Signup</a>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
