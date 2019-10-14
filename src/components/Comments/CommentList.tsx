import React, { Component, Fragment } from 'react';

import { Comment, Icon } from 'antd';

import { timeSinceXAgo } from '../../contracts/util';
import { CommentEdges } from '../../contracts/comment';

export interface Props {
	comments: CommentEdges;
}

export class CommentList extends Component<Props> {

	render() {
		return (
			(this.props.comments && this.props.comments.edges && this.props.comments.edges.length > 0) ? (
				this.props.comments.edges.map((comment, index) => {
					return (
						(comment.node.message && comment.node.message !== '') ? (
							<Comment key={index}
								author={(comment.node.name && comment.node.name.length > 0) ? comment.node.name : '--'}
								avatar={(comment.node.email && comment.node.email.length > 0) ? <img src={`https://secure.gravatar.com/avatar/${comment.node.email}?s=200&r=pg&d=mm`} alt="user" /> : <Icon type="user" />}
								content={(comment.node.message && comment.node.message.length > 0) ? comment.node.message : ''}
								datetime={(comment.node.date && comment.node.date > 0) ? <span>{timeSinceXAgo(new Date(comment.node.date * 1000))}</span> : null}
							/>
						) : <Fragment key={index} />
					);
				})
			) : <Fragment />
		);
	}

}
