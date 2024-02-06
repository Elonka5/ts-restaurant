import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  color: ${({ theme }) => theme.colors.white};
  padding-top: 132px;
  padding-bottom: 74px;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FZTitleWrap = styled.div`
  margin-right: 238px;

  h2 {
    font-weight: 700;
    font-size: 68px;
  }
`;

export const ContactWrapper = styled.div`
  width: 210px;
  margin-right: 216px;

  li:nth-child(2) {
    margin-bottom: 28px;
  }

  li:nth-child(3) {
    width: 210px;
  }
`;

export const FooterTitle = styled.h3`
  margin-bottom: 55px;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
`;

export const Line = styled.span`
  display: block;
  border: 2px dashed white;
  width: 1920px;
  height: 0px;
  margin-top: 137px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 58px;

  p {
    font-family: 'LatoRegular';
    font-size: 24px;
    line-height: 140%;
    letter-spacing: 0.02em;
  }
`;

export const LinksList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 28px;
`;
