import React, { Fragment } from 'react';

import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

export const BlogPost = ({ data }: { data: any }) => {
	console.log(data);
	return (
		<Layout>
			{data &&
				<Fragment>
					<SEO title={data.wordpressPost.title} description={data.wordpressPost.excerpt} />
					<h1>{data.wordpressPost.title}</h1>
					<p>
						Written by {data.wordpressPost.author.name} on {data.wordpressPost.date}
					</p>
					<div
						style={{ marginTop: 20 }}
						dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
					/>
				</Fragment>
			}
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
