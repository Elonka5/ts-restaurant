import styled from 'styled-components';
import mintsvg from '../../assets/images/svg/Mint.svg';

export const ReservationSect = styled.section`
  background-color: ${({ theme }) => theme.colors.lightOlive};
  padding-top: 214px;
  padding-bottom: 174px;
  background-image: url(${mintsvg});
  background-repeat: no-repeat;
  background-position: top 50px left 159px;
`;

export const ReservWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 116px;
  width: 985px;

  p {
    color: ${({ theme }) => theme.colors.grey};
  }
`;
