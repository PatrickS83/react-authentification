import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Login extends Component {
  render() {
    return (
      <form>
        <h1>Account Login</h1>
        <div className="twelve columns">
          <label htmlFor="username">Your Username</label>
          <input
            className="u-full-width"
            type="email"
            placeholder="Username"
            id="username"
          />
        </div>
        <div className="twelve columns">
          <label htmlFor="email">Your email</label>
          <input
            className="u-full-width"
            type="email"
            placeholder="test@mailbox.com"
            id="email"
          />
        </div>
        <input className="button-primary" type="submit" value="Submit" />
      </form>
    );
  }
}
