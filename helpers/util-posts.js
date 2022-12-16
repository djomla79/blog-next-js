import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

function getPostFiles() {
  return fs.readdirSync(postsDirectory);
}

function getPostData(postIdentifier) {
  const details = postIdentifier.replace(/\.md$/, ''); // removes the file extension
  const filePath = path.join(postsDirectory, `${details}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postData = {
    details,
    ...data,
    content,
  };

  return postData;
}

function getPosts() {
  const postFiles = getPostFiles();

  const posts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

function getFeaturedPosts() {
  const posts = getPosts();

  return posts.filter((post) => post.isFeatured);
}

export { getPosts, getFeaturedPosts, getPostData, getPostFiles };
