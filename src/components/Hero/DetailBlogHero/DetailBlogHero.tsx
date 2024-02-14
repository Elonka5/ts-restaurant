import React from 'react';
import { BlogItem } from '../../../redux/Blogs/BlogsThunk';
import { SectionDetailBlog } from './DetailBlogHeroStyled';
import Container from '../../Container/Container';
import { Title } from '../HeroStyled';

export interface SingleBlogProps {
  articleData: BlogItem;
}

const DetailBlogHero: React.FC<SingleBlogProps> = ({ articleData }) => {
  return (
    <SectionDetailBlog $imageurl={articleData.hero_img}>
      <Container variant="other">
        <Title>{articleData.title}</Title>
      </Container>
    </SectionDetailBlog>
  );
};

export default DetailBlogHero;
