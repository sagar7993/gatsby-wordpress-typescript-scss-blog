import React from 'react';

import { graphql } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';

import { Card, Row, Col, Icon } from 'antd';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import Instagram from '../components/Instagram';
import Twitter from '../components/Twitter';
import Facebook from '../components/Facebook';

import { ChildImageSharp, InstagramFeed } from '../contracts/post';

import '../templates/Blog.scss';

export interface Props {
	data: {
		file: ChildImageSharp;
		allInstaNode: InstagramFeed;
	};
}

export const IndexPage = (props: Props) => {
	const fluid: FluidObject | null = (props.data && props.data.file && props.data.file.childImageSharp && props.data.file.childImageSharp.fluid) ? props.data.file.childImageSharp.fluid : null;
	return (
		<Layout>
			<SEO title="Home" />
			<div className="home">
				<Card>
					<Row gutter={24} type="flex" align="middle">
						<Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
							<h2>This is an opinionated starter project to help you create lightening fast PWA websites with Gatsby and Wordpress CMS, built using Typescript and Ant Design.</h2>
							{fluid && <Image fluid={fluid} alt="Home screen banner" title="Home screen banner" />}
						</Col>
						<Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
							<div className="features-wrapper margin-top-36px">
								<div className="features">
									<h3>Features</h3>
									<ul>
										<li>
											<p>Gatsby static site generator <Icon type="fire" theme="twoTone" twoToneColor="#FF5E65" /></p>
										</li>
										<li>
											<p>Built using Typecsript <Icon type="fire" theme="twoTone" twoToneColor="#FF5E65" /></p>
										</li>
										<li>
											<p>All CSS written in SASS <Icon type="fire" theme="twoTone" twoToneColor="#FF5E65" /></p>
										</li>
										<li>
											<p>Built using Ant Design for theming and UI <Icon type="fire" theme="twoTone" twoToneColor="#FF5E65" /></p>
										</li>
										<li>
											<p>Wordpress CMS for content management and blog <Icon type="fire" theme="twoTone" twoToneColor="#FF5E65" /></p>
										</li>
										<li>
											<p>Blog pagination functionality and customizability <Icon type="fire" theme="twoTone" twoToneColor="#FF5E65" /></p>
										</li>
										<li>
											<p>Environment files - Use different tokens, API url's, social account id's etc as needed for your development, testing and production environments <Icon type="fire" theme="twoTone" twoToneColor="#FF5E65" /></p>
										</li>
										<li>
											<p>High performant PWA (progressive web app) with excellent Google Lighthouse Audit score (website will work offline due to service worker caching) <Icon type="fire" theme="twoTone" twoToneColor="#FF5E65" /></p>
										</li>
										<li>
											<p>Fully responsive layout for mobile and widescreen browsing <Icon type="fire" theme="twoTone" twoToneColor="#FF5E65" /></p>
										</li>
										<li>
											<p>Blog SEO using yoast integration in your wordpress source, along with generated robots.txt file for search engine crawling and human readable generated sitemap.xml file for search engine indexing <Icon type="fire" theme="twoTone" twoToneColor="#FF5E65" /></p>
										</li>
										<li>
											<p>
												<span>Comments on blog posts using Staticman - Comment form can be added on every any page. <Icon type="fire" theme="twoTone" twoToneColor="#FF5E65" /></span>
												<br />
												<span>Comments will be stored as yml files in your Github repository itself, to ensure that they work perfectly with static generated pages.</span>
												<br />
												<span>Simply grant staticman access to your Github repository, and every time someone submits the comment form, you will receive a pull request if you enable moderation else the comment will be saved directly if you turn moderation off.</span>
												<br />
												<span>Staticman has built-in support for akismet for moderation and spam protection</span>
											</p>
										</li>
										<li>
											<p>
												<span>Wordpress images - all featured images for each post/page displayed in WebP format for faster performance in compatible browsers. <Icon type="fire" theme="twoTone" twoToneColor="#FF5E65" /></span>
												<br />
												<span>Gatsby's `gatsby-source-wordpress` plugin doesn't support transforming images within wordpress post/page content.</span>
												<br />
												<span>As a workaround, you can insert images from URL in your wordpress content.</span>
												<br />
												<span>If you don't want to use the workaround mentioned above, and would rather use the images that you have uploaded to your wordpress library, this starter template has an included (experimental) plugin called `gatsby-wordpress-inline-images` which claims to transform all images within post/page content to Gatsby Images with full support for fluid transformations etc.</span>
											</p>
										</li>
										<li>
											<p>Test cases - full support for writing test cases in Typescript using enzyme and jest. <Icon type="fire" theme="twoTone" twoToneColor="#FF5E65" /></p>
										</li>
										<li>
											<p>Git pre-commit and pre-push hooks using Husky - execute any custom scripts before any git commit or git push operation, such as linting or running test cases, to ensure that dirty or untested code never gets pushed to your Github repository <Icon type="fire" theme="twoTone" twoToneColor="#FF5E65" /></p>
										</li>
										<li>
											<p>Pinterest image pinning integration - your readers can pin any page by clicking on the Pinterest button which will appear when they hover over any image</p>
										</li>
										<li>
											<p>Instagram feed integration (displays maximum 12 most recent Instagram posts of any account, no Instagram API token needed)</p>
										</li>
										<li>
											<p>Twitter timeline and follow button integration (displays timeline and follow button for any account with a few customization options, no Twitter API token needed)</p>
										</li>
										<li>
											<p>Facebook timeline and like button integration (displays timeline and like button for any account with a few customization options, no Facebook API token needed)</p>
										</li>
										<li>
											<p>Google Analytics integration (tracks user sessions, page views etc using your Google Analytics tracking id)</p>
										</li>
									</ul>
									<p className="margin-bottom-0px">Check out the <a href="https://github.com/sagar7993/gatsby-wordpress-typescript-blog-boilerplate" target="_blank" rel="noopener noreferrer nofollow">Github repository</a> to read the full documentation</p>
								</div>
							</div>
						</Col>
					</Row>
				</Card>
				<Instagram allInstaNode={props.data.allInstaNode} />
				<Row type="flex" align="middle" gutter={36} className="margin-top-36px">
					<Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} className="align-center">
						<Twitter />
					</Col>
					<Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} className="align-center">
						<Facebook />
					</Col>
				</Row>
			</div>
		</Layout>
	);
};

export default IndexPage;

export const query = graphql`
  	query {
    	file(relativePath: { eq: "banner.jpg" }) {
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
