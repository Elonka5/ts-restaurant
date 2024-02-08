import React from 'react';
import { HeroPortfolioSection } from './PortfolioHeroStyled';
import Container from '../../Container/Container';
import { Title } from '../HeroStyled';

const PortfolioHero = () => {
  return (
    <HeroPortfolioSection>
      <Container variant="other">
        <Title>Portfolio</Title>
      </Container>
    </HeroPortfolioSection>
  );
};

export default PortfolioHero;
