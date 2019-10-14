import React, { Component, Fragment } from 'react';

import './Comments.scss';

import CommentForm from './CommentForm';

import { CommentEdges } from '../../contracts/comment';
import { CommentList } from './CommentList';

export interface Props {
	slug: string;
	wordpress_id: number;
	comments: CommentEdges;
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
			(process.env.GATSBY_ENABLE_COMMENTS === '1' && process.env.GATSBY_STATICMAN_BASE && process.env.GATSBY_STATICMAN_BASE.length > 0 && process.env.GATSBY_GITHUB_USER && process.env.GATSBY_GITHUB_USER.length > 0 && process.env.GATSBY_GITHUB_REPO && process.env.GATSBY_GITHUB_REPO.length > 0) ? (
				<div className="comments-container">
					<h2>Comments</h2>
					<p>{(this.props.comments && this.props.comments.edges && this.props.comments.edges.length > 0) ? `${this.props.comments.edges.length} Comment${this.props.comments.edges.length > 1 ? 's' : ''}` : 'No comments yet.'}</p>
					{this.props.comments.edges.length > 0 && <CommentList comments={this.props.comments} />}
					<p>Leave a comment</p>
					<CommentForm slug={this.props.slug} wordpress_id={this.props.wordpress_id} />
				</div>
			) : <Fragment />
		);
	}
}

export default Comments;
