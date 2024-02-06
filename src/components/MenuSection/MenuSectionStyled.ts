import styled from 'styled-components';
import menuimg from '../../assets/images/menu_background.png';
import menuimg2x from '../../assets/images/menu_background@2x.png';

export const SectionMenu = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: 176px;
  padding-bottom: 218px;
  background-image: url(${menuimg});
  background-repeat: no-repeat;
  background-position: top right;

  /* @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${menuimg2x});
    background-size: cover;
  } */
`;

export const TitleMenu = styled.h2`
  font-size: 108px;
  font-style: normal;
  font-weight: 700;
  line-height: 120px;
`;

export const TitleMenuWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 158px;
`;

export const ListMenu = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 108px 60px;

  li {
    width: 792px;
    /* > *:not(:first-child) {
      margin-bottom: 24px;
    }

    > :first-child {
      margin-bottom: 12px;
    }
    > :last-child {
      margin-bottom: 0;
    } */
  }

  h3 {
    font-size: 68px;
    font-style: normal;
    font-weight: 700;
    line-height: 84px;
  }
  /* p {
    color: ${({ theme }) => theme.colors.grey};
  } */

  div {
    height: 8px;
    background-image: radial-gradient(black 15%, transparent 16%);
    background-size: 8px 8px;
    background-position: 0 0;
  }
`;

export const PriceText = styled.p`
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 64px;
  text-align: right;
  color: ${({ theme }) => theme.colors.black};
`;

/* height: 0.5em;
    background-image: radial-gradient(grey 15%, transparent 16%),
      radial-gradient(grey 15%, transparent 16%);
    background-size: 0.5em 0.5em;
    background-position: 0 0, 0.5em 0.5em; */

export const DottsLine = styled.div`
  height: 8px;
  background-image: radial-gradient(black 15%, transparent 16%);
  background-size: 8px 8px;
  background-position: 0 0;
`;

export const SecondTitleMenu = styled.h3`
  font-size: 68px;
  font-style: normal;
  font-weight: 700;
  line-height: 84px;
`;
