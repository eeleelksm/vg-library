import React from "react";
// import Auth from "../../utils/auth";
import "./nav.scss";

function Nav({ navOpen, setNavOpen }) {
	// const logout = (event) => {
	// 	event.preventDefault();
	// 	Auth.logout();
	// };
	return (
		<nav className={"navbar " + (navOpen && "active")}>
			<ul>
				<li onClick={() => setNavOpen(false)}>
					<a href="/">Home</a>
				</li>
				{/* {Auth.loggedIn() ? (<> */}
				<li onClick={() => setNavOpen(false)}>
					<a href="#search-games">Add + View Games</a>
				</li>
				<li onClick={() => setNavOpen(false)}>
					<a href="#saved-games">Your Saved Games</a>
				</li>
				<li onClick={() => setNavOpen(false)}>
					<a href="#saved-games">
						{/* onClick={logout} */}
						Log Out
					</a>
				</li>
				{/* </>
				) : (
					<> */}
				<li onClick={() => setNavOpen(false)}>
					<a href="#login">Log In</a>
				</li>
				<li onClick={() => setNavOpen(false)}>
					<a href="#signup">Signup</a>
				</li>
				{/* </> */}
				{/* )} */}
			</ul>
		</nav>
	);
}

export default Nav;
