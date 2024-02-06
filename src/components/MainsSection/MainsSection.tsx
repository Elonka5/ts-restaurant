import React from 'react';
import Container from '../Container/Container';
import { CategoryWrap } from '../CategorySection/CategorySectionStyled';
import {
  DottsLine,
  PriceText,
  SecondTitleMenu,
  TitleMenu,
} from '../MenuSection/MenuSectionStyled';
import { Text } from '../Hero/HeroStyled';
import {
  CardMenu,
  StartersList,
  StartersWrap,
} from '../StartersSection/StartersSectionStyled';
import mainsImgWebp from '../../assets/images/mains_img_webp.webp';
import mainsImgWebpMob from '../../assets/images/mains_img_webp@2x.webp';
import mainsImg from '../../assets/images/mains_img.jpg';
import mainsImgMob from '../../assets/images/mains_img@2x.jpg';
import { SectionsMains } from './MainsSectionStyled';

export const MainsSection = () => {
  return (
    <SectionsMains>
      <Container variant="other">
        <CategoryWrap style={{ marginBottom: '129px' }}>
          <TitleMenu>Mains</TitleMenu>
          <Text>
            This is a section of your menu. Give your section a brief
            description
          </Text>
        </CategoryWrap>
        <StartersWrap>
          <div>
            <StartersList>
              <CardMenu>
                <PriceText>$20</PriceText>
                <DottsLine></DottsLine>
                <SecondTitleMenu>
                  Deep Sea Snow White Cod Fillet
                </SecondTitleMenu>
                <Text style={{ color: '#4D4D4D', width: '710px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
              </CardMenu>
              <CardMenu>
                <PriceText>$22</PriceText>
                <DottsLine></DottsLine>
                <SecondTitleMenu>Steak With Rosemary Butter</SecondTitleMenu>
                <Text style={{ color: '#4D4D4D', width: '710px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
              </CardMenu>
              <CardMenu>
                <PriceText>$20</PriceText>
                <DottsLine></DottsLine>
                <SecondTitleMenu>Steaks with Grilled Kimchi</SecondTitleMenu>
                <Text style={{ color: '#4D4D4D', width: '710px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
              </CardMenu>
            </StartersList>
          </div>
          <div>
            <picture>
              <source
                media="(min-width: 320px)"
                srcSet={`${mainsImgWebp} 1x, ${mainsImgWebpMob} 2x`}
                type="image/webp"
              />
              <source
                media="(min-width: 320px)"
                srcSet={`${mainsImg} 1x, ${mainsImgMob} 2x`}
                type="image/png"
              />
              <img src={mainsImg} alt="hero_image" loading="lazy" />
            </picture>
          </div>
        </StartersWrap>
      </Container>
    </SectionsMains>
  );
};
