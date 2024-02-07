import styled from 'styled-components';
import heroContactImg from '../../../assets/images/contact_hero.jpg';

export const HeroMenuSection = styled.section`
  margin-top: -294px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)),
    url(${heroContactImg});
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 142px;
  padding-bottom: 130px;
  width: 100%;
  height: 1080px;
  color: ${({ theme }) => theme.colors.white};
`;

export const OpenTimeWrap = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-end; */
  gap: 38px;
  width: 693px;
  margin-left: auto;
`;

export const TimeWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const OpenTime = styled.div`
  display: flex;
  flex-direction: row;
  gap: 132px;

  p {
    width: 143px;
  }
`;

export const FifthText = styled.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
`;
