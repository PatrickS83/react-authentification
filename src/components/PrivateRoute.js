import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import fakeAuth from '../fakeAuth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      ))
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object
};

export default PrivateRoute;
