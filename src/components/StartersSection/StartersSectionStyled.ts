import styled from 'styled-components';
import blueberrysvg from '../../assets/images/svg/Blueberry.svg';

export const StartSection = styled.section`
  padding-top: 122px;
  padding-bottom: 140px;
  background-image: url(${blueberrysvg});
  background-repeat: no-repeat;
  background-position: top right;
`;

export const StartersWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 102px;

  img {
    width: 792px;
  }
`;

export const StartersList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 58px;
`;

export const CardMenu = styled.li`
  > *:not(:first-child) {
    margin-bottom: 24px;
  }

  > :first-child {
    margin-bottom: 12px;
  }

  > :last-child {
    margin-bottom: 0;
  }
`;
