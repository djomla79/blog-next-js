import PostList from './post-list';
import classes from './posts.module.css';

function Posts({ posts }) {
  return <section className={classes.posts}>
    <PostList posts={posts} />
  </section>;
}

export default Posts;
