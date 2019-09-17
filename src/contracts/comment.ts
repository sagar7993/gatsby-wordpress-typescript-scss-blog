export class AddCommentRequest {
	name: string = '';
	email: string = '';
	comment: string = '';
	slug: string = '';
	wordpress_id: number = 0;
}

export class AddCommentResponse {
	success: boolean = false;
}

class CommentNode {
	date: number = 0;
	email: string = '';
	id: string = '';
	message: string = '';
	name: string = '';
	slug: string = '';
	wordpress_id: number = 0;
}

class CommentsEdges {
	node: CommentNode = new CommentNode();
}

export class Comment {
	edges: CommentsEdges[] = new Array<CommentsEdges>();
}
