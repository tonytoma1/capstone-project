import React from 'react';
import Logo from '../../../images/logo.png';
import './login-css.css';


export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    // Changes the email state every time the email input is modified.
    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }


    // Changes the password state every time the input is modified
    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

        render() {
            return(
                <div className="login-container">
                    <figure>
                        <img src= {Logo} alt="Recommerce" />
                        <figcaption>Recommerce</figcaption>
                    </figure>

                    <form>
                        <section>
                            <p>Email</p>
                            <input type="email" id="loginEmail" value={this.state.email}
                                                                onChange={this.handleEmailChange} 
                                                                placeholder="Enter your Email here"/>
                        </section>

                        <section>
                            <p>Password</p>
                            <input type="Password" id="loginPassword" value={this.state.password} 
                                                                      onChange={this.handlePasswordChange}
                                                                     placeholder="Enter your Password here"/>
                        </section>
                        <input type="Submit" class="submitButton" id="loginSignIn" value="SignIn" />
                    </form>
                    
                    <article> 
                        Forgot password? Click 
                        <p>&nbsp;here.</p>
                    </article>
                </div>
            );
        }
    }


