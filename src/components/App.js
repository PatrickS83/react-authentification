import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import Public from './Public';
import PrivateRoute from './PrivateRoute';
import Authbutton from './Authbutton';
import fakeAuth from '../fakeAuth';

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <div className="container">
          <div className="row">
            <Link to="/" className="two columns">
              <p>Home</p>
            </Link>
            <Authbutton />
          </div>
          <h1>React Auth Exercise</h1>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/public" component={Public} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
