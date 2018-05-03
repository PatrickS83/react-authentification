import React from 'react';
import { withRouter } from 'react-router-dom';
import fakeAuth from '../fakeAuth';

const Authbutton = ({ history }) => (fakeAuth.isAuthenticated ? (
    <p>
      Welcome User!
      <button
        className="button-primary"
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Log Out
      </button>
    </p>
  ) : (
    <p>You are not logged in!</p>
  ));

export default withRouter(Authbutton);
