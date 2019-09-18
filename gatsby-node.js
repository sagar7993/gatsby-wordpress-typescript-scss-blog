// gatsby-node.js

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

const createPaginatedPages = require('gatsby-paginate');

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
})

exports.createPages = async ({
	graphql,
	actions,
	reporter
}) => {

	const {
		createPage
	} = actions;

	const BlogPostTemplate = path.resolve("./src/templates/BlogPost.tsx");

	const BlogPostsResult = await graphql(`
	{
		allWordpressPost {
			edges {
				node {
					id
					slug
					status
					template
					format
					wordpress_id
					title
					excerpt
					date
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
			}
		}
	}`);

	if (BlogPostsResult.errors) {
		reporter.panicOnBuild('Error while running GraphQL query.');
		return;
	}

	const BlogPosts = BlogPostsResult.data.allWordpressPost.edges;

	BlogPosts.forEach((post, index) => {
		createPage({
			path: `/post/${post.node.slug}`,
			component: BlogPostTemplate,
			context: {
				id: post.node.wordpress_id,
				slug: post.node.slug,
				previous: index === 0 ? null : BlogPosts[index - 1].node,
				next: index === (BlogPosts.length - 1) ? null : BlogPosts[index + 1].node
			}
		});
	});

	createPaginatedPages({
		edges: BlogPosts,
		createPage: createPage,
		pageTemplate: 'src/templates/BlogPosts.tsx',
		pageLength: 2,
		pathPrefix: 'posts',
		context: {}
	});
}