import React from 'react';
import Container from '../Container/Container';
import { SectionDrinks } from './DrinksSectionStyled';
import drinksImgWebp from '../../assets/images/drinks_img_webp.webp';
import drinksImgWebpMob from '../../assets/images/drinks_img_webp@2x.webp';
import drinksImg from '../../assets/images/drinks_img.jpg';
import drinksImgMob from '../../assets/images/drinks_img@2x.jpg';
import { CategoryWrap } from '../CategorySection/CategorySectionStyled';
import {
  DottsLine,
  PriceText,
  SecondTitleMenu,
  TitleMenu,
} from '../MenuSection/MenuSectionStyled';
import {
  CardMenu,
  StartersList,
  StartersWrap,
} from '../StartersSection/StartersSectionStyled';
import { Text } from '../Hero/HeroStyled';

const DrinksSection = () => {
  return (
    <SectionDrinks>
      <Container variant="other">
        <CategoryWrap style={{ marginBottom: '81px' }}>
          <TitleMenu>Pastries & Drinks</TitleMenu>
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
                srcSet={`${drinksImgWebp} 1x, ${drinksImgWebpMob} 2x`}
                type="image/webp"
              />
              <source
                media="(min-width: 320px)"
                srcSet={`${drinksImg} 1x, ${drinksImgMob} 2x`}
                type="image/png"
              />
              <img src={drinksImg} alt="hero_image" loading="lazy" />
            </picture>
          </div>
          <div>
            <StartersList>
              <CardMenu>
                <PriceText>$158</PriceText>
                <DottsLine></DottsLine>
                <SecondTitleMenu>Wine Pairing</SecondTitleMenu>
                <Text style={{ color: '#4D4D4D', width: '710px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
              </CardMenu>
              <CardMenu>
                <PriceText>$168</PriceText>
                <DottsLine></DottsLine>
                <SecondTitleMenu>Natural Wine Pairing</SecondTitleMenu>
                <Text style={{ color: '#4D4D4D', width: '710px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
              </CardMenu>
              <CardMenu>
                <PriceText>$90</PriceText>
                <DottsLine></DottsLine>
                <SecondTitleMenu>Whisky Flyer</SecondTitleMenu>
                <Text style={{ color: '#4D4D4D', width: '710px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
              </CardMenu>
            </StartersList>
          </div>
        </StartersWrap>
      </Container>
    </SectionDrinks>
  );
};

export default DrinksSection;
