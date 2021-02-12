import React from 'react';
import Logo from '../../../images/logo.png';
import './login-css.css';

function Login () {

  return (
    
    <div className="login-container">

        <figure>
            <img src= {Logo} alt="Recommerce" />
            <figcaption>Recommerce</figcaption>
        </figure>

        <section>
            <p>Email</p>
            <input type="email" id="loginEmail" placeholder="Enter your Email here"/>
        </section>

        
        <section>
            <p>Password</p>
            <input type="Password" id="loginPassword" placeholder="Enter your Password here"/>
        </section>

        <button id="loginSignIn" value="SignIn"> Sign in </button>

        
        <article> 
            Forgot password? Click 
            <p>&nbsp;here.</p>
        </article>
    </div>
    
  )

}

export default Login;