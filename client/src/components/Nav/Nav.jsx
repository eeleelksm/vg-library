import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import "./nav.scss";

function Nav({ navOpen, setNavOpen }) {
	const logout = (event) => {
		event.preventDefault();
		Auth.logout();
	};

	return (
		<nav className={"navbar " + (navOpen && "active")}>
			<ul>
				<li onClick={() => setNavOpen(false)}>
					<Link to="/">Home</Link>
				</li>
				{Auth.loggedIn() ? (
					<>
						<li onClick={() => setNavOpen(false)}>
							<Link to="listed-games">Add + View Games</Link>
						</li>
						<li onClick={() => setNavOpen(false)}>
							<Link to="saved-games">Your Saved Games</Link>
						</li>
						<li onClick={() => setNavOpen(false)}>
							<Link to="/" onClick={logout}>
								Log Out
							</Link>
						</li>
					</>
				) : (
					<>
						<li onClick={() => setNavOpen(false)}>
							<Link to="login">Log In</Link>
						</li>
						<li onClick={() => setNavOpen(false)}>
							<Link to="signup">Signup</Link>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
}

export default Nav;
