import React, { Fragment, Component } from 'react';

import Header from '../Header';
import Footer from '../Footer';

import { addScriptToDocument } from '../../contracts/util';

import './Layout.scss';

export interface Props {
	children: React.ReactNode;
}

export class Layout extends Component<Props> {

	componentDidMount() {
		if (process.env.GATSBY_TWITTER_SOURCE && process.env.GATSBY_TWITTER_SOURCE.length > 0) {
			addScriptToDocument('https://platform.twitter.com/widgets.js', null, null, true);
		}
		if (process.env.GATSBY_FACEBOOK_SOURCE && process.env.GATSBY_FACEBOOK_SOURCE.length > 0) {
			addScriptToDocument('https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v4.0', null, null, true);
		}
	}

	render() {
		return (
			<Fragment>
				<Header />
				<div className="layout">
					<div id="fb-root"></div>
					<main>{this.props.children}</main>
				</div>
				<Footer />
			</Fragment>
		);
	}

}

export default Layout;
