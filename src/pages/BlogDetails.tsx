import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hook';
import DetailBlogHero from '../components/Hero/DetailBlogHero/DetailBlogHero';
import { setSelectedArticle } from '../redux/Blogs/BlogsSlice';
import { BlogDetailsSection } from '../components/BlogDetailsSection/BlogDetailsSection';

const BlogDetails: React.FC = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const dispatch = useAppDispatch();
  const articles = useAppSelector(state => state.blog.blogData);
  console.log(articles);
  const [articleData, setArticleData] = useState<any>(null);
  console.log(articleData);
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);

  useEffect(() => {
    const selectedArticle = localStorage.getItem('selectedArticle');
    if (selectedArticle) {
      const parsedArticle = JSON.parse(selectedArticle);
      console.log(parsedArticle);
      const currentIndex = articles.findIndex(
        article => article.id === parsedArticle.id
      );
      console.log(currentIndex);
      setCurrentArticleIndex(currentIndex);
      setArticleData(parsedArticle);
      dispatch(setSelectedArticle(parsedArticle));
    }
  }, [blogId, dispatch, articles]);

  if (!articleData) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <DetailBlogHero articleData={articleData} />
      <BlogDetailsSection articleData={articleData} />
    </main>
  );
};

export default BlogDetails;
