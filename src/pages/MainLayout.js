import React from 'react';
import { Link } from 'react-router';

const MainLayout = (props) => {
	return (
		<div>
			{props.children}
			<header>
				header
			</header>
			<nav>
				<ul role="nav">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/login">Login</Link></li>
					<li><Link to="/register">Register</Link></li>
				</ul>
			</nav>
			<footer>
				footer
			</footer>
		</div>
	);
};

export default MainLayout;
