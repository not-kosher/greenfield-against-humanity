import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = (props) => {
  return (
    <div className='Dashboard'>
      <div>
        <div className='dashboardContent'> 
          <div className='Title'>Welcome, you filthy cur</div>
          <div className='dashboard-menu'>
            <Link to='lobby'>
              <div className='dashboard-menu-item'>
                Play a game
              </div>
            </Link>
            <Link to='deckbuilder'>
              <div className='dashboard-menu-item'>
                Build a deck
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;