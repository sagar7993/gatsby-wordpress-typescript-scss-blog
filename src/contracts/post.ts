import { FluidObject } from 'gatsby-image';

export class CategoryTagInfo {
	count: number = 0;
	description: string = '';
	id: string = '';
	link: string = '';
	name: string = '';
	path: string = '';
	slug: string = '';
	wordpress_id: number = 0;
}

export class AuthorInfo {
	description: string = '';
	id: string = '';
	link: string = '';
	name: string = '';
	path: string = '';
	slug: string = '';
	url: string = '';
	wordpress_id: string = '';
}

export class Post {
	id: number = 0;
	date: string = '';
	modified: string = '';
	slug: string = '';
	status: string = '';
	type: string = '';
	link: string = '';
	title: string = '';
	content: string = '';
	excerpt: string = '';
	author: AuthorInfo = new AuthorInfo();
	featured_media: Media = new Media();
	wordpress_id: number = 0;
	categories: CategoryTagInfo[] = new Array<CategoryTagInfo>();
	tags: CategoryTagInfo[] = new Array<CategoryTagInfo>();
}

export class ChildImageFluid {
	fluid?: FluidObject;
}

export class ChildImageSharp {
	childImageSharp?: ChildImageFluid;
}

export class Media {
	localFile?: ChildImageSharp;
	file?: ChildImageSharp;
}

export class InstagramPostDimensions {
	height: number = 0;
	width: number = 0;
}

export class InstagramPostThumbnail {
	config_height: number = 0;
	config_width: number = 0;
	src: string = '';
}

export class InstagramPost {
	caption: string = '';
	comments: number = 0;
	dimensions: InstagramPostDimensions = new InstagramPostDimensions();
	id: string = '';
	likes: number = 0;
	localFile?: ChildImageSharp;
	mediaType: string = '';
	original: string = '';
	preview: string = '';
	thumbnails: InstagramPostThumbnail[] = new Array<InstagramPostThumbnail>();
	timestamp: number = 0;
}

export class InstagramNode {
	node: InstagramPost = new InstagramPost();
}

export class InstagramFeed {
	edges: InstagramNode[] = new Array<InstagramNode>();
}
