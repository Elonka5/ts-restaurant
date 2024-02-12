import React from 'react';
import { BlogItem } from '../../../redux/Blogs/BlogsThunk';
import { useAppDispatch } from '../../../hook';
import { setSelectedArticle } from '../../../redux/Blogs/BlogsSlice';
import { Link } from 'react-router-dom';
import {
  AuthorContainer,
  CardBlog,
  CategoryText,
  DescriptionWrap,
  Thumb,
  TitleBlogWrap,
} from './BlogCardStyled';
import { DottsLine } from '../../MenuSection/MenuSectionStyled';
import { Text } from '../../Hero/HeroStyled';
import { ReactComponent as ArrowRight } from '../../../assets/images/svg/Icon_arrow-right.svg';

interface BlogProps {
  article: BlogItem;
  idx: number;
  onArticleClick: (article: BlogItem, idx: number) => void;
}

const BlogCard: React.FC<BlogProps> = ({ article, idx, onArticleClick }) => {
  const {
    id,
    author_name,
    avatar_url,
    date,
    time,
    previous_description,
    imageTitle,
    title,
    category,
  } = article;
  const dispatch = useAppDispatch();

  const handleArticleClick = (article: BlogItem, idx: number) => {
    console.log('Selected index:', idx);
    const selectedArticleWithIndex = { ...article, index: idx };
    localStorage.setItem(
      'selectedArticle',
      JSON.stringify(selectedArticleWithIndex)
    );
    dispatch(setSelectedArticle(selectedArticleWithIndex));
    onArticleClick(article, idx);
  };

  return (
    <CardBlog>
      <Thumb>
        <img src={imageTitle} alt="image_title" />
        <CategoryText>{category}</CategoryText>
      </Thumb>
      <DescriptionWrap>
        <AuthorContainer>
          <img src={avatar_url} alt="image_title" />
          <p>{author_name}</p>
          <span></span>
          <p>{date}</p>
          <span></span>
          <p>{time}</p>
          <span></span>
        </AuthorContainer>
        <TitleBlogWrap>
          <h2>{title}</h2>
          <DottsLine />
          <Text>{previous_description}</Text>
        </TitleBlogWrap>
        <p>Read More</p>
        <Link
          to={`/blog/${id}/${encodeURIComponent(title)}`}
          onClick={() => handleArticleClick(article, idx)}
        >
          <ArrowRight fill="#233000" />
        </Link>
      </DescriptionWrap>
    </CardBlog>
  );
};

export default BlogCard;
