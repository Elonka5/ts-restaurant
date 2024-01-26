import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '../../assets/images/svg/Logo_white.svg';

export const Logo = styled(LogoIcon)`
  width: ${({ theme }) => theme.spacing(7)};
  height: ${({ theme }) => theme.spacing(7)};
`;
