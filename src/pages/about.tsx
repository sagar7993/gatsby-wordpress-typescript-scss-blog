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

export const AboutPage = (props: Props) => {
	const fluid: FluidObject | null = (props.data && props.data.file && props.data.file.childImageSharp && props.data.file.childImageSharp.fluid) ? props.data.file.childImageSharp.fluid : null;
	return (
		<Layout location={props.location}>
			<SEO title="About Me" />
			<Row gutter={36}>
				<Col xs={24} sm={24} md={24} lg={16} xl={18} xxl={18} id="primary" className="content-area with-sidebar">
					<div className="about">
						<Card>
							<Row gutter={24} type="flex" align="middle">
								<Col xs={24} sm={24} md={24} lg={12} xl={14} xxl={16}>
									{(fluid && fluid.src && fluid.src.length > 0) && (
										<Image fluid={fluid} alt="Author Bio" title="Author Bio" data-pin-nopin="true" />
									)}
								</Col>
								<Col xs={24} sm={24} md={24} lg={12} xl={10} xxl={8}>
									<div className="description-wrapper">
										<h2 className="text-uppercase">John Doe</h2>
										<p className="text-bold text-uppercase">Frontend Engineer</p>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
										<div className="description">
											<p className="margin-bottom-12px">
												<span className="icon"><Icon type="calendar" /></span>
												<span className="label">31st December, 1992</span>
											</p>
											<p className="margin-bottom-12px">
												<span className="icon"><Icon type="phone" /></span>
												<span className="label">44 (012) 6954 783</span>
											</p>
											<p className="margin-bottom-12px">
												<span className="icon"><Icon type="mail" /></span>
												<span className="label">john@doe</span>
											</p>
											<p>
												<span className="icon"><Icon type="pushpin" /></span>
												<span className="label">Santa Monica Boulevard</span>
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
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
											<h3>Experience</h3>
											<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
											<h3>Skills</h3>
											<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of “de Finibus Bonorum et Malorum” (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, “Lorem ipsum dolor sit amet..”, comes from a line in section 1.10.32.</p>
											<h3>Education</h3>
											<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
											<h3>Miscellaneous</h3>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
											<h3>Awards</h3>
											<p className="margin-bottom-0px">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
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
