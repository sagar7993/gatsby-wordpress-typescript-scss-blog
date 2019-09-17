export class AddCommentRequest {
	name: string = '';
	email: string = '';
	comment: string = '';
	slug: string = '';
	wordpress_id: string = '';
}

export class AddCommentResponse {
	success: boolean = false;
}
