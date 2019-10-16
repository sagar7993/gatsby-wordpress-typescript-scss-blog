import React, { Fragment, ReactNode } from 'react';

import Image from 'gatsby-image';

import { Icon } from 'antd';

import { InstagramFeed } from '../../contracts/post';

import './Instagram.scss';

export interface Props {
	allInstaNode: InstagramFeed;
	orientation: 'horizontal' | 'vertical';
	title?: ReactNode;
}

export const Instagram = (props: Props) => {
	return (
		(process.env.GATSBY_INSTAGRAM_SOURCE && process.env.GATSBY_INSTAGRAM_SOURCE.length > 0 && props.allInstaNode && props.allInstaNode.edges && props.allInstaNode.edges.length > 0) ? (
			<div className={`instagram-feed ${props.orientation === 'horizontal' ? 'instagram-feed-horizontal' : (props.orientation === 'vertical' ? 'instagram-feed-vertical' : 'instagram-feed-horizontal')}`}>
				{props.title}
				<div className="instagram-posts">
					<a href={`https://instagram.com/${process.env.GATSBY_INSTAGRAM_SOURCE}`} target="_blank" rel="noopenernoopener noreferrer nofollow" title={process.env.GATSBY_INSTAGRAM_SOURCE} className="instagram-profile ant-btn ant-btn-default" ><Icon type="instagram" className="margin-right-8px" />Follow me</a>
					{props.allInstaNode.edges.map((instagramPost, index) => {
						return (
							(instagramPost.node && instagramPost.node.localFile && instagramPost.node.localFile.childImageSharp) ? (
								<div key={index} className="instagram-post">
									<a href={`https://instagram.com/p/${instagramPost.node.id}`} target="_blank" rel="noopenernoopener noreferrer nofollow" title={instagramPost.node.caption}>
										<Image fluid={instagramPost.node.localFile.childImageSharp.fluid} alt={instagramPost.node.caption} title={instagramPost.node.caption} data-pin-nopin="true" />
									</a>
								</div>
							) : <Fragment key={index} />
						);
					})}
				</div>
			</div>
		) : <Fragment />
	);
};

export default Instagram;
