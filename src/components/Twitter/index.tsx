import React, { Component, Fragment } from 'react';

import './Twitter.scss';

export class Twitter extends Component {
	render() {
		return (
			(process.env.GATSBY_TWITTER_SOURCE && process.env.GATSBY_TWITTER_SOURCE.length > 0) ? (
				<div className="twitter-timeline-container">
					<a href={`https://twitter.com/${process.env.GATSBY_TWITTER_SOURCE}`} target="_blank" rel="noopener noreferrer nofollow" className="twitter-timeline" data-chrome="noheader nofooter noborders noscrollbar transparent" data-tweet-limit="1">
						Tweets by @{process.env.GATSBY_TWITTER_SOURCE}
					</a>
				</div>
			) : <Fragment />
		);
	}
}

export default Twitter;
