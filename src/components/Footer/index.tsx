import React from 'react';

import { Layout } from 'antd';

import './Footer.scss';

export const Footer = () => {
	return (
		<div className="footer-container">
			<div className="footer-wrapper">
				<Layout>
					<Layout.Footer className="footer">
						<h6 className="align-center margin-bottom-0px">© Copyright {(new Date()).getFullYear()} All rights reserved</h6>
					</Layout.Footer>
				</Layout>
			</div>
		</div>
	);
};

export default Footer;
