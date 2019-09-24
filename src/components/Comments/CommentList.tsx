import React, { Component } from 'react';

import { Comment as PostComment, Icon } from 'antd';

import { timeSinceXAgo } from '../../contracts/util';
import { Comment } from '../../contracts/comment';

export interface Props {
	comments: Comment;
}

export class CommentList extends Component<Props> {

	render() {
		return (
			(this.props.comments && this.props.comments.edges && this.props.comments.edges.length > 0) && (
				this.props.comments.edges.map((comment, index) => {
					return (
						(comment.node.message && comment.node.message !== '') && (
							<PostComment key={index}
								author={(comment.node.name && comment.node.name.length > 0) ? comment.node.name : '--'}
								avatar={<Icon type="user" />}
								content={(comment.node.message && comment.node.message.length > 0) ? comment.node.message : ''}
								datetime={(comment.node.date && comment.node.date > 0) ? <span>{timeSinceXAgo(new Date(comment.node.date * 1000))}</span> : null}
							/>
						)
					);
				})
			)
		);
	}

}
