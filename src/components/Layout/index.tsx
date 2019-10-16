import React, { Component, Fragment, RefObject, createRef } from 'react';

import { Layout as AntLayout } from 'antd';

import Header from '../Header';
import Footer from '../Footer';

import ReadingProgressBar from '../ReadingProgressBar';

import './Layout.scss';

export interface Props {
	children: React.ReactNode;
	location: Location;
}

export class Layout extends Component<Props> {

	target: RefObject<HTMLDivElement> = createRef();

	render() {
		return (
			<Fragment>
				<ReadingProgressBar target={this.target} />
				<AntLayout className="layout-container">
					<Header location={this.props.location} />
					<div className="layout" ref={this.target}>
						<main>{this.props.children}</main>
					</div>
					<Footer />
				</AntLayout>
			</Fragment>
		);
	}

}

export default Layout;
