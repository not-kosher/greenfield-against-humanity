import React from 'react';
import Login from './Login';
import Signup from './Signup';

class Landing extends React.Component { 
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <div className='Logo'>Greenfield Against Humanity</div>
        <div className='landingContent'> 
          <div className='Title'>Welcome, Dregs of Humanity</div>
          <div>
            <Login login={this.props.login} />
            <Signup signup={this.props.signup} />
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;