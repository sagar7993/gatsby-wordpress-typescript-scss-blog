import React, { Component } from 'react';

import './Comments.scss';

import CommentForm from './CommentForm';

export interface Props {
	slug: string;
	wordpress_id: string;
}

export interface State {
	isLoading: boolean;
}

export class Comments extends Component<Props, State> {

	state: State = {
		isLoading: false
	};

	render() {
		return (
			<div>
				<hr />
				<h2>Comments</h2>
				<p>No comments yet.</p>
				<CommentForm slug={this.props.slug} wordpress_id={this.props.wordpress_id} />
			</div>
		);
	}
}

export default Comments;
