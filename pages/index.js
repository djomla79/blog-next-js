import { Fragment } from 'react';
import AboutMe from '../components/home-page/about-me';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../helpers/util-posts';
import Head from '../metadata/head';

function HomePage({ posts }) {
  return (
    <Fragment>
      <Head
        active={false}
        title='My Blog'
        content='Blog about programming and web development'
      />
      <AboutMe />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
