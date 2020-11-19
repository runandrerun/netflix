import React from 'react';
import { Container, Frame, Error, Title, Text, SmallText, ButtonLink, Input, Submit } from './Form.styles';
import { Link } from 'react-router-dom';

export default function Form({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  );
};

Form.Frame = function FormFrame({ children, ...restProps }) {
  return (
    <Frame {...restProps}>{children}</Frame>
  );
};

Form.Error = function FormError({ children, ...restProps }) {
  return (
    <Error {...restProps}>{children}</Error>
  );
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return (
    <Title {...restProps}>{children}</Title>
  );
};

Form.Text = function FormText({ chidlren, ...restProps }) {
  return (
    <Text {...restProps}>{children}</Text>
  );
};

Form.SmallText = function FormSmallText({ children, ...restProps }) {
  return (
    <SmallText {...restProps}>{children}</SmallText>
  );
};

Form.ButtonLink = function FormButtonLink({ children, ...restProps }) {
  return (
    <ButtonLink {...restProps}>{children}</ButtonLink>
  )
}

Form.Input = function FormInput({ children, ...restProps }) {
  return (
    <Input {...restProps}>{children}</Input>
  );
};

Form.Submit = function FormSubmit({ children, ...restProps }) {
  return (
    <Submit {...restProps}>{children}</Submit>
  );
};
