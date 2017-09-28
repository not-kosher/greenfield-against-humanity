import React from 'react';

const Signup = (props) => {
  return (
    <div>
      <form>
        Signup:
        <div>
          <label>Username</label>
          <input type="text" id="username-signup"/>
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password-signup"/>
        </div>
        <div onClick={props.signup} >
          Submit
        </div>
      </form>
    </div>
  );
};

export default Signup;
