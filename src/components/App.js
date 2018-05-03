import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import Public from './Public';
import fakeAuth from '../fakeAuth';

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <div className="container">
          <h1>React Auth Exercise</h1>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/public" component={Public} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
