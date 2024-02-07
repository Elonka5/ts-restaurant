import styled from 'styled-components';
import heroAboutImg from '../../../assets/images/hero_contact_img.jpg';

export const HeroAboutSection = styled.section`
  margin-top: -294px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)),
    url(${heroAboutImg});
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 142px;
  padding-bottom: 130px;
  width: 100%;
  height: 1080px;
  color: ${({ theme }) => theme.colors.white};
`;
