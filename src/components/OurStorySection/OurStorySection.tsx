import React from 'react';
import Container from '../Container/Container';
import {
  StoryContainer,
  StorySection,
  StoryWrap,
} from './OurStorySectionStyled';
import { TitleMenu } from '../MenuSection/MenuSectionStyled';
import { Text } from '../Hero/HeroStyled';
import storyImgWebp from '../../assets/images/story_photo_webp.webp';
import storyImgWebpMob from '../../assets/images/story_photo_webp@2x.webp';
import storyImg from '../../assets/images/story_photo.jpg';
import storyImgMob from '../../assets/images/story_photo@2x.jpg';

export const OurStorySection = () => {
  return (
    <StorySection>
      <Container variant="other">
        <StoryContainer>
          <StoryWrap>
            <TitleMenu>Our Story</TitleMenu>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              lorem id penatibus imperdiet. Turpis egestas ultricies purus
              auctor tincidunt lacus nunc.{' '}
            </Text>
          </StoryWrap>
          <picture>
            <source
              media="(min-width: 320px)"
              srcSet={`${storyImgWebp} 1x, ${storyImgWebpMob} 2x`}
              type="image/webp"
            />
            <source
              media="(min-width: 320px)"
              srcSet={`${storyImg} 1x, ${storyImgMob} 2x`}
              type="image/png"
            />
            <img src={storyImg} alt="hero_image" loading="lazy" />
          </picture>
        </StoryContainer>
      </Container>
    </StorySection>
  );
};
