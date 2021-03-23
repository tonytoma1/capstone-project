import React from 'react';
import Header from 'components/common/Header/Header';
import Footer from 'components/common/footer/Footer';

import { v4 as uuidv4 } from 'uuid';
import UserService from 'services/user.service';
import history from '../history';

import 'css/forgot-password-page.css';


import { Link } from 'react-router-dom';

import reset from 'images/visuals/forgot.png';
import { InputGroup, InputGroupText, Input } from 'reactstrap';

import Logo from 'images/visuals/logo-white.png';
import Email from 'images/visuals/email.png';
import Password from 'images/visuals/padlock.png';
import bg from 'images/visuals/login-bg.jpg';

 export default class ForgotPasswordPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: null
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.sendRecoverPasswordRequest = this.sendRecoverPasswordRequest.bind(this);
        this.updateTheUUIDForTheUser = this.updateTheUUIDForTheUser.bind(this);
    }

    async sendRecoverPasswordRequest(event) {
        event.preventDefault();

        document.getElementById("reset-error").style.display="block";
            // Insert UUID into a user's account
            var email = this.state.email;
            var uuid = uuidv4();
            UserService.updateUUID(email, uuid)
                        .then((res) => {
                            console.log("updated");
                            history.push("/login");
                            window.location.reload();
                        })
                        .catch((error) => {
                            console.log("failed");
                        });
    
        
    }

    // Changes the email state every time the email input is modified.
    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }


    // Creates UUID and then updates the user's account to include that UUID
    async updateTheUUIDForTheUser() {
        var uuid = uuidv4();
        var email = this.state.email;
        
        return UserService.updateUUID(email, uuid);
    }

    goToLogin(){
        window.location.href = '/login';
    }

    render() {
        return(
            <div className="log-bg" >
                    
                <div className="login-container">
                <div className="right">
                            <h3> Reset your password</h3>
                            <h4> Enter your email linked to your Recommerce account then we will send you a link to reset your password</h4>

                            <form onSubmit={this.sendRecoverPasswordRequest}>
                            <label> Email</label>
                                <InputGroup className="ip-group"  type="email" onChange={this.handleEmailChange} >
                                    <InputGroupText  className="text"><img src={Email} alt="password"/></InputGroupText>
                                    <Input className="ip" type={"email"} placeholder="enter your email here" id="loginEmail" onChange={this.written} required/>
                                </InputGroup>

                            
                            <input type="Submit" className="submitButton" id="loginSignIn" defaultValue="Submit" value="Send Link"/>
                            
                            <p className="reset-error" id="reset-error">Link was sent into your E-mail. Please check you account and you can close this window.</p>

                            </form>
                            
                            <div className="small-footer">
                                <hr></hr>
                                <Link to="/" className="link">Home</Link>
                                <Link to="/about" className="link">Contact</Link>
                                <Link to="/About" className="link">About us</Link>

                                <section className="small-footer-reserved">&#169; 2021 Recommerce. All Rights Reserved.</section>
                            </div>
                    </div> 
                
                    <div className="left">
                        <img src={Logo} />
                        <h2> <img src={reset} className="reset-img"/></h2>
                        <h5> Don't worry we will recover your account! To go back to the login page, click the Sign in below!</h5>

                        <button onClick={this.goToLogin} > SIGN IN </button>
                   
                    </div>

                  
                    </div></div>
        );

        // <div >
                
        //         <div className="login-container">

        //             <img src={reset} alt="lost" className="reset-img"/>
                    
        //             <p className="login-title">Recommerce</p>

        //             <p className="forgot-description"> 
        //                 Enter your email and we'll send you a link 
        //                 to get your password reset.
        //             </p>

        //             <form onSubmit={this.sendRecoverPasswordRequest}>

        //                 <InputGroup className="ip-group"  type="email" id="loginEmail"  onChange={this.handleEmailChange} >
        //                     <Input className="ip" placeholder="enter your email here" />
        //                 </InputGroup>

        //                 <input type="Submit" className="submitButton" id="loginSignIn" defaultValue="Submit" value="Send"/>
        //             </form>

                    
        //         </div>
               
               
        //         <div className="login-container register">
        //                 <span className="login-register"> 
                            
        //                     <Link to="/login">	&larr; Go back to Login </Link>
        //                 </span>
        //         </div>

                


        //     </div>

        //  <div className="login-container">

        //                 <figcaption>Recommerce</figcaption>
        //             <h2 className="recover-password-header">Recover Password</h2>

        //             <form onSubmit={this.sendRecoverPasswordRequest}>
                    
        //                 <section>
        //                     <p>Email</p>
        //                     <input type="email" id="loginEmail"  onChange={this.handleEmailChange} 
        //                         placeholder="Enter your Email here"/>
        //                 </section>
        //                 <input type="Submit" className="submitButton" id="loginSignIn" defaultValue="Submit" />
        //             </form>
        //         </div> 
    }
}