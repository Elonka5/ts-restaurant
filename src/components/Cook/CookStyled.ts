import styled from 'styled-components';
import leafsvg from '../../assets/images/svg/Leaf.svg';
import { ReactComponent as Leaf } from '../../assets/images/svg/Leaf_right.svg';

export const CookSection = styled.section`
  background-color: ${({ theme }) => theme.colors.lightOlive};
  padding-top: 222px;
  background-image: url(${leafsvg});
  background-repeat: no-repeat;
  background-position: top 71px left 21px;
`;

export const LeafSvg = styled(Leaf)`
  display: block;
  width: 456px;
  height: 464px;
  margin-left: auto;
`;

export const CookWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;

  img {
    width: 935px;
  }
  p {
    width: 649px;
  }
`;

export const CookTextDiv = styled.div`
  > *:not(:last-child) {
    margin-bottom: 18px;
  }
`;
