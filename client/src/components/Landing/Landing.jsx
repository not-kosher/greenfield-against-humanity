import React from 'react';
import Login from './Login';
import Signup from './Signup';

const Landing = (props) => {
  return (
    <div>
      <div className='Logo'>Greenfield Against Humanity</div>
      <div className='landingContent'> 
        <div className='Title'>Welcome, Dregs of Humanity</div>
        <div>
          <Login />
          <Signup />
        </div>
      </div>
    </div>
  );
};

export default Landing;