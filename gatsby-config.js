/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: 'My Demo Blog',
		description: 'This is a demo blog',
		author: '@sagar7993',
		siteUrl: 'http://localhost:8000'
	},
	plugins: [
		'gatsby-plugin-typescript',
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
				name: 'gatsby-starter-default',
				short_name: 'starter',
				start_url: '/',
				background_color: '#4C84FF',
				theme_color: '#4C84FF',
				display: 'minimal-ui',
				icon: 'src/images/gatsby-icon.png'
			},
		},
		{
			resolve: 'gatsby-source-wordpress',
			options: {
				baseUrl: 'localhost:8001',
				protocol: 'http',
				hostingWPCOM: false,
				useACF: true,
				verboseOutput: false,
				perPage: 100,
				searchAndReplaceContentUrls: {
					sourceUrl: 'http://localhost:8001',
					replacementUrl: 'http://localhost:8000'
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
		// {
		//   resolve: 'gatsby-plugin-google-analytics',
		//   options: {
		//     trackingId: "my-tracking-id",
		//     // Defines where to place the tracking script - 'true' in the head and 'false' in the body
		//     head: false,
		//     // Setting this parameter is optional
		//     anonymize: true,
		//     // Setting this parameter is also optional
		//     respectDNT: true,
		//     // Avoids sending pageview hits from custom paths
		//     exclude: ["/preview/**", "/do-not-track/me/too/"],
		//     // Delays sending pageview hits on route update (in milliseconds)
		//     pageTransitionDelay: 0,
		//     // Any additional optional fields
		//     sampleRate: 5,
		//     siteSpeedSampleRate: 10,
		//     cookieDomain: "example.com"
		//   }
		// },
		// {
		//   resolve: 'gatsby-source-instagram',
		//   options: {
		//     username: 'my-instagram-username'
		//   }
		// },
		'gatsby-plugin-robots-txt',
		'gatsby-plugin-sass',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-advanced-sitemap',
		{
			resolve: 'gatsby-plugin-offline',
			options: {
				precachePages: ['/posts/*', '/post/*', '/about/'],
			}
		}
	]
}