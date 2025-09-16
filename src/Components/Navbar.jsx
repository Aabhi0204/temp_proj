import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Navbar = () => {
  return (
    <div className='nav'>
      <h1 className='text-white text-2xl font-bold'>Logo</h1>
      <nav className='nav-menu'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/service">Service</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
