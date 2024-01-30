import React from 'react';
import { ContainerStyled } from './ContainerStyled';

type Props = {
  children: React.ReactNode;
  variant: string;
};

const Container = ({ children, variant }: Props) => {
  return <ContainerStyled $variant={variant}>{children}</ContainerStyled>;
};

export default Container;
