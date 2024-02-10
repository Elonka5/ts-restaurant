import styled from 'styled-components';

export const SectionNavigation = styled.section`
  padding-top: 118px;
  padding-bottom: 140px;
  background-color: ${({ theme }) => theme.colors.lightOlive};
`;

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 138px;
  padding-left: 18px;
  padding-right: 18px;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  text-align: center;
  justify-content: center;
  width: 704px;

  h3 {
    font-weight: 700;
    font-size: 32px;
    line-height: 150%;
    text-align: center;
    /* max-width: 704px; */
  }
`;

export const LinkArrowWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 25px;

  p {
    font-family: 'LatoRegular';
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }
`;
