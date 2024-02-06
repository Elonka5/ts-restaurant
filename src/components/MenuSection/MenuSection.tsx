import React from 'react';
import Container from '../Container/Container';
import {
  DottsLine,
  ListMenu,
  PriceText,
  SectionMenu,
  TitleMenu,
  TitleMenuWrap,
} from './MenuSectionStyled';
import { Text } from '../Hero/HeroStyled';
import { CardMenu } from '../StartersSection/StartersSectionStyled';

const MenuSection = () => {
  return (
    <SectionMenu>
      <Container variant="other">
        <TitleMenuWrap>
          <TitleMenu>Our Menu</TitleMenu>
          <Text style={{ color: '#4D4D4D' }}>
            This is a section of your menu. Give your section a brief
            description
          </Text>
        </TitleMenuWrap>
        <ListMenu>
          <CardMenu>
            <PriceText>$20</PriceText>
            <DottsLine></DottsLine>
            <h3>Deep Sea Snow White Cod Fillet</h3>
            <Text style={{ color: '#4D4D4D' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
            </Text>
          </CardMenu>
          <CardMenu>
            <PriceText>$22</PriceText>
            <DottsLine></DottsLine>
            <h3>Steak With Rosemary Butter</h3>
            <Text style={{ color: '#4D4D4D' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </CardMenu>
          <CardMenu>
            <PriceText>$18</PriceText>
            <DottsLine></DottsLine>
            <h3>Cucumber Salad</h3>
            <Text style={{ color: '#4D4D4D' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </CardMenu>
          <CardMenu>
            <PriceText>$90</PriceText>
            <DottsLine></DottsLine>
            <h3>Natural Wine Pairing</h3>
            <Text style={{ color: '#4D4D4D' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </CardMenu>
        </ListMenu>
      </Container>
    </SectionMenu>
  );
};

export default MenuSection;
