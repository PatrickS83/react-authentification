import React, { Component } from 'react';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import Public from './Public';

class App extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <h1>React Auth Exercise</h1>
        <Home />
        <Login />
        <Public />
        <Dashboard />
      </div>
    );
  }
}

export default App;
