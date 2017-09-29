import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ username, logout }) => {
  return (
    <div className='navbar'>
      <div className='Logo navbar-element'>Greenfield Against Humanity</div>
      {username ? (
        <div>
          <div className='logout-button navbar-element' onClick={logout}>
            Logout
          </div>
          <div className='welcome-message navbar-element'>
            Welcome, <Link to='dashboard'>{username}</Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;