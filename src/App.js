import React from 'react';
import { Home, Browse, SignIn, SignUp } from './pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';

import './App.css';

export default function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route exact path={ROUTES.BROWSE} component={Browse} />
      <Route exact path={ROUTES.SIGNIN} component={SignIn} />
      <Route exact path={ROUTES.SIGNUP} component={SignUp} />
    </Router>
  );
};
