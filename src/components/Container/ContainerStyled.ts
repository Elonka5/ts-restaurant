// import styled from 'styled-components';

// export const StyledContainer = styled.div`
//   margin-left: auto;
//   margin-right: auto;
//   min-width: ${({ theme }) => theme.spacing(80)};
//   padding-left: ${({ theme }) => theme.spacing(34.5)};
//   padding-right: ${({ theme }) => theme.spacing(34.5)};
// `;

import styled, { css } from 'styled-components';

interface ContainerStyledProps {
  $variant?: string;
}

export const ContainerStyled = styled.div<ContainerStyledProps>`
  margin-left: auto;
  margin-right: auto;
  min-width: ${({ theme }) => theme.spacing(80)};
  padding-left: ${({ theme }) => theme.spacing(34.5)};
  padding-right: ${({ theme }) => theme.spacing(34.5)};

  ${({ $variant }) =>
    $variant === 'header' &&
    css`
      display: flex;
      flex-direction: row;
      padding-left: ${({ theme }) => `${theme.spacing(29.5)}`};
    `}
`;

// Використання у хедері:
// export const HeaderContainer = styled(ContainerStyled)`
//   $variant: 'header';
// `;

// Використання в інших секціях:
// const OtherSectionContainer = styled(ContainerStyled)`
//   $variant: 'other';
// `;

/* padding-left: ${({ $variant, theme }) =>
    $variant === 'header'
      ? `${theme.spacing(29.5)}`
      : `${theme.spacing(34.5)}`}; */
