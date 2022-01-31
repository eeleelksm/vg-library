import React from "react";
import "../../index.css";

function Nav() {
	return (
		<nav>
			<ul className="nav">
				<li>
					<a href="#home" className="nav-names">
						Home
					</a>
				</li>
				<li>
					<a href="#games" className="nav-names">
						View Games
					</a>
				</li>
				<li>
					<a href="#saved-games" className="nav-names">
						Your Saved Games
					</a>
				</li>
				<li>
					<a href="#login" className="nav-names">
						Login
					</a>
				</li>
				<li>
					<a href="#signup" className="nav-names">
						Signup
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
