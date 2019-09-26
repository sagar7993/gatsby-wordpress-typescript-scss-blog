import React from 'react';

import { Link } from 'gatsby';

import { Layout as AntLayout, Menu } from 'antd';

import './Header.scss';

export interface Props {
	location: Location;
}

export const Header = (props: Props) => {
	const isHomePage = (props.location.pathname === '' || props.location.pathname === '/');
	const isAboutPage = (props.location.pathname === '/about' || props.location.pathname === '/about/');
	return (
		<div className="header-container">
			<AntLayout.Header className="header">
				<Link to="/" title="Home">
					<div className="logo" />
				</Link>
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={isHomePage ? ['home'] : (isAboutPage ? ['about'] : ['posts'])}
				>
					<Menu.Item key="home"><Link to="/" title="Home">Home</Link></Menu.Item>
					<Menu.Item key="posts"><Link to="/posts" title="Blog">Blog</Link></Menu.Item>
					<Menu.Item key="about"><Link to="/about" title="About">About</Link></Menu.Item>
				</Menu>
			</AntLayout.Header>
		</div>
	);
};

export default Header;
