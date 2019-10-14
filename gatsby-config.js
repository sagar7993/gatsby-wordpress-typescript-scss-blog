require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
	siteMetadata: {
		title: `${process.env.GATSBY_SITE_NAME}`,
		description: `${process.env.GATSBY_SITE_DESCRIPTION}`,
		author: `@${process.env.GATSBY_SITE_AUTHOR}`,
		siteUrl: `${process.env.GATSBY_SITE_URL_PROTOCOL}://${process.env.GATSBY_SITE_URL_PATH}`,
		social: {
			twitter: 'https://www.twitter.com/sagar7993',
			facebook: 'https://www.facebook.com/sagar7993',
			email: 'sagar7993@gmail.com',
			linkedin: 'https://www.linkedin.com/in/sagar-jain-006074a1',
			github: 'https://www.github.com/sagar7993'
		}
	},
	plugins: [
		'gatsby-plugin-typescript',
		{
			resolve: 'gatsby-plugin-tslint',
			options: {
				test: /\.ts$|\.tsx$/,
				exclude: /(node_modules|cache|public)/
			}
		},
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: 'src/images'
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: `${process.env.GATSBY_SITE_NAME}`,
				short_name: `${process.env.GATSBY_SITE_NAME}`,
				start_url: '/',
				background_color: process.env.GATSBY_PRIMARY_ACCENT_COLOR || '#0047E0',
				theme_color: process.env.GATSBY_PRIMARY_ACCENT_COLOR || '#0047E0',
				display: 'minimal-ui',
				icon: 'src/images/logo.png'
			},
		},
		'gatsby-plugin-catch-links',
		{
			resolve: 'gatsby-source-wordpress',
			options: {
				baseUrl: `${process.env.GATSBY_WORDPRESS_URL_PATH}`,
				protocol: `${process.env.GATSBY_WORDPRESS_URL_PROTOCOL}`,
				plugins: [{
					resolve: `gatsby-wordpress-inline-images`,
					options: {
						baseUrl: `${process.env.GATSBY_WORDPRESS_URL_PATH}`,
						protocol: `${process.env.GATSBY_WORDPRESS_URL_PROTOCOL}`,
						maxWidth: 960,
						maxHeight: 600,
						quality: 85,
						withWebp: true
					}
				}],
				hostingWPCOM: false,
				useACF: false,
				verboseOutput: false,
				perPage: 100,
				searchAndReplaceContentUrls: {
					sourceUrl: `${process.env.GATSBY_WORDPRESS_URL_PROTOCOL}://${process.env.GATSBY_WORDPRESS_URL_PATH}`,
					replacementUrl: `${process.env.GATSBY_SITE_URL_PROTOCOL}://${process.env.GATSBY_SITE_URL_PATH}`
				},
				concurrentRequests: 10,
				includedRoutes: [
					"**/categories",
					"**/posts",
					"**/pages",
					"**/media",
					"**/tags",
					"**/taxonomies",
					"**/users"
				],
				excludedRoutes: [],
				normalizer: function ({
					entities
				}) {
					return entities
				}
			}
		},
		{
			resolve: 'gatsby-plugin-import',
			options: {
				libraryName: "antd",
				style: true // or 'css'
			}
		},
		'gatsby-plugin-antd',
		'gatsby-transformer-yaml', {
			resolve: 'gatsby-source-filesystem',
			options: {
				path: './src/data/comments',
				name: 'comments',
			},
		},
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: process.env.GATSBY_GOOGLE_ANALYTICS,
				head: false,
				anonymize: true,
				respectDNT: true,
				exclude: ["/preview/**", "/do-not-track/me/too/"],
				pageTransitionDelay: 0,
			}
		},
		{
			resolve: 'gatsby-source-instagram',
			options: {
				username: process.env.GATSBY_INSTAGRAM_SOURCE
			}
		},
		{
			resolve: `gatsby-plugin-pinterest-twitter-facebook`,
			options: {
				delayTimer: 100,
				pinterest: {
					enable: true,
					tall: true,
					round: false
				},
				twitter: {
					enable: true,
					containerSelector: '.twitter-container',
					handle: process.env.GATSBY_TWITTER_SOURCE,
					showFollowButton: true,
					showTimeline: true,
					showFollowerCount: true,
					timelineTweetCount: 1,
					width: null,
					height: null,
					noHeader: true,
					noFooter: true,
					noBorders: true,
					noScrollbar: true,
					transparent: true
				},
				facebook: {
					enable: true,
					containerSelector: '.facebook-container',
					profile: process.env.GATSBY_FACEBOOK_SOURCE,
					// width: 340,
					// height: 500,
					tabs: 'timeline, events, messages',
					hideCover: false,
					showFacepile: true,
					smallHeader: false,
					adaptContainerWidth: true
				}
			}
		},
		'gatsby-plugin-robots-txt',
		'gatsby-plugin-sass',
		'gatsby-plugin-advanced-sitemap',
		{
			resolve: 'gatsby-plugin-offline',
			options: {
				precachePages: ['', '/posts/*', '/post/*', '/tag/*', '/category/*', '/about']
			}
		}
	]
}