import React from 'react';

import './Comments.scss';

export const Comments = () => {
	return (
		<div>
			<hr />
			<h2>Comments</h2>
			<p>No comments yet.</p>
			<form method="POST" action="https://dev.staticman.net/v3/entry/github/sagar7993/gatsby-wordpress-typescript-blog-boilerplate/master/comments">
				<input name="options[redirect]" type="hidden" value="https://my-site.com" />
				<input name="options[slug]" type="hidden" value="{{ page.slug }}" />
				<label><input name="fields[name]" type="text" />Name</label>
				<label><input name="fields[email]" type="email" />E-mail</label>
				<label><textarea name="fields[message]"></textarea>Message</label>
				<button type="submit">Go!</button>
			</form>
		</div>
	);
};

export default Comments;
