import React from 'react';
import Container from '../Container/Container';
import { CookSection, CookTextDiv, CookWrap, LeafSvg } from './CookStyled';
import { TitleMenu } from '../MenuSection/MenuSectionStyled';
import { Text } from '../Hero/HeroStyled';
import cookWebp from '../../assets/images/cook_webp.webp';
import cookWebpMob from '../../assets/images/cook_webp@2x.webp';
import cook from '../../assets/images/cook.png';
import cookMob from '../../assets/images/cook_webp@2x.webp';


const Cook = () => {
  return (
    <CookSection>
      <Container variant="other">
        <CookWrap>
          <div>
            <picture>
              <source
                media="(min-width: 320px)"
                srcSet={`${cookWebp} 1x, ${cookWebpMob} 2x`}
                type="image/webp"
              />
              <source
                media="(min-width: 320px)"
                srcSet={`${cook} 1x, ${cookMob} 2x`}
                type="image/png"
              />
              <img src={cook} alt="cook_image" loading="lazy" />
            </picture>
          </div>
          <CookTextDiv>
            <TitleMenu>Excellent cook</TitleMenu>
            <Text style={{ color: '#4D4D4D' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              lorem id penatibus imperdiet. Turpis egestas ultricies purus
              auctor tincidunt lacus nunc.{' '}
            </Text>
            <LeafSvg />
          </CookTextDiv>
        </CookWrap>
      </Container>
    </CookSection>
  );
};

export default Cook;
