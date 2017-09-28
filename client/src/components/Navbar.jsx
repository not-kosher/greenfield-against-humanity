import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ username }) => {
  return (
    <div class='navbar'>
      <span className='Logo'>Greenfield Against Humanity</span>
      <span className='welcome-message'>
        Welcome, <Link to='dashboard'>{username}</Link>
      </span>
      <div className='logout-button'>
        Logout
      </div>
    </div>
  );
};

export default Navbar;