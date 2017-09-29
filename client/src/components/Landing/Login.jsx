import React from 'react';

const Login = (props) => {
  return (
    <div className='auth-form-container'>
      <form className='auth-form' onSubmit={props.login}>
        <div className='form-description'>
          Login with your account
        </div>
        <div>
          <input type="text" className='input-field' id="username-login" placeholder='Username'/>
        </div>
        <div>
          <input type="password" className='input-field' id="password-login" placeholder='Password'/>
        </div>
        <div>
          <input type="submit" className='input-field submit-button' value="Submit"/>
        </div>
      </form>
    </div>
  );
};

export default Login;
