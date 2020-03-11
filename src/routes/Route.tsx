import React from 'react';
import { Redirect } from '@reach/router';

import DefaultLayout from '~/pages/_layouts/default';

type RouteWrapperType = {
  isPrivate?: boolean;
  exact?: boolean;
  component: React.FC | React.ElementType;
  path: string;
};

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}: RouteWrapperType) {
  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/" noThrow />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" noThrow />;
  }

  const Layout = DefaultLayout;

  return (
    <Layout>
      <Component {...rest} />
    </Layout>
  );
}

RouteWrapper.defaultProps = {
  isPrivate: false,
  exact: false,
};
