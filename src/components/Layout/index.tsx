/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './Layout.scss';

import Header from '../Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
	const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

	return (
		<Fragment>
			<Header siteTitle={data.site.siteMetadata.title} />
			<div
				style={{
					margin: `0 auto`,
					maxWidth: 960,
					padding: `0px 1.0875rem 1.45rem`,
					paddingTop: 0,
				}}
			>
				<main>{children}</main>
				<footer>
					© {new Date().getFullYear()}, Built with <a target="_blank" href="https://www.onmycanvas.com">love</a>
				</footer>
			</div>
		</Fragment>
	);
};

export default Layout;
