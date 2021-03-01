import React from 'react';
import Header from 'components/common/Header/Header_LP';
import Footer from 'components/common/footer/Footer';
import Logo from 'images/logo.png';
import { v4 as uuidv4 } from 'uuid';
import UserService from 'services/user.service';
import NodeMailer from 'nodemailer';

import 'components/common/login/login-css.css';
import 'css/forgot-password-page.css';


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

        
        try {
            // Insert UUID into a user's account
            var email = this.state.email;
            var uuid = uuidv4();
           await UserService.updateUUID(email, uuid);
            // Send an email regarding the password reset
            await UserService.sendUUIDEmail(email, uuid);
            // create reusable transporter object using the default SMTP transport
          

            // send mail with defined transport object
          
            // tell the user the reset link has been sent to their email
        }
        catch(e) {

        }
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

                    <figure>
                        <img src= {Logo} alt="Recommerce" />
                        <figcaption>Recommerce</figcaption>
                    </figure>

                    <h2 className="recover-password-header">Recover Password</h2>

                    <form onSubmit={this.sendRecoverPasswordRequest}>
                    
                        <section>
                            <p>Email</p>
                            <input type="email" id="loginEmail"  onChange={this.handleEmailChange} 

                                                                placeholder="Enter your Email here"/>
                        </section>
                        <input type="Submit" className="submitButton" id="loginSignIn" defaultValue="Submit" />
                    </form>
                </div>


                <Footer />


            </div>
        );
    }
}