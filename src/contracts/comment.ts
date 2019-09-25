export class AddCommentRequest {
	name: string = '';
	email: string = '';
	message: string = '';
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

class CommentsNodes {
	node: CommentNode = new CommentNode();
}

export class CommentEdges {
	edges: CommentsNodes[] = new Array<CommentsNodes>();
}
