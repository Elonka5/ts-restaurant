import styled from 'styled-components';
import { ReactComponent as Fish } from '../../assets/images/svg/Icon_fish.svg';
import { ReactComponent as Vegetable } from '../../assets/images/svg/Icon_carrot.svg';
import { ReactComponent as Fruit } from '../../assets/images/svg/Icon_lemon.svg';

export const Features = styled.section`
  padding-top: 208px;
  padding-bottom: 190px;
`;

export const FeaturesList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
  gap: 60px;

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    width: 508px;
  }

  div {
    width: 260px;
    height: 260px;
    padding: 38px;
    background-color: ${({ theme }) => theme.colors.lightOlive};
    border-radius: 50%;
  }

  p {
    color: ${({ theme }) => theme.colors.grey};
    width: 508px;
    text-align: center;
  }
`;

export const FeaturesTitle = styled.h3`
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 64px;
`;

export const FishSvg = styled(Fish)``;
export const VegetableSvg = styled(Vegetable)``;
export const FruitSvg = styled(Fruit)``;
