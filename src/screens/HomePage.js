import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="d-flex justify-content-center my-5">
      <Link to="/signup" className="btn btn-outline-primary mx-2">Sign Up</Link>
      <Link to="/login" className="btn btn-outline-success mx-2">Log in</Link>
    </div>
  );
}

export default HomePage;
