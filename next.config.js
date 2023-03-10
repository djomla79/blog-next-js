/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: 'username',
        mongodb_password: '685tmdjomla',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-blog-dev',
      },
    };
  }
  return {
    reactStrictMode: true,
    env: {
      mongodb_username: 'username',
      mongodb_password: '685tmdjomla',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-blog',
    },
  };
};
