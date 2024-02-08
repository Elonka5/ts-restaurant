import React from 'react';
import { SectionSinglePortfolio } from './SinglePortfolioHeroStyled';
import Container from '../../Container/Container';
import { Title } from '../HeroStyled';

export type SinglePortfolioProps = {
  dishData: any;
};

const SinglePortfolioHero: React.FC<SinglePortfolioProps> = ({ dishData }) => {
  return (
    <SectionSinglePortfolio>
      <Container variant="other">
        <Title>{dishData ? dishData.title : 'Loading...'}</Title>
      </Container>
    </SectionSinglePortfolio>
  );
};

export default SinglePortfolioHero;
