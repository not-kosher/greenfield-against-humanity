import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ username, logout }) => {
  return (
    <div className='navbar'>
      <span className='Logo'>Greenfield Against Humanity</span>
      <span className='welcome-message'>
        Welcome, <Link to='dashboard'>{username}</Link>
      </span>
      <div className='logout-button' onClick={logout}>
        Logout
      </div>
    </div>
  );
};

export default Navbar;