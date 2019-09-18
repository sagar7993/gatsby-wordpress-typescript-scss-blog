import React from 'react';

import { graphql } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';

import { Card, Row, Col, Icon } from 'antd';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import { Media } from '../contracts/post';

import '../templates/Blog.scss';

export interface Props {
	data: Media;
}

export const AboutPage = (props: Props) => {
	const fluid: FluidObject | null = (props.data && props.data.file && props.data.file.childImageSharp && props.data.file.childImageSharp.fluid) ? props.data.file.childImageSharp.fluid : null;
	return (
		<Layout>
			<SEO title="About Me" />
			<div className="about">
				<Card>
					<Row gutter={24} type="flex" align="middle">
						<Col xs={24} sm={24} md={24} lg={12} xl={14} xxl={16}>
							{fluid && <Image fluid={fluid} alt="Author Bio" />}
						</Col>
						<Col xs={24} sm={24} md={24} lg={12} xl={10} xxl={8}>
							<div className="description-wrapper">
								<h2 className="text-uppercase">John Doe</h2>
								<p className="text-bold text-uppercase">Frontend Engineer</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
								<div className="description">
									<p className="margin-bottom-12px">
										<span className="icon"><Icon type="mail" /></span>
										<span className="label">31st December, 1992</span>
									</p>
									<p className="margin-bottom-12px">
										<span className="icon"><Icon type="mail" /></span>
										<span className="label">44 (012) 6954 783</span>
									</p>
									<p className="margin-bottom-12px">
										<span className="icon"><Icon type="mail" /></span>
										<span className="label">businessplan@donald</span>
									</p>
									<p>
										<span className="icon"><Icon type="mail" /></span>
										<span className="label">Santa monica bullevard</span>
									</p>
								</div>
							</div>
						</Col>
					</Row>
					<Row>
						<Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
							<div className="introduction-wrapper">
								<div className="introduction">
									<h3>About me</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
								</div>
							</div>
						</Col>
					</Row>
				</Card>
			</div>
		</Layout>
	);
};

export default AboutPage;

export const query = graphql`
  	query {
    	file(relativePath: { eq: "author.jpg" }) {
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
`;
