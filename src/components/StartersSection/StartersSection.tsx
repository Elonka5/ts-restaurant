import React from 'react';
import Container from '../Container/Container';
import {
  CardMenu,
  StartSection,
  StartersList,
  StartersWrap,
} from './StartersSectionStyled';
import {
  DottsLine,
  PriceText,
  SecondTitleMenu,
  TitleMenu,
} from '../MenuSection/MenuSectionStyled';
import { Text } from '../Hero/HeroStyled';
import { CategoryWrap } from '../CategorySection/CategorySectionStyled';
import starterImgWebp from '../../assets/images/starter_img_webp.webp';
import starterImgWebpMob from '../../assets/images/starter_img_webp@2x.webp';
import starterImg from '../../assets/images/starter_img.jpg';
import starterImgMob from '../../assets/images/starter_img@2x.jpg';

export const StartersSection = () => {
  return (
    <StartSection>
      <Container variant="other">
        <CategoryWrap style={{ marginBottom: '81px' }}>
          <TitleMenu>Starters</TitleMenu>
          <Text>
            This is a section of your menu. Give your section a brief
            description
          </Text>
        </CategoryWrap>
        <StartersWrap>
          <div>
            <picture>
              <source
                media="(min-width: 320px)"
                srcSet={`${starterImgWebp} 1x, ${starterImgWebpMob} 2x`}
                type="image/webp"
              />
              <source
                media="(min-width: 320px)"
                srcSet={`${starterImg} 1x, ${starterImgMob} 2x`}
                type="image/png"
              />
              <img src={starterImg} alt="hero_image" loading="lazy" />
            </picture>
          </div>
          <div>
            <StartersList>
              <CardMenu>
                <PriceText>$20</PriceText>
                <DottsLine></DottsLine>
                <SecondTitleMenu>Grilled Okra and Tomatoes </SecondTitleMenu>
                <Text style={{ color: '#4D4D4D', width: '710px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
              </CardMenu>
              <CardMenu>
                <PriceText>$18</PriceText>
                <DottsLine></DottsLine>
                <SecondTitleMenu>Cucumber Salad</SecondTitleMenu>
                <Text style={{ color: '#4D4D4D', width: '710px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
              </CardMenu>
              <CardMenu>
                <PriceText>$12</PriceText>
                <DottsLine></DottsLine>
                <SecondTitleMenu> Basil Pancakes</SecondTitleMenu>
                <Text style={{ color: '#4D4D4D', width: '710px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
              </CardMenu>
            </StartersList>
          </div>
        </StartersWrap>
      </Container>
    </StartSection>
  );
};
