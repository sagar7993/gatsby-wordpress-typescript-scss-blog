import axios, { AxiosResponse } from 'axios';

import { postRequest } from './common';

import { AddCommentRequest, AddCommentResponse } from '../contracts/comment';

const addCommentUrl = `${process.env.GATSBY_STATICMAN_BASE}/${process.env.GATSBY_GITHUB_USER}/${process.env.GATSBY_GITHUB_REPO}/master/comments`;

export const addComment = async (addCommentRequest: AddCommentRequest): Promise<AddCommentResponse> => {
	try {
		const formdata = new FormData();
		formdata.set('fields[name]', addCommentRequest.name);
		formdata.set('fields[email]', addCommentRequest.email);
		formdata.set('fields[message]', addCommentRequest.message);
		formdata.set('fields[slug]', addCommentRequest.slug);
		formdata.set('fields[wordpress_id]', addCommentRequest.wordpress_id.toString());
		const json: Record<string, any> = {};
		formdata.forEach((value, prop) => (json[prop] = value));
		const formBody = Object.keys(json).map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(json[key])).join('&');
		const response: AxiosResponse<AddCommentResponse> = await axios(postRequest(addCommentUrl, formBody, '', true));
		return response.data;
	} catch (error) {
		return Promise.reject(error.response);
	}
};
