/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: "My Demo Blog",
		description: "This is a demo blog",
		author: '@sagar7993',
		siteUrl: "http://localhost:8001"
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
				background_color: '#8B0000',
				theme_color: '#8B0000',
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
					sourceUrl: "http://localhost:8001",
					replacementUrl: "http://localhost:8000"
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
		// {
		//   resolve: 'gatsby-source-facebook',
		//   options: {
		//     places: ['${facebookPageID}'], // Can be either a numeric ID or the URL ID
		//     params: {
		//       fields: 'hours, posts { message, created_time }', // See Facebooks API to see what you can query for
		//     },
		//     key: process.env.FACEBOOK_GRAPH_TOKEN // You will need to create a Facebook application and go through review in order to get an API token.
		//   }
		// },
		// {
		//   resolve: 'gatsby-source-twitter',
		//   options: {
		//     credentials: {
		//       consumer_key: "INSERT_HERE_YOUR_CONSUMER_KEY",
		//       consumer_secret: "INSERT_HERE_YOUR_CONSUMER_SECRET",
		//       bearer_token: "INSERT_HERE_YOUR_BEARER_TOKEN"
		//     },
		//     queries: {
		//       nameofthequery: {
		//         endpoint: "statuses/user_timeline",
		//         params: {
		//           screen_name: "gatsbyjs",
		//           include_rts: false,
		//           exclude_replies: true,
		//           tweet_mode: "extended"
		//         }
		//       }
		//       nameofanotherthequery: {
		//         endpoint: "search/tweets",
		//         params: {
		//           q: "#gatsbyjs",
		//           tweet_mode: "extended"
		//         }
		//       }
		//     }
		//   }
		// },
		'gatsby-plugin-robots-txt',
		'gatsby-plugin-sass',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-advanced-sitemap',
		'gatsby-plugin-offline'
	]
}