import React, { Fragment, Component } from 'react';

import Header from '../Header';
import Footer from '../Footer';

import './Layout.scss';

export interface Props {
	children: React.ReactNode;
	location: Location;
}

export class Layout extends Component<Props> {

	render() {
		return (
			<Fragment>
				<Header location={this.props.location} />
				<div className="layout">
					<main>{this.props.children}</main>
				</div>
				<Footer />
			</Fragment>
		);
	}

}

export default Layout;
