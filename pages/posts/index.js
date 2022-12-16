import { Fragment } from 'react';
import Posts from '../../components/posts/posts';
import { getPosts } from '../../helpers/util-posts';
import Head from '../../metadata/head';

function PostsPage({ posts }) {
  return (
    <Fragment>
      <Head
        active={false}
        title='All Posts'
        content='The list of all tutorials and posts.'
      />
      <Posts posts={posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const posts = getPosts();

  return {
    props: {
      posts: posts,
    },
  };
}

export default PostsPage;
