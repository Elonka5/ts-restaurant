import React from 'react';
import BlogList from '../components/Blog/BlogList/BlogList';
import BlogsHero from '../components/Hero/BlogsHero/BlogsHero';

const Blog = () => {
  return (
    <main>
      <BlogsHero />
      <BlogList />
    </main>
  );
};

export default Blog;
