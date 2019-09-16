import React from 'react';
import { graphql, Link } from 'gatsby';
import Image, { FixedObject } from 'gatsby-image';

import { Button } from 'antd';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import { Post } from '../contracts/post';
import { decodeHtmlCharCodes } from '../utils';

import './Blog.scss';

export interface Props {
	data: {
		wordpressPost: Post;
	};
	pageContext: {
		previous: {
			slug: string;
		}
		next: {
			slug: string;
		}
	};
}

export const BlogPost = (props: Props) => {
	const fixed: FixedObject | null = (props.data.wordpressPost.featured_media && props.data.wordpressPost.featured_media.localFile && props.data.wordpressPost.featured_media.localFile.childImageSharp && props.data.wordpressPost.featured_media.localFile.childImageSharp.fixed) ? props.data.wordpressPost.featured_media.localFile.childImageSharp.fixed : null;
	return (
		<Layout>
			<SEO title={props.data.wordpressPost.title} description={props.data.wordpressPost.excerpt} />
			<h1>{decodeHtmlCharCodes(props.data.wordpressPost.title)}</h1>
			{fixed && fixed.src && fixed.src.length > 0 && <Image fixed={fixed} />}
			<div className="post" dangerouslySetInnerHTML={{ __html: decodeHtmlCharCodes(props.data.wordpressPost.content) }} />
			<div className="margin-bottom-24px navigation-links">
				{props.pageContext.previous && props.pageContext.previous.slug &&
					<Link to={`/post/${props.pageContext.previous.slug}`}>
						<Button type="primary">Go to Previous Post</Button>
					</Link>
				}
				{props.pageContext.next && props.pageContext.next.slug &&
					<Link to={`/post/${props.pageContext.next.slug}`}>
						<Button type="primary">Go to Next Post</Button>
					</Link>
				}
			</div>
		</Layout>
	);
};

export default BlogPost;

export const query = graphql`
	query($id: Int!) {
		wordpressPost(wordpress_id: { eq: $id }) {
			title
			content
			excerpt
			date(formatString: "MMMM DD, YYYY")
			author {
				name
			}
			featured_media {
				localFile {
					childImageSharp {
						fixed(width: 960, height: 600) {
							src
							width
							height
							srcSet
							base64
							tracedSVG
							srcWebp
							srcSetWebp
						}
					}
				}
			}
		}
	}
`;
