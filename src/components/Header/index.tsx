import React from 'react';

import { Link } from 'gatsby';

import { Layout, Menu } from 'antd';

import './Header.scss';

export const Header = () => {
	return (
		<div className="header-container">
			<div className="header-wrapper">
				<Layout>
					<Layout.Header className="header">
						<Link to="/" title="Home">
							<div className="logo" />
						</Link>
						<Menu
							theme="dark"
							mode="horizontal"
							defaultSelectedKeys={(window.location.pathname === '/' || window.location.pathname === '') ? ['home'] : ((window.location.pathname === '/about' || window.location.pathname === '/about/') ? ['about'] : ['post'])}
						>
							<Menu.Item key="home" className="margin-right-12px"><Link to="/" title="Home">Home</Link></Menu.Item>
							<Menu.Item key="post" className="margin-right-12px"><Link to="/posts" title="Blog">Blog</Link></Menu.Item>
							<Menu.Item key="about"><Link to="/about" title="About">About</Link></Menu.Item>
						</Menu>
					</Layout.Header>
				</Layout>
			</div>
		</div>
	);
};

export default Header;
