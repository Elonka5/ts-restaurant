import styled from 'styled-components';

export const SectionDetailsDish = styled.section`
  padding-top: 176px;
  padding-bottom: 222px;
`;

export const FirstDescrContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 419px;
  padding-left: 82px;
  padding-right: 147px;
`;

export const FirstDishInfoWrap = styled.div`
  :nth-child(2) {
    margin-bottom: 38px;
  }
  p {
    width: 510px;
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export const FirstImgWrap = styled.div`
  z-index: 1;
  position: relative;
`;

export const SecondDescrContainer = styled.div`
  margin-top: -156px;
  display: flex;
  flex-direction: row;
  gap: 46px;
  padding-left: 314px;
  padding-right: 10px;
  margin-bottom: 198px;
`;

export const SecondDishInfoWrap = styled.div`
  padding-top: 621px;
  p {
    width: 452px;
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export const TitleDetails = styled.h2`
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 64px;
  margin-bottom: 12px;
`;

export const ThirdDescrContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-left: 314px;
  padding-right: 10px;
  padding: 0 142px;
`;

export const ThirdDishInfoWrap = styled.div`
  p {
    margin-left: auto;
    margin-right: auto;
    width: 509px;
    color: ${({ theme }) => theme.colors.grey};
  }

  :first-child {
    margin-bottom: 38px;
  }

  :nth-child(3) {
    margin-bottom: 122px;
  }
`;
