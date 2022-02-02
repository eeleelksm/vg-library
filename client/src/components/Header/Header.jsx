import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

function Header({ navOpen, setNavOpen }) {
	return (
		<header className={"header " + (navOpen && "active")}>
			<div className="wrap">
				<div className="left">
					<Link to="/" className="logo">
						Playbox
					</Link>
				</div>
				<div className="right">
					<div className="hamburger" onClick={() => setNavOpen(!navOpen)}>
						<span className="line"></span>
						<span className="line"></span>
						<span className="line"></span>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
