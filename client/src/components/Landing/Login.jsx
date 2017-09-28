import React from 'react';

const Login = (props) => {
  return (
    <div>
      <form>
        Login:
        <div>
          <label>Username</label>
          <input type="text" id="username"/>
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password"/>
        </div>
        <div>
          Submit
        </div>
      </form>
    </div>
  );
};

export default Login;
