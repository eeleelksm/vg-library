import React from "react";
import "./Header.css";

function Header() {
	return (
		<header>
			<div className="header-wrap">
				<div className="left">
					<a href="#home" className="logo">
						<img src="images/Playbox4.png" alt="" />
					</a>
				</div>
				<div className="right">test</div>
			</div>
		</header>
	);
}

export default Header;
