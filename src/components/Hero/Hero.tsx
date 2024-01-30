import { ContainerStyled } from '../Container/ContainerStyled';
import {
  HeroWrapper,
  MainImageWrap,
  MainTextWrap,
  PlanWrapper,
  SecondText,
  SecondWrap,
  SpicesImgWrapper,
  Text,
  ThirdWrapper,
  Title,
  Wrapper,
} from './HeroStyled';
import heroImgWebp from '../../assets/images/hero_Image_webp.webp';
import heroImgWebpMobile from '../../assets/images/hero_Image_webp@2x.webp';
import heroImg from '../../assets/images/hero_Image.jpg';
import heroImgMob from '../../assets/images/hero_Image@2x.jpg';
import spicesWebp from '../../assets/images/spices1_webp.webp';
import spicesWebpMob from '../../assets/images/spices1_webp@2x.webp';
import spices from '../../assets/images/spices1.png';
import spicesMob from '../../assets/images/spices1@2x.png';
import secondSpicesWeb from '../../assets/images/spices2_webp.webp';
import secondSpicesWebMob from '../../assets/images/spices2_webp@2x.webp';
import secondSpices from '../../assets/images/spices2.png';
import secondSpicesMob from '../../assets/images/spices2@2x.png';
import thirdSpicesWeb from '../../assets/images/spices3_webp.webp';
import thirdSpicesWebMob from '../../assets/images/spices3_webp@2x.webp';
import thirdSpices from '../../assets/images/spices3.png';
import thirdSpicesMob from '../../assets/images/spices3@2x.png';
import pastaImgWeb from '../../assets/images/pasta_Image_webp.webp';
import pastaImgWebMob from '../../assets/images/pasta_Image_webp@2x.webp';
import pastaImg from '../../assets/images/pasta_Image.jpg';
import pastaImgMob from '../../assets/images/pasta_Image@2x.jpg';
import imgHeroWeb from '../../assets/images/hero_img_webp.webp';
import imgHeroWebMob from '../../assets/images/hero_img_webp@2x.webp';
import imgHero from '../../assets/images/hero_img.jpg';
import imgHeroMob from '../../assets/images/hero_img@2x.jpg';

const Hero = () => {
  return (
    <HeroWrapper>
      <ContainerStyled>
        <Wrapper>
          <MainTextWrap>
            <Title>Healthy Eating is important part of lifestyle</Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              congue arcu
            </Text>
          </MainTextWrap>
          <MainImageWrap>
            <picture>
              <source
                media="(min-width: 320px)"
                srcSet={`${heroImgWebp} 1x, ${heroImgWebpMobile} 2x`}
                type="image/webp"
              />
              <source
                media="(min-width: 320px)"
                srcSet={`${heroImg} 1x, ${heroImgMob} 2x`}
                type="image/png"
              />
              <img src={heroImg} alt="hero_image" loading="lazy" />
            </picture>
          </MainImageWrap>
          <SpicesImgWrapper>
            <picture>
              <source
                media="(min-width: 320px)"
                srcSet={`${spicesWebp} 1x, ${spicesWebpMob} 2x`}
                type="image/webp"
              />
              <source
                media="(min-width: 320px)"
                srcSet={`${spices} 1x, ${spicesMob} 2x`}
                type="image/png"
              />
              <img src={spices} alt="spice_image" loading="lazy" />
            </picture>
            <picture>
              <source
                media="(min-width: 320px)"
                srcSet={`${secondSpicesWeb} 1x, ${secondSpicesWebMob} 2x`}
                type="image/webp"
              />
              <source
                media="(min-width: 320px)"
                srcSet={`${secondSpices} 1x, ${secondSpicesMob} 2x`}
                type="image/png"
              />
              <img src={secondSpices} alt="spice_image" loading="lazy" />
            </picture>
            <picture>
              <source
                media="(min-width: 320px)"
                srcSet={`${thirdSpicesWeb} 1x, ${thirdSpicesWebMob} 2x`}
                type="image/webp"
              />
              <source
                media="(min-width: 320px)"
                srcSet={`${thirdSpices} 1x, ${thirdSpicesMob} 2x`}
                type="image/png"
              />
              <img src={thirdSpices} alt="spice_image" loading="lazy" />
            </picture>
          </SpicesImgWrapper>
        </Wrapper>
        <PlanWrapper>
          <SecondWrap>
            <picture>
              <source
                media="(min-width: 320px)"
                srcSet={`${pastaImgWeb} 1x, ${pastaImgWebMob} 2x`}
                type="image/webp"
              />
              <source
                media="(min-width: 320px)"
                srcSet={`${pastaImg} 1x, ${pastaImgMob} 2x`}
                type="image/png"
              />
              <img src={pastaImg} alt="pasta_image" loading="lazy" />
            </picture>
            <h2>Start to plan your diet today</h2>
            <SecondText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              congue arcu
            </SecondText>
          </SecondWrap>
          <ThirdWrapper>
            <SecondText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              congue arcu
            </SecondText>
            <picture>
              <source
                media="(min-width: 320px)"
                srcSet={`${imgHeroWeb} 1x, ${imgHeroWebMob} 2x`}
                type="image/webp"
              />
              <source
                media="(min-width: 320px)"
                srcSet={`${imgHero} 1x, ${imgHeroMob} 2x`}
                type="image/png"
              />
              <img src={imgHero} alt="pasta_image" loading="lazy" />
            </picture>
          </ThirdWrapper>
        </PlanWrapper>
      </ContainerStyled>
    </HeroWrapper>
  );
};

export default Hero;
