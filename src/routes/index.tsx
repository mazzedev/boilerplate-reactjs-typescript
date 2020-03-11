import React from 'react';
import { Router } from '@reach/router';

import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';

export default function Routes() {
  return (
    <Router>
      <Route path="/" component={SignIn} exact />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Router>
  );
}
