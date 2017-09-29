import React from 'react';
import Login from './Login';
import Signup from './Signup';

class Landing extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      showLogin: false,
      showSignup: false
    };

    this.toggleLogin = this.toggleLogin.bind(this);
    this.toggleSignup = this.toggleSignup.bind(this);
  }

  toggleLogin() {
    this.setState({
      showLogin: true,
      showSignup: false,
    });
  }

  toggleSignup() {
    this.setState({
      showSignup: true,
      showLogin: false
    });
  }
  
  render() {
    return (
      <div>
        <div className='landingContent'> 
          <div className='Title'>Welcome, Dregs of Humanity</div>
          <div className='button-container'>
            <div className='login-button' onClick={this.toggleLogin}>
              Login
            </div>
            <div className='signup-button' onClick={this.toggleSignup}>
              Signup
            </div>
          </div>
          <div>
            {this.state.showLogin ? <Login login={this.props.login} /> : null}
            {this.state.showSignup ? <Signup signup={this.props.signup} /> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;