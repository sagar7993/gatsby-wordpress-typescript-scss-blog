import React from 'react';
import { Link } from 'gatsby';

import { Button } from 'antd';

import Layout from '../components/Layout';

import { decodeHtmlCharCodes } from '../utils';

import './Blog.scss';

const IndexPage = ({ pathContext }: any) => {

	const { group, index, pageCount } = pathContext;
	const previousUrl = index - 1 === 1 ? '' : (index - 1).toString();
	const nextUrl = (index + 1).toString();

	return (
		<Layout>
			{group.map(({ node }: any) => (
				<div key={node.slug} className="post margin-bottom-48px">
					<Link to={'/post/' + node.slug}>
						<h3>{decodeHtmlCharCodes(node.title)}</h3>
					</Link>
					<div className="post-content" dangerouslySetInnerHTML={{ __html: decodeHtmlCharCodes(node.excerpt) }} />
				</div>
			))}
			<div className="navigation-links">
				{index > 0 &&
					<div className="previous-link">
						<Link to={'/posts/' + previousUrl}>
							<Button type="primary">Go to Previous Page</Button>
						</Link>
					</div>
				}
				{index < (pageCount - 1) &&
					<div className="next-link">
						<Link to={'/posts/' + nextUrl}>
							<Button type="primary">Go to Next Page</Button>
						</Link>
					</div>
				}
			</div>
		</Layout>
	);
};

export default IndexPage;
