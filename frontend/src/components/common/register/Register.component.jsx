import React, { Component } from 'react'
import Logo from '../../../images/logo.png';
import './register.css';
export default class Register extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="register-container">
                <figure>
                    <img src={Logo} alt="Recommerce" />
                    <figcaption>Recommerce</figcaption>
                </figure>
                <form >
                    <section>
                        <p>FirstName</p>
                        <input type="text" id="firstName" required />
                    </section>
                    <section>
                        <p>LastName</p>
                        <input type="text" id="lastName" required/>
                    </section>
                    <section>
                        <p>Username</p>
                        <input type="text" id="userName"  required/>
                    </section>
                    <section>
                        <p>Email</p>
                        <input type="email" id="registerEmail" required />
                    </section>
                    <section>
                        <p>Password</p>
                        <input type="Password" id="registerPassword"  />
                    </section>
                    <input type="Submit" className="submitButton" id="signup"  />
                </form>
            </div>
        );
    }
}
