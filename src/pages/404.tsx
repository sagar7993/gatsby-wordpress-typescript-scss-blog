import React from 'react';
import { Link, graphql } from 'gatsby';

import { Button } from 'antd';

import Gif404 from '../images/404.gif';

import { InstagramFeed } from '../contracts/post';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import Instagram from '../components/Instagram';

export interface Props {
	data: {
		allInstaNode: InstagramFeed;
	};
	location: Location;
}

export const NotFoundPage = (props: Props) => {
	return (
		<Layout location={props.location}>
			<SEO title="404: Not found" />
			<div className="not-found-404">
				<h1>404: Not found</h1>
				<p>You just hit a route that doesn't exist... the sadness.</p>
				<div className="graphic">
					<img src={Gif404} alt="404: Not found" title="404: Not found" />
				</div>
				<div className="action margin-bottom-36px">
					<Link to="/" className="margin-right-24px">
						<Button type="primary" htmlType="button">Go Home</Button>
					</Link>
					<Link to="/blog">
						<Button type="primary" htmlType="button">Go to blog</Button>
					</Link>
				</div>
				<Instagram allInstaNode={props.data.allInstaNode} orientation="horizontal" />
			</div>
		</Layout>
	);
};

export default NotFoundPage;

export const query = graphql`
	query {
		allInstaNode(limit: 8) {
			edges {
				node {
					id
					likes
					comments
					mediaType
					preview
					original
					timestamp
					caption
					localFile {
						childImageSharp {
							fluid(maxWidth: 960, maxHeight: 600, quality: 85) {
								aspectRatio
								src
								srcSet
								sizes
								base64
								tracedSVG
								srcWebp
								srcSetWebp
							}
						}
					}
					thumbnails {
						src
						config_width
						config_height
					}
					dimensions {
						height
						width
					}
				}
			}
		}
	}
`;
