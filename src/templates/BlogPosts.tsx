import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';

import { Button, Tag, Row, Col, Icon } from 'antd';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import Instagram from '../components/Instagram';
import Twitter from '../components/Twitter';
import Facebook from '../components/Facebook';

import { Post, CategoryTagInfo, InstagramFeed } from '../contracts/post';
import { decodeHtmlCharCodes, capitalizeFirstLetter } from '../utils';

import '../styles/blog.scss';

export interface Props {
	pathContext: {
		group: { node: Post }[];
		index: number;
		pageCount: number;
		allInstaNode: InstagramFeed;
	};
	location: Location;
}

export const BlogPostsPage = (props: Props) => {
	const { group, index, pageCount } = props.pathContext;
	const previousUrl = index - 1 === 1 ? '' : (index - 1).toString();
	const nextUrl = (index + 1).toString();
	const { site } = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
	`);
	return (
		<Layout location={props.location}>
			<SEO title={`${site.siteMetadata.title} | ${site.siteMetadata.description}`} description={site.siteMetadata.description} />
			<Row gutter={36} className="posts">
				<Col xs={24} sm={24} md={24} lg={16} xl={18} xxl={18} id="primary" className="content-area with-sidebar">
					{group.map(({ node }: { node: Post }) => {
						const fluid: FluidObject | null = (node.featured_media && node.featured_media.localFile && node.featured_media.localFile.childImageSharp && node.featured_media.localFile.childImageSharp.fluid) ? node.featured_media.localFile.childImageSharp.fluid : null;
						const categories: CategoryTagInfo[] = (node.categories && node.categories.length) > 0 ? node.categories.filter((category) => category.name !== 'Uncategorized') : new Array<CategoryTagInfo>();
						const tags: CategoryTagInfo[] = (node.tags && node.tags.length) > 0 ? node.tags : new Array<CategoryTagInfo>();
						return (
							<article className="post" key={node.slug}>
								<Link to={`/post/${node.slug}`} title={node.slug}>
									<h1 className="black-color">{decodeHtmlCharCodes(node.title)}</h1>
								</Link>
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
										<span className="author">{capitalizeFirstLetter(node.author.name)}</span>
										<span className="separator"></span>
										<span className="date">{(node.modified && node.modified.length > 0) ? node.modified : node.date}</span>
									</span>
								</div>
								{(fluid && fluid.src && fluid.src.length > 0) && (
									<Link to={`/post/${node.slug}`} title={node.slug}>
										<Image fluid={fluid} alt={node.title} title={node.title} />
									</Link>
								)}
								<div className="post-excerpt" dangerouslySetInnerHTML={{ __html: decodeHtmlCharCodes(node.excerpt) }} />
								<div className="read-more-container">
									<Link to={`/post/${node.slug}`} title={node.slug}>
										<Button type="default" className="read-more">Read more</Button>
									</Link>
								</div>
							</article>
						);
					})}
					<div className="navigation-links">
						{index > 1 && (
							<div className="previous-link">
								<Link to={`/posts/${previousUrl}`} title={`/posts/${previousUrl}`}>
									<Button type="primary">Go to Previous Page</Button>
								</Link>
							</div>
						)}
						{index <= (pageCount - 1) && (
							<div className="next-link">
								<Link to={`/posts/${nextUrl}`} title={`/posts/${nextUrl}`}>
									<Button type="primary">Go to Next Page</Button>
								</Link>
							</div>
						)}
					</div>
				</Col>
				<Col xs={0} sm={0} md={0} lg={8} xl={6} xxl={6} id="secondary" className="sidebar">
					<Twitter title={<h3 className="margin-bottom-36px">Twitter</h3>} />
					<Facebook title={
						<h3 className="margin-top-36px margin-bottom-36px">Facebook</h3>
					} />
					<Instagram allInstaNode={props.pathContext.allInstaNode} orientation="vertical" title={
						<h3 className="margin-top-36px margin-bottom-36px">Instagram</h3>
					} />
				</Col>
			</Row>
			<Row type="flex" align="middle" gutter={36}>
				<Col xs={24} sm={24} md={24} lg={0} xl={0} xxl={0} className="align-center margin-top-36px margin-bottom-36px">
					<Instagram allInstaNode={props.pathContext.allInstaNode} orientation="horizontal" />
				</Col>
			</Row>
		</Layout>
	);
};

export default BlogPostsPage;
