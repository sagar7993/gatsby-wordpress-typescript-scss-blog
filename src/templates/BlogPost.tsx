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
import { CommentEdges } from '../contracts/comment';

import { decodeHtmlCharCodes, capitalizeFirstLetter } from '../utils';

import '../styles/blog.scss';

export interface Props {
	data: {
		wordpressPost: Post;
		allCommentsYaml: CommentEdges;
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
			<Row gutter={36}>
				<Col xs={24} sm={24} md={24} lg={16} xl={18} xxl={18} id="primary" className="content-area with-sidebar">
					<article className="post">
						<h1>{decodeHtmlCharCodes(props.data.wordpressPost.title)}</h1>
						<div className="categories-container tags-container post-meta-container margin-bottom-24px">
							{categories && categories.length > 0 && categories.map((category, categoryIndex) => {
								return (
									<Tag key={categoryIndex}>
										<Link to={`/category/${category.slug}`} title={category.name}>
											<Icon type="folder" />{capitalizeFirstLetter(category.name)}
										</Link>
									</Tag>
								);
							})}
							{tags && tags.length > 0 && tags.map((tag, tagIndex) => {
								return (
									<Tag key={tagIndex}>
										<Link to={`/tag/${tag.slug}`} title={tag.name}>
											<Icon type="tag" />{capitalizeFirstLetter(tag.name)}
										</Link>
									</Tag>
								);
							})}
							<span className="post-meta margin-left-2px">
								<span className="author">{capitalizeFirstLetter(props.data.wordpressPost.author.name)}</span>
								<span className="separator"></span>
								<span className="date">{(props.data.wordpressPost.modified && props.data.wordpressPost.modified.length > 0) ? props.data.wordpressPost.modified : props.data.wordpressPost.date}</span>
							</span>
						</div>
						{(fluid && fluid.src && fluid.src.length > 0) && (
							<Image fluid={fluid} alt={props.data.wordpressPost.title} title={props.data.wordpressPost.title} />
						)}
						<div className="post-content" dangerouslySetInnerHTML={{ __html: decodeHtmlCharCodes(props.data.wordpressPost.content) }} />
						<div className="navigation-links margin-bottom-24px">
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
					</article>
					{process.env && <Comments slug={props.data.wordpressPost.slug} wordpress_id={props.data.wordpressPost.wordpress_id} comments={props.data.allCommentsYaml} />}
				</Col>
				<Col xs={0} sm={0} md={0} lg={8} xl={6} xxl={6} id="secondary" className="sidebar">
					<Twitter title={<h3 className="margin-bottom-36px">Twitter</h3>} />
					<Facebook title={
						<h3 className="margin-top-36px margin-bottom-36px">Facebook</h3>
					} />
					<Instagram allInstaNode={props.data.allInstaNode} orientation="vertical" title={
						<h3 className="margin-top-36px margin-bottom-36px">Instagram</h3>
					} />
				</Col>
			</Row>
			<Row type="flex" align="middle" gutter={36}>
				<Col xs={24} sm={24} md={24} lg={0} xl={0} xxl={0} className="align-center margin-top-36px margin-bottom-36px">
					<Instagram allInstaNode={props.data.allInstaNode} orientation="horizontal" />
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
			modified(formatString: "MMMM DD, YYYY")
			author {
				id
				name
				url
				description
				link
				slug
				path
				wordpress_id
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
