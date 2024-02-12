import React from 'react';
import { SectionBlogsPortfolio } from './BlogsHeroStyled';
import Container from '../../Container/Container';
import { Title } from '../HeroStyled';

const BlogsHero = () => {
  return (
    <SectionBlogsPortfolio>
      <Container variant="other">
        <Title>Blogs - Two Columns</Title>
        <p>It is easy way to create your beatiful blog for daily</p>
      </Container>
    </SectionBlogsPortfolio>
  );
};

export default BlogsHero;
