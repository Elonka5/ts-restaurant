import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '../../assets/images/svg/Logo_white.svg';

export const Logo = styled(LogoIcon)`
  width: ${({ theme }) => theme.spacing(76.75)};
  height: ${({ theme }) => theme.spacing(28.75)};
`;

// export const HeaderWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   padding: ${({ theme }) =>
//     `${theme.spacing(11.5)} ${theme.spacing(34.5)} ${theme.spacing(
//       11.5
//     )} ${theme.spacing(29.5)} `};
//   background-color: ${({ theme }) => theme.colors.primaryBackground};
// `;

export const HeaderStyled = styled.header`
  padding-top: ${({ theme }) => theme.spacing(11.5)};
  padding-bottom: ${({ theme }) => theme.spacing(11.5)};
  /* display: flex;
  flex-direction: row; */
  background-color: ${({ theme }) => theme.colors.primaryBackground};
`;
