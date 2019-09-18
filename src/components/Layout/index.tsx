/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from 'react';

import Header from '../Header';
import Footer from '../Footer';

import './Layout.scss';

export interface Props {
	children: React.ReactNode;
}

export const Layout = (props: Props) => {
	return (
		<Fragment>
			<Header />
			<div className="layout">
				<main>{props.children}</main>
			</div>
			<Footer />
		</Fragment>
	);
};

export default Layout;
