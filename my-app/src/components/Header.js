import React from "react";

function Header() {
	return (
		<header>
			<a href="public/index.html" class="logo">
				c<span class="fas fa-virus"></span>vid-care
			</a>

			<div id="menu" class="fas fa-bars"></div>

			<nav class="navbar">
				<a class="active" href="#home">
					home
				</a>
				<a href="#prevent">Prevent</a>
				<a href="#symptoms">Symptoms</a>
				<a href="#precautions">Precautions</a>
				<a href="#doctor">Doctor</a>
				<a href="#hand-wash">Hand-wash</a>
				<a href="stats.html">Stats</a>
				<a href="chart.html" class="highlight">
					CoviAnalytics
				</a>
			</nav>
		</header>
	);
}

export default Header;
