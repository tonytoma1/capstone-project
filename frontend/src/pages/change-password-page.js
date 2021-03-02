import React from 'react';

import Logo from 'images/logo.png';
import Header from 'components/common/Header/Header_LP';
import Footer from 'components/common/footer/Footer';
import 'components/common/Update-Password/UP.css'; 
import history from '../history';
import UserService from 'services/user.service';


export default class ChangePasswordPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            newPassword: null,
            confirmPassword: null
        }

        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
        this.handleNewPasswordChange = this.handleNewPasswordChange.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
    }

    updatePassword(event) {
        event.preventDefault();

        let search = window.location.search;
        let params = new URLSearchParams(search);
        let uuid = params.get('uuid');
        
        let password = this.state.confirmPassword;

        try {
            UserService.updateAccountPassword(uuid, password);
            history.push("/login");
            window.location.reload();
        }
        catch(e) {

        }
    }

    handleNewPasswordChange(event) {
        this.setState({newPassword: event.target.value});
    }

    handleConfirmPasswordChange(event) {
        this.setState({confirmPassword: event.target.value});
    }

    
    render() {
        return(
            <div>
            <Header />
            <div className="login-container">

                <figure>
                    <img src= {Logo} alt="Recommerce" />
                    <figcaption>Recommerce</figcaption>
                </figure>

                <h2 className="recover-password-header">Update Password</h2>

                <form onSubmit={this.updatePassword}>

                    <section>
                        <p>New Password</p>
                        <input type="password" id="loginEmail"  onChange={this.handleNewPasswordChange} 

                                                            placeholder="Enter your password here"/>
                    </section>

                    <section>
                        <p>Confirm Password</p>
                        <input type="password" id="loginEmail"  onChange={this.handleConfirmPasswordChange} 

                                                            placeholder="Confirm your password"/>
                    </section>

                    <input type="Submit" className="submitButton" id="loginSignIn" defaultValue="Submit" />
                </form>
                </div>


            <Footer/>

            </div>
        );
    }
}