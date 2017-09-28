import React from 'react';

const Login = (props) => {
  return (
    <div>
      <form>
        Login:
        <div>
          <label>Username</label>
          <input type="text" id="username-login"/>
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password-login"/>
        </div>
        <div onClick={props.login} >
          Submit
        </div>
      </form>
    </div>
  );
};

export default Login;
