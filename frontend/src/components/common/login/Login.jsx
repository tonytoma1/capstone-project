import React from 'react';
import './login-css.css';
import AuthenticationService from '../../../services/authentication.service.js';
import history from '../../../history.js';
import Cookies from 'js-cookie';
import UserService from 'services/user.service';
import * as Constants from 'constants/global-constants';

import Logo from '../../../images/visuals/logo.png';
import Email from '../../../images/visuals/email.png';
import Password from '../../../images/visuals/padlock.png';
import bg from '../../../images/visuals/login-bg.jpg';


import { InputGroup, InputGroupText, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import  { Redirect } from 'react-router-dom'


export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            loggedIn: false,
            failedLoginAttempt: false
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendToForgotPasswordPage = this.sendToForgotPasswordPage.bind(this);
    }
    
    componentDidMount() {
       // Check if the user is logged in
        UserService.isUserLoggedIn()
                    .then((response) => {
                    // the user is logged in.
                    this.setState({loggedIn: true});
                })
                .catch((error) => {
                    // the user is not logged in.
                    this.setState({loggedIn: false});
                });             
    }
    

    handleSubmit(event) {
   event.preventDefault();
         

            // Authenticate the user and then send them to the account page
               /*
                * Each JWT token must begin with 'Bearer' keyword, and then a space must be applied
                * between the JWT token and the 'Bearer' keyword.
                * For example, a complete JWT token will look like this:
                * 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
                * 
                * Below, we are just going to store the token as a cookie and then on each request
                * we must add the 'Bearer' keyword.
                * 
                * Moving forward, in order to retrieve secured endpoints from the backend, 
                * we must keep sending the JWT token on each request. 
                */
                AuthenticationService.login(this.state.email, this.state.password)
                                     .then((response) => {
                                             var jwtToken = response.data.token;
                                             UserService.saveJwtToken(jwtToken);
                                            history.push("/account");
                                            window.location.reload();
                                            })
                                            .catch((error) => {
                                                this.setState({failedLoginAttempt: true});
                                                console.log("error caught");
                                                console.log(error);
                                            });
                
         
    }

    // Changes the email state every time the email input is modified.
    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }


    // Changes the password state every time the input is modified
    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    // Sends the user to the forgot password page.
    sendToForgotPasswordPage(event) {
        event.preventDefault();
        history.push("/forgot-password");
        window.location.reload();
    }

    goToRegister(){
        window.location.href = '/register';
    }

        render() {
            const {loggedIn} = this.state;
            const {failedLoginAttempt} = this.state;

            if(loggedIn) {
                return <Redirect to="/account" />
            }

            return(
                <div >
                 <img src={bg} className="log-bg"/>
                    
                <div className="login-container">

                    <div className="left">
                        <img src={Logo} />
                        <h2> Welcome, Friend!</h2>
                        <h5> Log in with your email and password on the right. Dont have an account yet? click register below!</h5>

                        <button onClick={this.goToRegister} > REGISTER </button>
                   
                    </div>

                    <div className="right">
                            <h3> Login</h3>
                            <h4> Enter your details below to continue</h4>

                            <form onSubmit={this.handleSubmit}>
                                <label> Email</label>
                                <InputGroup className="ip-group"  type="email" onChange={this.handleEmailChange} >
                                    <InputGroupText  className="text"><img src={Email} alt="password"/></InputGroupText>
                                    <Input className="ip" type={"email"} placeholder="enter your email here" id="loginEmail" onChange={this.written} required/>
                                </InputGroup>

                            
                                <label> Password</label>
                                <InputGroup className="ip-group"  onChange={this.handlePasswordChange}>
                                    <InputGroupText className="text"><img src={Password} alt="password"/></InputGroupText>
                                    <Input className="ip" type={"password"} id="loginPassword" placeholder="enter your password here" required/>
                                </InputGroup>

                                <span className="forgot-password" > 
                                <Link to="/forgot-password"> Forgot password?</Link>
                                </span>


                                <input type="Submit" className="submitButton" id="loginSignIn" defaultValue="SignIn"value=" Sign in" />

                                {failedLoginAttempt && <p className="login-error">Login credentials are incorrect. Please try again</p>}
                            </form>
                            
                            <div className="small-footer">
                                <hr></hr>
                                <Link to="/" className="link"> Home</Link>
                                <Link to="/about" className="link"> Contact</Link>
                                <Link to="/About" className="link"> About us</Link>

                                <section className="small-footer-reserved">&#169; 2021 Recommerce. All Rights Reserved.</section>
                            </div>
                    </div> 
                







                   
                    </div>




</div>





           );
        }
    }


