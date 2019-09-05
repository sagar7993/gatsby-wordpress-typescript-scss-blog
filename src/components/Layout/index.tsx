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
			<div className="layout">
				<main>{children}</main>
			</div>
		</Fragment>
	);
};

export default Layout;
