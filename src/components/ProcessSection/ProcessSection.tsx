import React from 'react';
import Container from '../Container/Container';
import {
  BackgroundImage1,
  BackgroundImage2,
  BakeWrap,
  FirstProcWrap,
  PickledWrap,
  ProcessContainer,
  SecondHeading,
  SecondWrap,
  SectionProcess,
  SliceWrap,
  ThirdHeading,
} from './ProcessSectionStyled';
import { Text } from '../Hero/HeroStyled';
import cookMeatImgWebp from '../../assets/images/cook_meat_webp.webp';
import cookMeatImgWebpMob from '../../assets/images/cook_meat_webp@2x.webp';
import cookMeatImg from '../../assets/images/cook_meat.jpg';
import cookMeatImgMob from '../../assets/images/cook_meat@2x.jpg';

import steakImgWebp from '../../assets/images/steak_img_webp.webp';
import steakImgWebpMob from '../../assets/images/steak_img_webp@2x.webp';
import steakImg from '../../assets/images/steak_img.jpg';
import steakImgMob from '../../assets/images/steak_img@2x.jpg';

import meatImgWebp from '../../assets/images/meat_webp.webp';
import meatImgWebpMob from '../../assets/images/meat_webp@2x.webp';
import meatImg from '../../assets/images/meat.jpg';
import meatImgMob from '../../assets/images/meat@2x.jpg';

export const ProcessSection = () => {
  return (
    <SectionProcess>
      <BackgroundImage1 />
      <BackgroundImage2 />
      <Container variant="other">
        <SecondHeading>Sophisticated Process</SecondHeading>
        <ProcessContainer>
          <FirstProcWrap>
            <picture>
              <source
                media="(min-width: 320px)"
                srcSet={`${cookMeatImgWebp} 1x, ${cookMeatImgWebpMob} 2x`}
                type="image/webp"
              />
              <source
                media="(min-width: 320px)"
                srcSet={`${cookMeatImg} 1x, ${cookMeatImgMob} 2x`}
                type="image/png"
              />
              <img src={cookMeatImg} alt="hero_image" loading="lazy" />
            </picture>
            <SliceWrap>
              <ThirdHeading>01.Slice</ThirdHeading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                lorem id penatibus imperdiet. Turpis egestas ultricies purus
                auctor tincidunt lacus nunc. Convallis pellentesque quis
                fringilla sagittis. Egestas in risus sit nunc nunc, arcu donec
                nam etiam.{' '}
              </Text>
            </SliceWrap>
          </FirstProcWrap>
          <SecondWrap>
            <BakeWrap>
              <ThirdHeading>03.Bake</ThirdHeading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                lorem id penatibus imperdiet.
              </Text>
              <picture>
                <source
                  media="(min-width: 320px)"
                  srcSet={`${meatImgWebp} 1x, ${meatImgWebpMob} 2x`}
                  type="image/webp"
                />
                <source
                  media="(min-width: 320px)"
                  srcSet={`${meatImg} 1x, ${meatImgMob} 2x`}
                  type="image/png"
                />
                <img src={meatImg} alt="hero_image" loading="lazy" />
              </picture>
            </BakeWrap>
            <PickledWrap>
              <picture>
                <source
                  media="(min-width: 320px)"
                  srcSet={`${steakImgWebp} 1x, ${steakImgWebpMob} 2x`}
                  type="image/webp"
                />
                <source
                  media="(min-width: 320px)"
                  srcSet={`${steakImg} 1x, ${steakImgMob} 2x`}
                  type="image/png"
                />
                <img src={steakImg} alt="hero_image" loading="lazy" />
              </picture>
              <ThirdHeading>02.Pickled</ThirdHeading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                lorem id penatibus imperdiet.
              </Text>
            </PickledWrap>
          </SecondWrap>
        </ProcessContainer>
      </Container>
    </SectionProcess>
  );
};
