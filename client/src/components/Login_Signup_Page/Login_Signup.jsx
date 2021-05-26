/* eslint-disable */
import React, { useEffect, useContext, useState } from 'react';
import { APIContext } from '../../state_&_contexts/APIContext';

const Login_Signup = () => {
  const { createUser, userLogin } = useContext(APIContext);

  const [onLoginPage, setOnLoginPage] = useState(true);

  const switchPage = () => {
    console.log(onLoginPage);
    setOnLoginPage(!onLoginPage);
  };

  return (
    <div id="login-signup-container">
      {onLoginPage
       ? <div>
          <button type="button" onClick={() => switchPage()}>
            New User? Sign Up Here!
          </button>
          <h4>Login</h4>
          <form onSubmit={(e) => userLogin(e)}>
            <label htmlFor="username">
              Username:
              <input type='text' id="username" name="username" placeholder='username' required />
            </label>
            <label htmlFor="password">
              Password:
              <input type='text' id="password" name="password" placeholder='password' required />
            </label>
            <button className='' type="submit">Log In</button>
          </form>
        </div>
      : <div>
          <button type="button" onClick={() => switchPage()}>
            Have an account? Log In Here!
          </button>
          <h4>Sign Up</h4>
          <form onSubmit={(e) => createUser(e)}>
            <label htmlFor="username">
              Username:
              <input type='text' id="username" name="username" placeholder='username' required />
            </label>
            <label htmlFor="password">
              Password:
              <input type='text' id="password" name="password" placeholder='password' required />
            </label>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      }
    </div>
  )
}

export default Login_Signup;









