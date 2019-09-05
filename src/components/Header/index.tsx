import React from 'react';

import { Link } from 'gatsby';

import './Header.scss';

export interface Props {
	siteTitle: string;
}

export const Header = (props: Props) => (
	<header className="header-container">
		<div className="header">
			<h1>
				<Link to="/posts/" className="header-link">{props.siteTitle}</Link>
			</h1>
		</div>
	</header>
);

Header.defaultProps = {
	siteTitle: '',
};

export default Header;
