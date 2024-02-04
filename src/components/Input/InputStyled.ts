import { Field } from 'formik';
import styled, { css } from 'styled-components';

interface InputStyledProps {
  $variant?: string;
  $error?: string;
}

export const InputStyled = styled(Field)<InputStyledProps>`
  display: flex;
  padding: 30px 40px;
  min-width: 799px;
  justify-content: center;
  align-items: center;
  border: 2px solid
    ${({ theme, $error }) => ($error ? theme.colors.red : theme.colors.black)};
  appearance: none;
  outline: none;

  ::placeholder {
    color: ${({ $error, theme }) =>
      $error ? theme.colors.primaryGreen : theme.colors.red};
    transition: color 0.3s ease-in-out;
  }

  ${({ $variant }) =>
    $variant === 'secondary' &&
    css`
      min-width: 1644px;
    `}

  ${({ $variant }) =>
    $variant === 'subscribe' &&
    css`
      min-width: 523px;
    `}
`;

// export const StyledInput = styled(Field)`
//   display: flex;
//   padding: ${({ theme }) => `${theme.spacing(4)} ${theme.spacing(4.5)}`};
//   justify-content: center;
//   align-items: center;
//   border: 1px solid
//     ${({ theme, $error }) =>
//       $error ? theme.colors.red : theme.colors.primaryGreen};
//   appearance: none;
//   outline: none;

//   ::placeholder {
//     color: ${({ $error, theme }) =>
//       $error ? theme.colors.primaryGreen : theme.colors.red};
//     transition: color 0.3s ease-in-out;
//   }
