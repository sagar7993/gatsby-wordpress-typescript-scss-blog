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

import '../styles/blog.scss';

export interface Props {
	data: {
		file: ChildImageSharp;
		allInstaNode: InstagramFeed;
	};
	location: Location;
}

const iconColor = '#FF5E65';

export const IndexPage = (props: Props) => {
	const fluid: FluidObject | null = (props.data && props.data.file && props.data.file.childImageSharp && props.data.file.childImageSharp.fluid) ? props.data.file.childImageSharp.fluid : null;
	return (
		<Layout location={props.location}>
			<SEO title="Home" />
			<Row gutter={36}>
				<Col xs={24} sm={24} md={24} lg={16} xl={18} xxl={18} id="primary" className="content-area with-sidebar">
					<div className="home">
						<Card>
							<Row gutter={24} type="flex" align="middle">
								<Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
									<h2>This is an opinionated starter project to help you create lightning fast PWA websites with Gatsby and Wordpress CMS, built using Typescript, SCSS and Ant Design.</h2>
									{(fluid && fluid.src && fluid.src.length > 0) && (
										<Image fluid={fluid} alt="Home screen banner" title="Home screen banner" />
									)}
								</Col>
								<Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
									<div className="features-wrapper margin-top-36px">
										<div className="features">
											<h3>Features</h3>
											<ul>
												<li>
													<p>Gatsby static site generator <Icon type="fire" theme="twoTone" twoToneColor={iconColor} /></p>
												</li>
												<li>
													<p>Built using Typecsript <Icon type="fire" theme="twoTone" twoToneColor={iconColor} /></p>
												</li>
												<li>
													<p>All CSS written in SASS <Icon type="fire" theme="twoTone" twoToneColor={iconColor} /></p>
												</li>
												<li>
													<p>Built using Ant Design for theming and UI <Icon type="fire" theme="twoTone" twoToneColor={iconColor} /></p>
												</li>
												<li>
													<p>Wordpress CMS for content management and blog <Icon type="fire" theme="twoTone" twoToneColor={iconColor} /></p>
												</li>
												<li>
													<p>Blog pagination functionality and customizability <Icon type="fire" theme="twoTone" twoToneColor={iconColor} /></p>
												</li>
												<li>
													<p>Environment files - Use different tokens, API url's, social account id's etc as needed for your development, testing and production environments <Icon type="fire" theme="twoTone" twoToneColor={iconColor} /></p>
												</li>
												<li>
													<p>High performant PWA (progressive web app) with excellent Google Lighthouse Audit score (website will work offline due to service worker caching) <Icon type="fire" theme="twoTone" twoToneColor={iconColor} /></p>
												</li>
												<li>
													<p>Fully responsive layout for mobile and widescreen browsing <Icon type="fire" theme="twoTone" twoToneColor={iconColor} /></p>
												</li>
												<li>
													<p>This Gatsby starter template displays a reading progress bar at the top of each page. Feel free to tweak it, hide or show it on certain pages, or remove it altogether if you don't like it <Icon type="fire" theme="twoTone" twoToneColor={iconColor} /></p>
												</li>
												<li>
													<p>Blog SEO using yoast integration in your wordpress source, along with generated robots.txt file for search engine crawling and human readable generated sitemap.xml file for search engine indexing <Icon type="fire" theme="twoTone" twoToneColor={iconColor} /></p>
												</li>
												<li>
													<p>Comments on blog posts using Staticman - Comment form can be added on every any page <Icon type="fire" theme="twoTone" twoToneColor={iconColor} /></p>
													<ul>
														<li>Comments will be stored as yml files in your Github repository itself, to ensure that they work perfectly with static generated pages</li>
														<li>Simply grant staticman access to your Github repository, and every time someone submits the comment form, you will receive a pull request if you enable moderation else the comment will be saved directly if you turn moderation off</li>
														<li>Staticman has built-in support for akismet for moderation and spam protection</li>
													</ul>
												</li>
												<li>
													<p>Wordpress images - all featured images for each post/page displayed in WebP format for faster performance in compatible browsers <Icon type="fire" theme="twoTone" twoToneColor={iconColor} /></p>
													<ul>
														<li>Gatsby's <span className="text-italic">gatsby-source-wordpress</span> plugin doesn't support transforming images within wordpress post/page content</li>
														<li>As a workaround, you can insert images from URL in your wordpress content</li>
														<li>If you don't want to use the workaround mentioned above, and would rather use the images that you have uploaded to your wordpress library, this starter template has an included (untested) plugin called `gatsby-wordpress-inline-images` which to transform all images within post/page content to Gatsby Images with full support for fluid transformations etc</li>
													</ul>
												</li>
												<li>
													<p>Test cases - full support for writing test cases in Typescript using Enzyme and Jest <Icon type="fire" theme="twoTone" twoToneColor={iconColor} /></p>
												</li>
												<li>
													<p>Git pre-commit and pre-push hooks using Husky - execute any custom scripts before any git commit or git push operation, such as linting or running test cases, to ensure that dirty or untested code never gets pushed to your Github repository <Icon type="fire" theme="twoTone" twoToneColor={iconColor} /></p>
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
											<p className="margin-bottom-0px">Check out the <a href="https://github.com/sagar7993/gatsby-wordpress-typescript-scss-blog" target="_blank" rel="noopener noreferrer nofollow" title="Github repository">Github repository</a> to read the full documentation</p>
										</div>
									</div>
								</Col>
							</Row>
						</Card>
					</div>
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
