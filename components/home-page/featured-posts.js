import PostList from '../posts/post-list';

import classes from './featured-posts.module.css';

function FeaturedPosts({ posts }) {
  return (
    <section className={classes.latest}>
      <h3>Featured Posts</h3>
      <PostList posts={posts} />
    </section>
  );
}

export default FeaturedPosts;
