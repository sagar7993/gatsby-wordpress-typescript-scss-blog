import React, { Fragment } from 'react';

import Image from 'gatsby-image';

import { InstagramFeed } from '../../contracts/post';

import './Instagram.scss';

export interface Props {
	allInstaNode: InstagramFeed;
}

export const Instagram = (props: Props) => {
	return (
		(process.env.GATSBY_INSTAGRAM_SOURCE && process.env.GATSBY_INSTAGRAM_SOURCE.length > 0 && props.allInstaNode && props.allInstaNode.edges && props.allInstaNode.edges.length > 0) ? (
			<Fragment>
				<p className="margin-top-36px margin-bottom-0px">Follow me on Instagram <a href={`https://instagram.com/${process.env.GATSBY_INSTAGRAM_SOURCE}`} target="_blank" rel="noopenernoopener noreferrer nofollow">@{process.env.GATSBY_INSTAGRAM_SOURCE}</a></p>
				<div className="instagram-feed margin-top-36px">
					{props.allInstaNode.edges.map((instagramPost, index) => {
						return (
							(instagramPost.node) && (
								<div key={index} className="instagram-post">
									{(instagramPost.node.localFile && instagramPost.node.localFile.childImageSharp) && (
										<a href={instagramPost.node.original} target="_blank" rel="noopenernoopener noreferrer nofollow">
											<Image fluid={instagramPost.node.localFile.childImageSharp.fluid} />
										</a>
									)}
								</div>
							)
						);
					})}
				</div>
			</Fragment>
		) : <Fragment />
	);
};

export default Instagram;
