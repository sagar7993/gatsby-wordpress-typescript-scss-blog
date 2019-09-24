import React from 'react';

import { Layout, Row, Col, Icon } from 'antd';

import './Footer.scss';

export const Footer = () => {
	return (
		<div className="footer-container">
			<div className="footer-wrapper">
				<Layout>
					<Layout.Footer className="footer">
						<Row type="flex" align="middle">
							<Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8} className="copyright-container align-center">
								<h6 className="copyright margin-bottom-0px">© Copyright {(new Date()).getFullYear()} All rights reserved</h6>
							</Col>
							<Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8} className="align-center social-icons-container">
								<div className="social-icons margin-bottom-0px">
									<a href="https://www.github.com/sagar7993" target="_blank" rel="noreferrer noopener nofollow" title="github">
										<Icon type="github" theme="filled" />
									</a>
									<a href="https://www.facebook.com/sagar7993" target="_blank" rel="noreferrer noopener nofollow" title="facebook">
										<Icon type="facebook" theme="filled" />
									</a>
									<a href="https://www.twitter.com/sagar7993" target="_blank" rel="noreferrer noopener nofollow" title="twitter">
										<Icon type="twitter-square" theme="filled" />
									</a>
									<a href="https://www.linkedin.com/in/sagar-jain-006074a1" target="_blank" rel="noreferrer noopener nofollow" title="linkedin">
										<Icon type="linkedin" theme="filled" />
									</a>
									<a href="mailto:sagar7993@gmail.com?subject=Gatsby%20Wordpress%20Typescript%20SCSS%20Blog" target="_blank" rel="noreferrer noopener nofollow" title="mail">
										<Icon type="mail" theme="filled" />
									</a>
								</div>
							</Col>
							<Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8} className="author-container align-center">
								<h6 className="author margin-bottom-0px">Gatsby theme by Sagar Jain</h6>
							</Col>
						</Row>
					</Layout.Footer>
				</Layout>
			</div>
		</div>
	);
};

export default Footer;
