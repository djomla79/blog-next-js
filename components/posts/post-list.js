import PostItem from './post-item';

import classes from './post-list.module.css';

function PostList({ posts }) {
  return (
    <div className={classes.list}>
      {posts.map((post) => (
        <PostItem key={post.details} post={post} />
      ))}
    </div>
  );
}

export default PostList;
