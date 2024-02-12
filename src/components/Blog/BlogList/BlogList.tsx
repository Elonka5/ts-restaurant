import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hook';
import { BlogItem, fetchBlog } from '../../../redux/Blogs/BlogsThunk';
import Container from '../../Container/Container';
import BlogCard from '../BlogCard/BlogCard';
import { BlogContainer, BlogListSection } from './BlogListStyled';

const BlogList: React.FC = () => {
  const articles = useAppSelector(state => state.blog.blogData);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchBlog());
  }, [dispatch]);
  return (
    <BlogListSection>
      <Container variant="other">
        <BlogContainer>
          {articles.map((article: any, index: number) => (
            <BlogCard
              key={article.id}
              article={article}
              idx={index}
              onArticleClick={(article: BlogItem, idx: number) =>
                console.log('Selected index:', idx)
              }
            />
          ))}
        </BlogContainer>
      </Container>
    </BlogListSection>
  );
};

export default BlogList;
