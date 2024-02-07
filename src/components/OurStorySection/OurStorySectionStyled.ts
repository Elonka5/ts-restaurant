import styled from 'styled-components';
import tomatosvg from '../../assets/images/svg/Tomato.svg';

export const StorySection = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: 218px;
  padding-bottom: 117px;
  background-image: url(${tomatosvg});
  background-repeat: no-repeat;
  background-position: top 94px right 860px;
`;

export const StoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 107px;
`;

export const StoryWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding-left: 77px;
  padding-top: 233px;

  p {
    width: 668px;
    color: #4d4d4d;
  }
`;
