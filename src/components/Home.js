import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Welcome User!</h1>
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
