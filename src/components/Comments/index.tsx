import React, { Component } from 'react';

import './Comments.scss';

import CommentForm from './CommentForm';

import { Comment } from '../../contracts/comment';
import { CommentList } from './CommentList';

export interface Props {
	slug: string;
	wordpress_id: number;
	comments: Comment;
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
				<p>{(this.props.comments && this.props.comments.edges && this.props.comments.edges.length > 0) ? `${this.props.comments.edges.length} Comment${this.props.comments.edges.length > 1 ? 's' : ''}` : 'No comments yet.'}</p>
				{this.props.comments.edges.length > 0 && <CommentList comments={this.props.comments} />}
				<p>Leave a comment</p>
				<CommentForm slug={this.props.slug} wordpress_id={this.props.wordpress_id} />
			</div>
		);
	}
}

export default Comments;
