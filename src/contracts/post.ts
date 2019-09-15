import { FixedObject } from 'gatsby-image';

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
	featured_media: any = {};
}

export class Media {
	localFile: {
		childImageSharp: {
			fixed: FixedObject;
		}
	} | null = null;
}
