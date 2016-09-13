import React from 'react';

const MainLayout = (props) => {
	return (
		<div>
			<header>
				header
			</header>
			<nav>
				nav
			</nav>
			<footer>
				footer
			</footer>
			{props.children}
		</div>
	);
};

export default MainLayout;
