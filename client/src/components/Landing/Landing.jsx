import React from 'react';

class Landing extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className='Logo'>Greenfield Against Humanity</div>
        <div className='landingContent'> 
          <div className='Title'>Welcome, Dregs of Humanity</div>
          <div>Text</div>
          <div className='Login'>
            <input className='username'/>
            <input className='password'/>
            <div>Submit</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;