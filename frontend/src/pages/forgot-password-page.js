import React from 'react';
import Header from 'components/common/Header/Header';
import Footer from 'components/common/footer/Footer';
import Logo from 'images/logo.png';
import { v4 as uuidv4 } from 'uuid';
import UserService from 'services/user.service';
import history from '../history';

import 'css/forgot-password-page.css';

import reset from 'images/visuals/reset.png';
import { InputGroup, Input } from 'reactstrap';

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

            // Insert UUID into a user's account
            var email = this.state.email;
            var uuid = uuidv4();
            UserService.updateUUID(email, uuid)
                        .then((res) => {
                            console.log("updated")
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

    render() {
        return(
            <div >
                <Header />
                <div className="login-container">

                    <img src={reset} alt="lost" className="reset-img"/>
                    
                    <p className="login-title">Recommerce</p>

                    <p className="forgot-description"> 
                        Enter your email and we'll send you a link 
                        to get your password reset.
                    </p>

                    <form onSubmit={this.sendRecoverPasswordRequest}>

                        <InputGroup className="ip-group"  type="email" id="loginEmail"  onChange={this.handleEmailChange} >
                            <Input placeholder="enter your email here" />
                        </InputGroup>

                        <input type="Submit" className="submitButton" id="loginSignIn" defaultValue="Submit" value="Send"/>
                    </form>
                </div>


                {/* <div className="login-container">

                        <figcaption>Recommerce</figcaption>
                    <h2 className="recover-password-header">Recover Password</h2>

                    <form onSubmit={this.sendRecoverPasswordRequest}>
                    
                        <section>
                            <p>Email</p>
                            <input type="email" id="loginEmail"  onChange={this.handleEmailChange} 
                                placeholder="Enter your Email here"/>
                        </section>
                        <input type="Submit" className="submitButton" id="loginSignIn" defaultValue="Submit" />
                    </form>
                </div> */}


                <Footer />


            </div>
        );
    }
}