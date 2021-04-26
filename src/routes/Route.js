/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import mainLayout from '../pages/_layouts/main';
import altLayout from '../pages/_layouts/alt';

import { store } from '../store';

export default function RouteWrapper({
  component: Component,
  admin,
  alreadySignIn,
  cantregisterlogin,
  ...rest
}) {
  const { signed } = store.getState().auth;
  const useradmin = store.getState().auth.admin;

  if (!signed && admin) {
    return <Redirect to="/" />;
  }

  if (!signed && alreadySignIn) {
    return <Redirect to="/" />;
  }

  if (!useradmin && admin) {
    return <Redirect to="/" />;
  }

  if (signed && !useradmin && admin) {
    return <Redirect to="/" />;
  }

  if (signed && cantregisterlogin) {
    return <Redirect to="/" />;
  }

  const Layout = signed ? altLayout : mainLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  admin: PropTypes.bool,
  alreadySignIn: PropTypes.bool,
  cantregisterlogin: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  admin: false,
  alreadySignIn: false,
  cantregisterlogin: false,
};
