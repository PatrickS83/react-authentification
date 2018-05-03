import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import fakeAuth from '../fakeAuth';

const Authbutton = ({ history, username, saveUsername }) => (fakeAuth.isAuthenticated ? (
    <p>
      Welcome {username}!
      <button
        style={{ marginLeft: "15px" }}
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

Authbutton.propTypes = {
  username: PropTypes.string.isRequired,
  saveUsername: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(Authbutton);
