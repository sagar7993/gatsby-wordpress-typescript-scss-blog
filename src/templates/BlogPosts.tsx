import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

const NavLink = (props: any) => {
	if (!props.test) {
		return <Link to={props.url}>{props.text}</Link>;
	}
	return null;
};

const IndexPage = ({ pathContext }: any) => {

	const { group, index, first, last, pageCount } = pathContext;
	const previousUrl = index - 1 === 1 ? '' : (index - 1).toString();
	const nextUrl = (index + 1).toString();

	return (
		<Layout>
			<h4>{index} of {pageCount} Pages</h4>
			{group.map(({ node }: any) => (
				<div key={node.slug} className={'post'} style={{ marginBottom: 50 }}>
					<Link to={'/post/' + node.slug}>
						<h3>{node.title}</h3>
					</Link>
					<div className={'post-content'} dangerouslySetInnerHTML={{ __html: node.excerpt }} />
					{node.date}
				</div>
			))}
			<div className="previousLink">
				<NavLink test={first} url={'/posts/' + previousUrl} text="Go to Previous Page" />
			</div>
			<div className="nextLink">
				<NavLink test={last} url={'/posts/' + nextUrl} text="Go to Next Page" />
			</div>
		</Layout>
	);
};

export default IndexPage;
