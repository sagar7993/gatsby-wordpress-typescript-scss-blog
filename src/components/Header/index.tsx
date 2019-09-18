import React from 'react';

import { Link } from 'gatsby';

import { Layout, Menu } from 'antd';

import './Header.scss';

export const Header = () => (
	<div className="header-container">
		<div className="header-wrapper">
			<Layout>
				<Layout.Header className="header">
					<div className="logo" />
					<Menu
						theme="dark"
						mode="horizontal"
						defaultSelectedKeys={['1']}
						style={{ lineHeight: '64px' }}
					>
						<Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
						<Menu.Item key="2"><Link to="/posts/">Blog</Link></Menu.Item>
						<Menu.Item key="3"><Link to="/contact/">Contact</Link></Menu.Item>
						<Menu.Item key="4"><Link to="/about/">About</Link></Menu.Item>
					</Menu>
				</Layout.Header>
			</Layout>
		</div>
	</div>
);

Header.defaultProps = {
	siteTitle: '',
};

export default Header;
