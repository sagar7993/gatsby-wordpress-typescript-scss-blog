import React from 'react';

import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

export const BlogPost = ({ data, pageContext }: { data: any, pageContext: any }) => {
	console.log(pageContext);
	return (
		<Layout>
			<SEO title={data.wordpressPost.title} description={data.wordpressPost.excerpt} />
			<h1>{data.wordpressPost.title}</h1>
			<p>
				Written by {data.wordpressPost.author.name} on {data.wordpressPost.date}
			</p>
			<div
				style={{ marginTop: 20 }}
				dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
			/>
			<div style={{ marginBottom: 24, display: 'flex', justifyContent: 'space-between' }}>
				{pageContext.previous &&
					<Link to={`/post/${pageContext.previous.slug}`}>
						<div>Previous Post</div>
					</Link>
				}
				{pageContext.next &&
					<Link to={`/post/${pageContext.previous.slug}`}>
						<div>Next Post</div>
					</Link>
				}
			</div>
		</Layout>
	);
};

export default BlogPost;

export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
      excerpt
      date(formatString: "MMMM DD, YYYY")
      author {
        name
      }
    }
  }
`;
