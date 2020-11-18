import React from 'react';
import { Background, Container, Logo, Button } from './Header.styles';
import { Link } from 'react-router-dom';

export default function Header({ background = true, children, ...restProps }) {
  return background ?
  <Background {...restProps}>{children}</Background> :
  children;
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return (
    <Container {...restProps}>{children}</Container>
  );
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <Link to={to}>
      <Logo {...restProps} />
    </Link>
  );
};

Header.Button = function HeaderButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>{children}</Button>
  );
};
