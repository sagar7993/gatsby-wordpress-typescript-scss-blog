const path = require('path');

const createPaginatedPages = require('gatsby-paginate');

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

exports.createPages = async ({
	graphql,
	actions,
	reporter
}) => {

	const {
		createPage
	} = actions;

	const BlogPostTemplate = path.resolve("./src/templates/BlogPost.tsx");
	const BlogTagPostsTemplate = path.resolve("./src/templates/BlogTagPosts.tsx");
	const BlogCategoryPostsTemplate = path.resolve("./src/templates/BlogCategoryPosts.tsx");

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

	const BlogTagPosts = new Map();
	const BlogCategoryPosts = new Map();

	BlogPosts.forEach((post) => {
		const tags = post.node.tags;
		if (tags && tags.length > 0) {
			tags.forEach((tag) => {
				if (BlogTagPosts.has(tag.slug)) {
					BlogTagPosts.set(tag.slug, [...BlogTagPosts.get(tag.slug), post]);
				} else {
					BlogTagPosts.set(tag.slug, [post]);
				}
			});
		}
		const categories = post.node.categories;
		if (categories && categories.length > 0) {
			categories.forEach((category) => {
				if (BlogCategoryPosts.has(category.slug)) {
					BlogCategoryPosts.set(category.slug, [...BlogCategoryPosts.get(category.slug), post]);
				} else {
					BlogCategoryPosts.set(category.slug, [post]);
				}
			});
		}
	});

	const BlogTagSlugs = [...BlogTagPosts.keys()];
	const BlogCategorySlugs = [...BlogCategoryPosts.keys()];

	if (BlogTagSlugs.length > 0) {
		BlogTagSlugs.forEach((BlogTagSlug) => {
			createPage({
				path: `/tag/${BlogTagSlug}`,
				component: BlogTagPostsTemplate,
				context: {
					group: BlogTagPosts.get(BlogTagSlug),
					slug: BlogTagSlug,
					allInstaNode: BlogPostsResult.data.allInstaNode
				}
			});
		});
	}

	if (BlogCategorySlugs.length > 0) {
		BlogCategorySlugs.forEach((BlogCategorySlug) => {
			createPage({
				path: `/category/${BlogCategorySlug}`,
				component: BlogCategoryPostsTemplate,
				context: {
					group: BlogCategoryPosts.get(BlogCategorySlug),
					slug: BlogCategorySlug,
					allInstaNode: BlogPostsResult.data.allInstaNode
				}
			});
		});
	}

	createPaginatedPages({
		edges: BlogPosts,
		createPage: createPage,
		pageTemplate: 'src/templates/BlogPosts.tsx',
		pageLength: 2,
		pathPrefix: 'posts',
		context: {
			allInstaNode: BlogPostsResult.data.allInstaNode
		}
	});
}