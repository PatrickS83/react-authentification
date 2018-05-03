import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import Public from './Public';
import PrivateRoute from './PrivateRoute';
import Authbutton from './Authbutton';

class App extends Component {
  state = { username: 'User' };

  saveUsername = (username) => {
    this.setState({ username });
  };

  render() {
    return (
      <Router>
        <div className="container">
          <div className="row">
            <Link to="/" className="two columns">
              <p>Home</p>
            </Link>
            <Authbutton
              username={this.state.username}
              saveUsername={this.saveUsername}
            />
          </div>
          <Route
            exact
            path="/"
            render={props => <Home {...props} username={this.state.username} />}
          />
          <Route
            path="/login"
            render={props => (
              <Login {...props} saveUsername={this.saveUsername} />
            )}
          />
          <Route path="/public" component={Public} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
