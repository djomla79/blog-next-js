import { Fragment } from 'react';
import PostContent from '../../components/posts/post-details/post-content';
import { getPostData, getPostFiles } from '../../helpers/util-posts';
import Head from '../../metadata/head';

function PostDetailsPage({ post }) {
  return (
    <Fragment>
      <Head active={false} title={post.title} content={post.content} />
      <PostContent post={post} />
    </Fragment>
  );
}

export function getStaticPaths() {
  const postFiles = getPostFiles();
  const detailsList = postFiles.map((fileName) =>
    fileName.replace(/\.md$/, '')
  );

  return {
    paths: detailsList.map((details) => ({ params: { details: details } })),
    fallback: false,
  };
}

export function getStaticProps(context) {
  const details = context.params.details;
  const post = getPostData(details);
  return {
    props: {
      post: post,
    },
    revalidate: 600,
  };
}

export default PostDetailsPage;
