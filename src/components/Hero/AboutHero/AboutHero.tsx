import React from 'react';
import { HeroAboutSection } from './AboutHeroStyled';
import Container from '../../Container/Container';
import { Text, Title } from '../HeroStyled';

export const AboutHero = () => {
  return (
    <HeroAboutSection>
      <Container variant="other">
        <Title>Who We Are</Title>
        <Text>
          The most important thing for us is to give you the comfortable dining
          experience
        </Text>
      </Container>
    </HeroAboutSection>
  );
};
