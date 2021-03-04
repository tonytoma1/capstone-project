import React from 'react';
import Logo from '../../../images/logo.png';
import './login-css.css';
import AuthenticationService from '../../../services/authentication.service.js';
import history from '../../../history.js';
import Cookies from 'js-cookie';
import  { Redirect } from 'react-router-dom'
import UserService from 'services/user.service';
import * as Constants from 'constants/global-constants';

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

        render() {
            const {loggedIn} = this.state;
            const {failedLoginAttempt} = this.state;

            if(loggedIn) {
                return <Redirect to="/account" />
            }
            

            return(
                <div className="login-container">
                    <figure>
                        <img src= {Logo} alt="Recommerce" />
                        <figcaption>Recommerce</figcaption>
                    </figure>

                    {failedLoginAttempt && <p className="login-error">Login credentials are incorrect. Please try again</p>}
                    
                    <form onSubmit={this.handleSubmit}>
                        <section>
                            <p>Email</p>
                            <input type="email" id="loginEmail"  onChange={this.handleEmailChange} 

                                                                placeholder="Enter your Email here"/>
                        </section>

                        <section>
                            <p>Password</p>
                            <input type="Password" id="loginPassword"  onChange={this.handlePasswordChange} 
                                                                    
                                                                     placeholder="Enter your Password here"/>
                        </section>
                        <input type="Submit" className="submitButton" id="loginSignIn" defaultValue="SignIn" />
                    </form>
                    
                    <article className="forgot-password"> 
                        Forgot password? Click 
                        <p>&nbsp;<a onClick={this.sendToForgotPasswordPage}>here.</a></p>
                    </article>
                </div>
            );
        }
    }


