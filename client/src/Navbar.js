import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1> HARVEST </h1>
      <button><Link to='/'>Back to Home</Link></button>
      <button><Link to='/account'>Account</Link></button>
      <button><Link to='/FarmerLogin'>Farmers</Link></button>
      <button><Link to='/Account'>Hungry Humans</Link></button>
    </nav>
  );
};

export default Navbar;