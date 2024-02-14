import styled from 'styled-components';
import portfolioimg from '../../../assets/images/hero_blogs.jpg';

export const SectionBlogsPortfolio = styled.section`
  margin-top: -294px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)),
    url(${portfolioimg});
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 142px;
  padding-bottom: 130px;
  width: 100%;
  height: 850px;
  color: ${({ theme }) => theme.colors.white};
`;
