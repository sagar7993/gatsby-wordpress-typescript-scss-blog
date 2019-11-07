import React, { Component } from 'react';

import { Form, Button, Input, Icon, message as Message } from 'antd';
import { FormComponentProps } from 'antd/lib/form';

import { AddCommentRequest } from '../../contracts/comment';

import { addComment } from '../../services/comment';

export interface Props extends FormComponentProps {
	slug: string;
	wordpress_id: number;
}

export interface State {
	isLoading: boolean;
}

export class CommentForm extends Component<Props, State> {

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
				Message.success('Comment sent for approval successfully', 3);
				this.props.form.resetFields();
			} else {
				Message.error('Comment could not be added', 3);
			}
		} catch (error) {
			console.error(error);
			Message.error('Comment could not be added', 3);
		} finally {
			this.setState({ isLoading: false });
			this.props.form.setFieldsValue({ name: '', email: '', comment: '' });
		}
	}

	render() {
		return (
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
					{this.props.form.getFieldDecorator('message', {
						rules: [{ required: true, message: 'Please enter your comment' }]
					})(
						<Input.TextArea placeholder="Please enter your comment" rows={4} />
					)}
				</Form.Item>
				<Form.Item className="margin-bottom-0px">
					{this.props.form.getFieldDecorator('slug', {
						rules: [{ required: true }],
						initialValue: this.props.slug
					})(
						<Input type="hidden" />
					)}
				</Form.Item>
				<Form.Item className="margin-bottom-0px">
					{this.props.form.getFieldDecorator('wordpress_id', {
						rules: [{ required: true }],
						initialValue: this.props.wordpress_id
					})(
						<Input type="hidden" />
					)}
				</Form.Item>
				<div className="margin-bottom-36px">
					<Button type="primary" htmlType="submit" loading={this.state.isLoading}>Submit</Button>
				</div>
			</Form>
		);
	}

}

export default Form.create<Props>({ name: 'comments' })(CommentForm);
