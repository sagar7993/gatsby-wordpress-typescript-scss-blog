export class AddCommentRequest {
	name: string = '';
	email: string = '';
	comment: string = '';
	slug: string = '';
}

export class AddCommentResponse {
	success: boolean = false;
}
