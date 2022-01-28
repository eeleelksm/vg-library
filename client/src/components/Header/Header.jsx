import React from "react";
import "../../index.css";
import Nav from "../Nav/Nav.jsx";

function Header() {
	return (
		<div className="header-wrap">
			<a href="#home" className="logo">
				<img src="images/Playbox4.png" alt="" />
			</a>
			<div className="left"></div>
		</div>
	);
}

export default Header;
