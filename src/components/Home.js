import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ username }) => (
  <div>
    <h1>React Auth Exercise</h1>
    <h2>Welcome {username}!</h2>
    <p>Where do you want to go?</p>
    <div className="row">
      <Link to="/public">
        <button className="button-primary four columns">Public Page</button>
      </Link>
      <Link to="/dashboard">
        <button className="button-primary four columns">
          Protected Dashboard
        </button>
      </Link>
    </div>
  </div>
);

export default Home;
