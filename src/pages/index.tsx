import React from 'react';

import { graphql } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';

import { Card, Row, Col } from 'antd';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import { Media } from '../contracts/post';

import '../templates/Blog.scss';

export interface Props {
	data: Media;
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
							{fluid && <Image fluid={fluid} alt="Banner" />}
						</Col>
						<Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
							<div className="features-wrapper margin-top-36px">
								<div className="features">
									<p>This is an opinionated starter project to help you create lightening fast PWA websites with Gatsby and Wordpress CMS, built using Typescript and Ant Design.</p>
									<p>View the <a href="https://github.com/sagar7993/gatsby-wordpress-typescript-blog-boilerplate" target="_blank" rel="noopener nofollow">Github repo</a></p>
								</div>
							</div>
						</Col>
					</Row>
				</Card>
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
  	}
`;
