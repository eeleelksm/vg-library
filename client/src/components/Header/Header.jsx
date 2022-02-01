import React from "react";
import "./header.scss";

function Header() {
	return (
		<header className="header">
			<div className="wrap">
				<div className="left">
					<a href="#home" className="logo">
						Playbox
					</a>
				</div>
				<div className="right">
					<div className="hamburger">
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
