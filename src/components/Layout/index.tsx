import React, { Component } from 'react';

import { Layout as AntLayout } from 'antd';

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
			<AntLayout className="layout-container">
				<Header location={this.props.location} />
				<div className="layout">
					<main>{this.props.children}</main>
				</div>
				<Footer />
			</AntLayout>
		);
	}

}

export default Layout;
