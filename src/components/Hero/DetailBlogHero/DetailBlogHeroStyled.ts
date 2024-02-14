import styled from 'styled-components';

export const SectionDetailBlog = styled.section.attrs<{ $imageurl?: string }>(
  props => ({ $imageurl: props.$imageurl })
)`
  padding-top: 142px;
  padding-bottom: 130px;
  margin-top: -294px;
  width: 100%;
  height: 850px;
  color: ${({ theme }) => theme.colors.white};
  background-image: linear-gradient(rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)),
    url(${props => props.$imageurl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
