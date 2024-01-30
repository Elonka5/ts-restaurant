import styled from 'styled-components';

export const HeroWrapper = styled.section`
  /* position: relative; */
  padding-top: 102px;
  padding-bottom: 222px;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
`;

export const MainImageWrap = styled.div`
  position: absolute;
  top: 126px;
  right: 1px;
  img {
    width: 792px;
  }
`;

export const Title = styled.h1`
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  font-size: 148px;
  font-weight: 700;
  line-height: 152px;
  width: 1057px;
  margin-bottom: 50px;
  z-index: 1;
`;

export const Text = styled.p`
  width: 565px;
  color: ${({ theme }) => theme.colors.white};
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 33.6px */
  letter-spacing: 0.48px;
`;

export const SpicesImgWrapper = styled.div`
  position: relative;
  /* bottom: -42px;
  right: 280px; */
  display: flex;
  flex-direction: row;
  gap: 44px;
  margin-left: 490px;
  margin-bottom: 240px;
  z-index: 2;

  img {
    width: 250px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const MainTextWrap = styled.div`
  margin-bottom: 280px;
`;

export const SecondWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 54px;

  img {
    width: 792px;
  }

  h2 {
    color: ${({ theme }) => theme.colors.white};
    width: 493px;
    font-size: 68px;
    font-weight: 700;
    line-height: 84px;
  }
`;

export const SecondText = styled.p`
  width: 565px;
  color: ${({ theme }) => theme.colors.white};
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 33.6px */
  letter-spacing: 0.48px;
`;

export const PlanWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 344px;
`;

export const ThirdWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 84px;

  img {
    width: 508px;
  }

  p {
    width: 508px;
  }
`;
