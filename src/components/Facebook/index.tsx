import React, { Component, Fragment } from 'react';

import './Facebook.scss';

export class Facebook extends Component {
	render() {
		return (
			(process.env.GATSBY_FACEBOOK_SOURCE && process.env.GATSBY_FACEBOOK_SOURCE.length > 0) ? (
				<div className="facebook-profile-container">
					<div className="fb-page" data-href="https://www.facebook.com/lonelyplanet" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
						<blockquote cite="https://www.facebook.com/lonelyplanet" className="fb-xfbml-parse-ignore">
							<a href="https://www.facebook.com/lonelyplanet" target="_blank" rel="noopener noreferrer nofollow">Lonely Planet</a>
						</blockquote>
					</div>
				</div>
			) : <Fragment />
		);
	}
}

export default Facebook;
