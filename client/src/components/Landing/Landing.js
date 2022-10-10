import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="container">
      <h1>¡Encuentra tu Pokemon favorito!</h1>
      <Link to="/home" className="button"> <div>INGRESAR</div> </Link>
    </div>
  );
}

export default Landing;