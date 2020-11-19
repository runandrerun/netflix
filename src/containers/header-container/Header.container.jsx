import React from 'react';
import { Header } from '../../components';
import logo from '../../_assets/img/logo/netflix-logo.svg';
import * as ROUTES from '../../constants/routes';

export default function HeaderContainer({ children }) {
  return (
      <Header>
        <Header.Frame>
          <Header.Logo
            to={ROUTES.HOME}
            alt="Netflix"
            src={logo}
          />
          <Header.ButtonLink to={ROUTES.SIGNIN}>Sign in</Header.ButtonLink>
        </Header.Frame>
        {children}
      </Header>
  );
};
