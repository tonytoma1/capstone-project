import React, { Component } from 'react'
import Logo from '../../../images/logo.png';
import axios from 'axios';
import history from '../../../history';
import './register.css';


export default class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            password: "",
            streetAddress1: "",
            streetAddress2: "",
            country: "",
            state: "",
            zip: "",
            city: "",
            email: "",
            firstName: "",
            lastName: "",
            phone: "",
            company: "",
            isResidential: false

        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
        this.setState({isResidential: e.target.checked})
    }

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state);
        axios.post("http://localhost:8080/api/account/register", this.state)
            .then(response => {
                console.log(response);
                history.push("/login");
                window.location.reload();
               
            })
            .catch(error => {
                console.log(error);
            })
    }


    render() {
        const { userName, password, streetAddress1, streetAddress2, country, state, zip, city, email, firstName, lastName, phone, company, isResidential } = this.state;
        return (
            <div className="register-container">
                <figure>
                    <img src={Logo} alt="Recommerce" />
                    <figcaption>Recommerce</figcaption>
                </figure>
                <form onSubmit={this.submitHandler} >
                    <section>
                        <p>Username</p>
                        <input type="text" name="userName" value={userName} onChange={this.changeHandler} />
                    </section>
                    <section>
                        <p>Password</p>
                        <input type="Password" name="password" value={password} onChange={this.changeHandler} />
                    </section>
                    <section>
                        <p>streetAddress1</p>
                        <input type="text" name="streetAddress1" value={streetAddress1} onChange={this.changeHandler} />
                    </section>
                    <section>
                        <p>streetAddress2</p>
                        <input type="text" name="streetAddress2" value={streetAddress2} onChange={this.changeHandler} />
                    </section>
                    <section>
                        <p>Country</p>
                        <input type="text" name="country" value={country} onChange={this.changeHandler} />
                    </section>
                    <section>
                        <p>State</p>
                        <input type="text" name="state" value={state} onChange={this.changeHandler} />
                    </section>
                    <section>
                        <p>Zip</p>
                        <input type="text" name="zip" value={zip} onChange={this.changeHandler} />
                    </section>
                    <section>
                        <p>City</p>
                        <input type="text" name="city" value={city} onChange={this.changeHandler} />
                    </section>
                    <section>
                        <p>email</p>
                        <input type="text" name="email" value={email} onChange={this.changeHandler} />
                    </section>
                    <section>
                        <p>firstName</p>
                        <input type="text" name="firstName" value={firstName} onChange={this.changeHandler} />
                    </section>
                    <section>
                        <p>LastName</p>
                        <input type="text" name="lastName" value={lastName} onChange={this.changeHandler} />
                    </section>
                    <section>
                        <p>Phone</p>
                        <input type="text" name="phone" value={phone} onChange={this.changeHandler} />
                    </section>
                    <section>
                        <p>Company</p>
                        <input type="text" name="company" value={company} onChange={this.changeHandler} />
                    </section>
                    <section>
                    <p>Is Residential</p>
                    <input type="checkbox"  name="isResidential" value={isResidential} onChange={this.changeHandler} />
                    
                    </section>
                        <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

