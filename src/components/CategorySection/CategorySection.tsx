import React from 'react';
import Container from '../Container/Container';
import { TitleMenu } from '../MenuSection/MenuSectionStyled';
import { Text } from '../Hero/HeroStyled';
import {
  ArrowRight,
  CategoryDiv,
  CategoryImgWrap,
  CategoryWrap,
  StyledCategory,
  Thumb,
} from './CategorySectionStyled';
import starterWebp from '../../assets/images/starters_webp.webp';
import starterWebpMob from '../../assets/images/starters_webp@2x.webp';
import starter from '../../assets/images/starters.jpg';
import starterMob from '../../assets/images/starters@2x.jpg';
import launchWebp from '../../assets/images/launch_webp.webp';
import launchWebpMob from '../../assets/images/launch_webp@2x.webp';
import launch from '../../assets/images/launch.jpg';
import launchMob from '../../assets/images/launch@2x.jpg';
import dinnerWebp from '../../assets/images/dinner_webp.webp';
import dinnerWebpMob from '../../assets/images/dinner_webp@2x.webp';
import dinner from '../../assets/images/dinner.jpg';
import dinnerMob from '../../assets/images/dinner@2x.jpg';

const CategorySection = () => {
  return (
    <StyledCategory>
      <Container variant="other">
        <CategoryWrap>
          <TitleMenu>Calories Energy Balance</TitleMenu>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
        </CategoryWrap>
        <CategoryImgWrap>
          <Thumb>
            <picture>
              <source
                media="(min-width: 320px)"
                srcSet={`${starterWebp} 1x, ${starterWebpMob} 2x`}
                type="image/webp"
              />
              <source
                media="(min-width: 320px)"
                srcSet={`${starter} 1x, ${starterMob} 2x`}
                type="image/png"
              />
              <img src={starter} alt="hero_image" loading="lazy" />
              <CategoryDiv>
                <p>Starter</p>
                <ArrowRight />
              </CategoryDiv>
            </picture>
          </Thumb>
          <Thumb>
            <picture>
              <source
                media="(min-width: 320px)"
                srcSet={`${dinnerWebp} 1x, ${dinnerWebpMob} 2x`}
                type="image/webp"
              />
              <source
                media="(min-width: 320px)"
                srcSet={`${dinner} 1x, ${dinnerMob} 2x`}
                type="image/png"
              />
              <img src={dinner} alt="hero_image" loading="lazy" />
              <CategoryDiv>
                <h3>Dinner</h3>
                <ArrowRight />
              </CategoryDiv>
            </picture>
          </Thumb>
          <Thumb>
            <picture>
              <source
                media="(min-width: 320px)"
                srcSet={`${launchWebp} 1x, ${launchWebpMob} 2x`}
                type="image/webp"
              />
              <source
                media="(min-width: 320px)"
                srcSet={`${launch} 1x, ${launchMob} 2x`}
                type="image/png"
              />
              <img src={launch} alt="hero_image" loading="lazy" />
              <CategoryDiv>
                <h3>Launch</h3>
                <ArrowRight />
              </CategoryDiv>
            </picture>
          </Thumb>
        </CategoryImgWrap>
      </Container>
    </StyledCategory>
  );
};

export default CategorySection;
