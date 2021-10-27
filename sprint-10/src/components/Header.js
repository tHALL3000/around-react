import React from "react";
import logo from "../images/around.svg";

function Header() {
	return (
		<header className="header">
			<img
				className="header__image"
				src={
					logo
				}
				alt="Life around the US"
			/>
		</header>
	);
}
export default Header;
