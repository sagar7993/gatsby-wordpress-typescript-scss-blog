// gatsby-node.js

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

const createPaginatedPages = require('gatsby-paginate');

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
				previous: index === 0 ? null : BlogPosts[index - 1].node,
				next: index === (BlogPosts.length - 1) ? null : BlogPosts[index + 1].node
			}
		});
	});

	createPaginatedPages({
		edges: BlogPosts,
		createPage: createPage,
		pageTemplate: 'src/templates/BlogPosts.tsx',
		pageLength: 3,
		pathPrefix: 'posts',
		context: {}
	});
}