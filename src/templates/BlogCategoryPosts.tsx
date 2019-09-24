import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';

import { Tag, Row, Col, Icon } from 'antd';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import Instagram from '../components/Instagram';
import Twitter from '../components/Twitter';
import Facebook from '../components/Facebook';

import { Post, CategoryTagInfo, InstagramFeed } from '../contracts/post';
import { decodeHtmlCharCodes } from '../utils';

import './Blog.scss';

export interface Props {
	pathContext: {
		group: { node: Post }[];
		allInstaNode: InstagramFeed;
	};
}

export const BlogCategoryPostsPage = (props: Props) => {
	const { group } = props.pathContext;
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
		<Layout>
			<SEO title={`${site.siteMetadata.title} | ${site.siteMetadata.description}`} description={site.siteMetadata.description} />
			{group.map(({ node }: { node: Post }) => {
				const fluid: FluidObject | null = (node.featured_media && node.featured_media.localFile && node.featured_media.localFile.childImageSharp && node.featured_media.localFile.childImageSharp.fluid) ? node.featured_media.localFile.childImageSharp.fluid : null;
				const categories: CategoryTagInfo[] = node.categories && node.categories.length > 0 ? node.categories.filter((category) => category.name !== 'Uncategorized') : new Array<CategoryTagInfo>();
				const tags: CategoryTagInfo[] = node.tags && node.tags.length > 0 ? node.tags.filter((tag) => tag.name !== 'Uncategorized') : new Array<CategoryTagInfo>();
				return (
					<div key={node.slug} className="posts">
						<Link to={'/post/' + node.slug} title={node.slug}>
							<h1 className="black-color">{decodeHtmlCharCodes(node.title)}</h1>
						</Link>
						{((categories && categories.length > 0) || (tags && tags.length > 0)) && (
							<div className="categories-container tags-container margin-bottom-24px">
								{categories.map((category, categoryIndex) => {
									return (
										<Tag key={categoryIndex}>
											<Link to={`/category/${category.slug}`} title={category.name}>
												<Icon type="folder" />{category.name}
											</Link>
										</Tag>
									);
								})}
								{tags.map((tag, tagIndex) => {
									return (
										<Tag key={tagIndex}>
											<Link to={`/tag/${tag.slug}`} title={tag.name}>
												<Icon type="tag" />{tag.name}
											</Link>
										</Tag>
									);
								})}
							</div>
						)}
						<Link to={'/post/' + node.slug} title={node.slug}>
							{(fluid && fluid.src && fluid.src.length > 0) && <Image fluid={fluid} alt={node.title} title={node.title} />}
						</Link>
						<div className="post-excerpt" dangerouslySetInnerHTML={{ __html: decodeHtmlCharCodes(node.excerpt) }} />
					</div>
				);
			})}
			<Instagram allInstaNode={props.pathContext.allInstaNode} />
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

export default BlogCategoryPostsPage;
