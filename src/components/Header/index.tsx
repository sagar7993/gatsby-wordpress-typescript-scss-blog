import React from 'react';

import { Link } from 'gatsby';

import './Header.scss';

const Header = ({ siteTitle }: { siteTitle: string }) => (
	<header className="header-container">
		<div className="header">
			<h1>
				<Link to="/posts/" className="header-link">{siteTitle}</Link>
			</h1>
		</div>
	</header>
);

Header.defaultProps = {
	siteTitle: '',
};

export default Header;
