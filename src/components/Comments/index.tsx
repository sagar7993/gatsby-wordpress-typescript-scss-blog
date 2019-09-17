import React, { Component } from 'react';

import { Form, Button, Input, Icon, message as Message } from 'antd';
import { FormComponentProps } from 'antd/lib/form';

import './Comments.scss';

import { AddCommentRequest } from '../../contracts/comment';
import { addComment } from '../../services/comment';

export interface Props extends FormComponentProps { }

export interface State {
	isLoading: boolean;
}

export class Comments extends Component<Props, State> {

	state: State = {
		isLoading: false
	};

	onSubmit = ($event: React.FormEvent<HTMLFormElement>) => {
		$event.preventDefault();
		this.props.form.validateFields(
			(errors: unknown, addCommentRequest: AddCommentRequest) => {
				if (!errors) {
					this.addComment(addCommentRequest);
				}
			}
		);
	}

	addComment = async (addCommentRequest: AddCommentRequest) => {
		this.setState({ isLoading: true });
		try {
			const response = await addComment(addCommentRequest);
			if (response.success) {
				Message.success('Comment added successfully', 3);
			}
		} catch (error) {
			console.error(error);
			Message.success('Comment could not be added', 3);
		} finally {
			this.setState({ isLoading: false });
		}

	}

	render() {
		return (
			<div>
				<hr />
				<h2>Comments</h2>
				<p>No comments yet.</p>
				<Form onSubmit={this.onSubmit}>
					<Form.Item label="Name" labelAlign="left" hasFeedback={true} className="margin-bottom-0px">
						{this.props.form.getFieldDecorator('name', {
							rules: [{ required: true, message: 'Please enter valid name' }]
						})(
							<Input prefix={<Icon type="user" />} placeholder="Name" />
						)}
					</Form.Item>
					<Form.Item label="Email" labelAlign="left" hasFeedback={true} className="margin-bottom-0px">
						{this.props.form.getFieldDecorator('email', {
							rules: [{ required: true, type: 'email', message: 'Please enter valid email' }]
						})(
							<Input prefix={<Icon type="mail" />} placeholder="Email" />
						)}
					</Form.Item>
					<Form.Item label="Comment" labelAlign="left" hasFeedback={true}>
						{this.props.form.getFieldDecorator('comment', {
							rules: [{ required: true, message: 'Please enter your comment' }]
						})(
							<Input.TextArea placeholder="Please enter your comment" rows={4} />
						)}
					</Form.Item>
					<div className="margin-bottom-36px">
						<Button type="primary" htmlType="submit" loading={this.state.isLoading}>Submit</Button>
					</div>
				</Form>
			</div>
		);
	}
}

export default Form.create({ name: 'comments' })(Comments);
