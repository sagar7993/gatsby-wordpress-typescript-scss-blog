import React from 'react';
import { graphql, Link } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';

import { Button, Tag, Row, Col, Icon } from 'antd';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import Comments from '../components/Comments';

import Instagram from '../components/Instagram';
import Twitter from '../components/Twitter';
import Facebook from '../components/Facebook';

import { Post, CategoryTagInfo, InstagramFeed } from '../contracts/post';
import { Comment } from '../contracts/comment';

import { decodeHtmlCharCodes, capitalizeFirstLetter } from '../utils';

import './Blog.scss';

export interface Props {
	data: {
		wordpressPost: Post;
		allCommentsYaml: Comment;
		allInstaNode: InstagramFeed;
	};
	pageContext: {
		previous: {
			slug: string;
		}
		next: {
			slug: string;
		}
	};
	location: Location;
}

export const BlogPostPage = (props: Props) => {
	const fluid: FluidObject | null = (props.data.wordpressPost.featured_media && props.data.wordpressPost.featured_media.localFile && props.data.wordpressPost.featured_media.localFile.childImageSharp && props.data.wordpressPost.featured_media.localFile.childImageSharp.fluid) ? props.data.wordpressPost.featured_media.localFile.childImageSharp.fluid : null;
	const categories: CategoryTagInfo[] = (props.data.wordpressPost.categories && props.data.wordpressPost.categories.length) > 0 ? props.data.wordpressPost.categories.filter((category) => category.name !== 'Uncategorized') : new Array<CategoryTagInfo>();
	const tags: CategoryTagInfo[] = (props.data.wordpressPost.tags && props.data.wordpressPost.tags.length) > 0 ? props.data.wordpressPost.tags : new Array<CategoryTagInfo>();
	return (
		<Layout location={props.location}>
			<SEO title={props.data.wordpressPost.title} description={props.data.wordpressPost.excerpt} />
			<h1>{decodeHtmlCharCodes(props.data.wordpressPost.title)}</h1>
			{((categories && categories.length > 0) || (tags && tags.length > 0)) && (
				<div className="categories-container tags-container margin-bottom-24px">
					{categories.map((category, categoryIndex) => {
						return (
							<Tag key={categoryIndex}>
								<Link to={`/category/${category.slug}`} title={category.name}>
									<Icon type="folder" />{capitalizeFirstLetter(category.name)}
								</Link>
							</Tag>
						);
					})}
					{tags.map((tag, tagIndex) => {
						return (
							<Tag key={tagIndex}>
								<Link to={`/tag/${tag.slug}`} title={tag.name}>
									<Icon type="tag" />{capitalizeFirstLetter(tag.name)}
								</Link>
							</Tag>
						);
					})}
				</div>
			)}
			{fluid && fluid.src && fluid.src.length > 0 && <Image fluid={fluid} alt={props.data.wordpressPost.title} title={props.data.wordpressPost.title} />}
			<div className="post" dangerouslySetInnerHTML={{ __html: decodeHtmlCharCodes(props.data.wordpressPost.content) }} />
			{process.env && <Comments slug={props.data.wordpressPost.slug} wordpress_id={props.data.wordpressPost.wordpress_id} comments={props.data.allCommentsYaml} />}
			<div className="margin-bottom-24px navigation-links">
				{props.pageContext.next && props.pageContext.next.slug && (
					<Link to={`/post/${props.pageContext.next.slug}`} title={props.pageContext.next.slug}>
						<Button type="primary">Go to Previous Post</Button>
					</Link>
				)}
				{props.pageContext.previous && props.pageContext.previous.slug && (
					<Link to={`/post/${props.pageContext.previous.slug}`} title={props.pageContext.previous.slug}>
						<Button type="primary">Go to Next Post</Button>
					</Link>
				)}
			</div>
			<Instagram allInstaNode={props.data.allInstaNode} />
			<Row type="flex" align="middle" gutter={36} className="margin-top-36px">
				<Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} className="align-center">
					<Twitter />
				</Col>
				<Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} className="align-center">
					<Facebook />
				</Col>
			</Row>
		</Layout>
	);
};

export default BlogPostPage;

export const query = graphql`
	query($id: Int!, $slug: String!) {
		wordpressPost(wordpress_id: { eq: $id }) {
			title
			content
			excerpt
			date(formatString: "MMMM DD, YYYY")
			author {
				name
			}
			slug
			wordpress_id
			featured_media {
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
			}
			categories {
				id
				link
				wordpress_id
				count
				description
				name
				slug
				path
			}
			tags {
				id
				link
				wordpress_id
				count
				description
				name
				slug
				path
			}
		}
		allCommentsYaml(filter: { slug: { eq: $slug } }) {
			edges {
				node {
					id
					name
					email
					message
					date
					slug
				}
			}
		}
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
