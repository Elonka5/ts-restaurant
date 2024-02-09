import React from 'react';
import Container from '../Container/Container';
import {
  FirstDescrContainer,
  FirstDishInfoWrap,
  FirstImgWrap,
  SecondDescrContainer,
  SecondDishInfoWrap,
  SectionDetailsDish,
  ThirdDescrContainer,
  ThirdDishInfoWrap,
  TitleDetails,
} from './DishDetailsSectionStyled';
import { Text } from '../Hero/HeroStyled';
import { SinglePortfolioProps } from '../Hero/SinglePortfolioHero/SinglePortfolioHero';

const DishDetailsSection: React.FC<SinglePortfolioProps> = ({ dishData }) => {
  return (
    <SectionDetailsDish>
      <Container variant="other">
        <FirstDescrContainer>
          <FirstImgWrap>
            <img src={dishData.description?.[1].image} alt="element" />
          </FirstImgWrap>
          <FirstDishInfoWrap>
            <TitleDetails>{dishData.description?.[0].title}</TitleDetails>
            <Text>{dishData.description?.[0].dish_info[0]}</Text>
            <Text>{dishData.description?.[0].dish_info[1]}</Text>
          </FirstDishInfoWrap>
        </FirstDescrContainer>
        <SecondDescrContainer>
          <div>
            <img src={dishData.description?.[0].image} alt="element" />
          </div>
          <SecondDishInfoWrap>
            <TitleDetails>{dishData.description?.[1].title}</TitleDetails>
            <Text>{dishData.description?.[1].dish_info[0]}</Text>
          </SecondDishInfoWrap>
        </SecondDescrContainer>
        <ThirdDescrContainer>
          <div>
            <ThirdDishInfoWrap>
              <Text>{dishData.description?.[2].dish_info[0]}</Text>
              <TitleDetails>{dishData.description?.[2].title}</TitleDetails>
              <Text>{dishData.description?.[2].dish_info[1]}</Text>
            </ThirdDishInfoWrap>
            <img src={dishData.description?.[2]?.image} alt="element" />
          </div>
        </ThirdDescrContainer>
      </Container>
    </SectionDetailsDish>
  );
};

export default DishDetailsSection;
