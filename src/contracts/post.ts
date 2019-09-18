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

export class Post {
	id: number = 0;
	date: string = '';
	modified: Date = new Date();
	slug: string = '';
	status: string = '';
	type: string = '';
	link: string = '';
	title: string = '';
	content: string = '';
	excerpt: string = '';
	author: string = '';
	featured_media: Media = new Media();
	wordpress_id: number = 0;
	categories: CategoryTagInfo[] = new Array<CategoryTagInfo>();
	tags: CategoryTagInfo[] = new Array<CategoryTagInfo>();
}

export class Media {
	localFile?: {
		childImageSharp: {
			fluid: FluidObject;
		}
	} | null = null;
	file?: {
		childImageSharp: {
			fluid: FluidObject;
		}
	} | null = null;
}
