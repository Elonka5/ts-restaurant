import styled from 'styled-components';
import { ReactComponent as Arrow } from '../../assets/images/svg/Icon_arrow-right.svg';

export const StyledCategory = styled.section`
  padding-top: 128px;
  padding-bottom: 138px;
`;

export const ArrowRight = styled(Arrow)`
  fill: ${({ theme }) => theme.colors.secondaryBlack};
`;

export const CategoryDiv = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgba(35, 48, 0, 0.544),
    rgba(35, 48, 0, 0)
  );
  width: 508px;
  height: 160px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  top: 0;
`;

export const CategoryWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 126px;
  width: 1101px;

  h2 {
    text-align: center;
  }
  p {
    color: ${({ theme }) => theme.colors.grey};
    text-align: center;
    width: 1101px;
  }
`;

export const CategoryImgWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
`;

export const Thumb = styled.div`
  position: relative;
`;
