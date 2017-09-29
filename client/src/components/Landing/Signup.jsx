import React from 'react';

const Signup = (props) => {
  return (
    <div className='auth-form-container'>
      <form className='auth-form'>
        <div className='form-description'>
          Signup for a new account
        </div>
        <div>
          <input type="text" className='input-field' id="username-login" placeholder='Username'/>
        </div>
        <div>
          <input type="password" className='input-field' id="password-login" placeholder='Password'/>
        </div>
        <div>
          <input type="submit" className='input-field submit-button' value="Submit" onSubmit={props.signup}/>
        </div>
      </form>
    </div>
  );
};

export default Signup;
