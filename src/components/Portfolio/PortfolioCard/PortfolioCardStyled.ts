import styled from 'styled-components';

export const Card = styled.li<{ 'data-idx': number }>`
  position: relative;
  img {
    height: 990px;
    object-fit: cover;
  }
  width: ${props => {
    switch (props['data-idx']) {
      case 0:
      case 3:
      case 6:
      case 9:
      case 12:
      case 15:
      case 18:
      case 21:
      case 24:
      case 27:
        return '1076px';
      case 1:
      case 2:
      case 7:
      case 8:
      case 13:
      case 14:
      case 19:
      case 20:
      case 25:
      case 26:
        return '508px';
      case 4:
      case 5:
      case 10:
      case 11:
      case 16:
      case 17:
      case 22:
      case 23:
      case 28:
      case 29:
        return '792px';
      default:
        return 'auto';
    }
  }};
`;

export const GradientWrapper = styled.div`
  width: 100%;
  height: 346px;
  position: absolute;
  bottom: 0;
  background: linear-gradient(180deg, #070707 0%, rgba(35, 48, 0, 0) 100%);
  transform: rotate(-180deg);
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 102px 42px 64px 42px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 708px;

  color: white;

  h2 {
    font-weight: 700;
    font-size: 48px;
    line-height: 64px;
  }
`;
