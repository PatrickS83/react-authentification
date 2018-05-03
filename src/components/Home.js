import React from 'react';

const Home = () => (
  <div>
    <h1>Welcome User!</h1>
    <p>Where do you want to go?</p>
    <div className="row">
      <button className="button-primary four columns">Public Page</button>
      <button className="button-primary four columns">
        Protected Dashboard
      </button>
    </div>
  </div>
);

export default Home;
