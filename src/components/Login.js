import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import fakeAuth from '../fakeAuth';
import PropTypes from 'prop-types';

const mockUser = {
  username: 'cat',
  password: 'test'
};

export default class Login extends Component {
  state = {
    redirectToReferrer: false,
    username: '',
    password: ''
  };

  login = (e) => {
    e.preventDefault();
    if (
      mockUser.username === this.state.username
      && mockUser.password === this.state.password
    ) {
      fakeAuth.authenticate(() => {
        this.setState(() => ({ redirectToReferrer: true }));
      });
    }
  };

  handleChange = (e) => {
    const inputField = e.target.name;
    this.setState({
      [inputField]: e.target.value
    });
  };

  render() {
    const { redirectToReferrer } = this.state;
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <form>
        <h1>Account Login</h1>
        <div className="twelve columns">
          <label htmlFor="username">Your Username</label>
          <input
            className="u-full-width"
            name="username"
            type="text"
            value={this.state.username}
            placeholder="Username"
            id="username"
            onChange={this.handleChange}
          />
        </div>
        <div className="twelve columns">
          <label htmlFor="password">Your Password</label>
          <input
            className="u-full-width"
            name="password"
            type="password"
            value={this.state.password}
            placeholder="Password"
            id="password"
            onChange={this.handleChange}
          />
        </div>
        <button onClick={this.login} className="button-primary">
          Log In
        </button>
      </form>
    );
  }
}
