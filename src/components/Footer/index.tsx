import React, { Fragment } from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import { Layout as AntLayout, Row, Col, Icon } from 'antd';

import './Footer.scss';

export const Footer = () => {
	const { site } = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            social {
				twitter
				facebook
				email
				linkedin
				github
			}
          }
        }
      }
	`);
	return (
		<div className="footer-container">
			<AntLayout.Footer className="footer">
				<Row type="flex" align="middle" className="footer-wrapper">
					<Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8} className="copyright-container align-center">
						<h6 className="copyright margin-bottom-0px">© Copyright {(new Date()).getFullYear()} All rights reserved</h6>
					</Col>
					<Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8} className="align-center social-icons-container">
						<div className="social-icons margin-bottom-0px">
							{site.siteMetadata.social && (
								<Fragment>
									{(site.siteMetadata.social.github && site.siteMetadata.social.github.length > 0) && (
										<a href={site.siteMetadata.social.github} target="_blank" rel="noreferrer noopener nofollow" title="github">
											<Icon type="github" theme="filled" />
										</a>
									)}
									{(site.siteMetadata.social.facebook && site.siteMetadata.social.facebook.length > 0) && (
										<a href={site.siteMetadata.social.facebook} target="_blank" rel="noreferrer noopener nofollow" title="facebook">
											<Icon type="facebook" theme="filled" />
										</a>
									)}
									{(site.siteMetadata.social.twitter && site.siteMetadata.social.twitter.length > 0) && (
										<a href={site.siteMetadata.social.twitter} target="_blank" rel="noreferrer noopener nofollow" title="twitter">
											<Icon type="twitter-square" theme="filled" />
										</a>
									)}
									{(site.siteMetadata.social.linkedin && site.siteMetadata.social.linkedin.length > 0) && (
										<a href={site.siteMetadata.social.linkedin} target="_blank" rel="noreferrer noopener nofollow" title="linkedin">
											<Icon type="linkedin" theme="filled" />
										</a>
									)}
									{(site.siteMetadata.social.email && site.siteMetadata.social.email.length > 0) && (
										<a href={`mailto:${site.siteMetadata.social.email}?subject=Gatsby%20Wordpress%20Typescript%20SCSS%20Blog`} target="_blank" rel="noreferrer noopener nofollow" title="mail">
											<Icon type="mail" theme="filled" />
										</a>
									)}
								</Fragment>
							)}
						</div>
					</Col>
					<Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8} className="author-container align-center">
						<h6 className="author margin-bottom-0px">Gatsby theme by Sagar Jain</h6>
					</Col>
				</Row>
			</AntLayout.Footer>
		</div>
	);
};

export default Footer;
