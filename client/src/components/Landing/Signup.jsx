import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.getElementById('username-signup').focus();
    document.getElementById('username-signup').select();
  }

  render() {
    return (
      <div className='auth-form-container'>
        <form className='auth-form' onSubmit={this.props.signup}>
          <div className='form-description'>
            Signup for a new account
          </div>
          <div>
            <input type="text" className='input-field' id="username-signup" placeholder='Username'/>
          </div>
          <div>
            <input type="password" className='input-field' id="password-signup" placeholder='Password'/>
          </div>
          <div>
            <input type="submit" className='input-field submit-button' value="Submit"/>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
