import React from 'react';
import { HeroMenuSection } from './HeroMenuStyled';
import Container from '../../Container/Container';
import { Text, Title } from '../HeroStyled';

const HeroMenu = () => {
  return (
    <HeroMenuSection>
      <Container variant="other">
        <Title style={{ width: '780px' }}>View Our New Menu</Title>
        <Text>The freshest ingredients for you every day</Text>
      </Container>
    </HeroMenuSection>
  );
};

export default HeroMenu;
