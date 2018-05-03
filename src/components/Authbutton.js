import React from 'react';
import { withRouter } from 'react-router-dom';
import fakeAuth from '../fakeAuth';

const Authbutton = ({ history, username, saveUsername }) => (fakeAuth.isAuthenticated ? (
    <p>
      Welcome {username}!
      <button
        className="button-primary"
        onClick={() => {
          fakeAuth.signout(() => {
            history.push("/");
            saveUsername("User");
          });
        }}
      >
        Log Out
      </button>
    </p>
  ) : (
    <p>You are not logged in!</p>
  ));

export default withRouter(Authbutton);
