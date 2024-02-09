import React from 'react';
import { SectionSinglePortfolio } from './SinglePortfolioHeroStyled';
import Container from '../../Container/Container';
import { Title } from '../HeroStyled';
import { MenuItem } from '../../../redux/Menu/MenuThunk';

export interface SinglePortfolioProps {
  dishData: MenuItem;
}

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
