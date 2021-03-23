import React, { Component } from 'react'
import Logo from '../../../images/visuals/logo-white.png';
import axios from 'axios';
import history from '../../../history';
import './register.css';

import { InputGroup, InputGroupText, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import  { Redirect } from 'react-router-dom';

import Email from '../../../images/visuals/email.png';
import Password from '../../../images/visuals/padlock.png';


export default class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
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

            <div className="log-bg" >
                <div className="login-container">

                    <div className="left">
                        <img src={Logo} />
                        <h2> About you</h2>
                        <h5> 
                            Enter your information on the right. Required fields will have a ( <span className="asterisk">*</span> ).
                             <br/><br/>If you already have an account with us, click the Sign In button below.
                        </h5>

                        <button onClick={this.goToRegister} > SIGN IN </button>
                   
                    </div>

                    <div className="right">
                            <h3> Registration</h3>
                            <h4> Enter your details below</h4>

                            <label> Email <span className="asterisk">*</span></label>
                                <InputGroup className="ip-group"  type="email" onChange={this.handleEmailChange} >
                                    <InputGroupText  className="text"><img src={Email} alt="password"/></InputGroupText>
                                    <Input className="ip" type={"email"} placeholder="enter your email here" id="loginEmail" onChange={this.written} required/>
                                </InputGroup>

                    </div> 
                
                    </div>




</div>

            // <div className="register-container">
            //     <figure>
            //         <img src={Logo} alt="Recommerce" />
            //         <figcaption>Recommerce</figcaption>
            //     </figure>
            //     <form onSubmit={this.submitHandler} >
            //         <section>
            //             <p>email</p>
            //             <input type="text" name="email" value={email} onChange={this.changeHandler} />
            //         </section>
            //         <section>
            //             <p>Password</p>
            //             <input type="Password" name="password" value={password} onChange={this.changeHandler} />
            //         </section>
            //         <br></br>
            //         <section>
            //             <p>streetAddress1</p>
            //             <input type="text" name="streetAddress1" value={streetAddress1} onChange={this.changeHandler} />
            //         </section>
            //         <section>
            //             <p>streetAddress2</p>
            //             <input type="text" name="streetAddress2" value={streetAddress2} onChange={this.changeHandler} />
            //         </section>
            //         <section>
            //             <p>Country</p>
            //             <input type="text" name="country" value={country} onChange={this.changeHandler} />
            //         </section>
            //         <section>
            //             <p>State</p>
            //             <input type="text" name="state" value={state} onChange={this.changeHandler} />
            //         </section>
            //         <section>
            //             <p>Zip</p>
            //             <input type="text" name="zip" value={zip} onChange={this.changeHandler} />
            //         </section>
            //         <section>
            //             <p>City</p>
            //             <input type="text" name="city" value={city} onChange={this.changeHandler} />
            //         </section>
            //         <br/>
            //         <section>
            //             <p>firstName</p>
            //             <input type="text" name="firstName" value={firstName} onChange={this.changeHandler} />
            //         </section>
            //         <section>
            //             <p>LastName</p>
            //             <input type="text" name="lastName" value={lastName} onChange={this.changeHandler} />
            //         </section>
            //         <section>
            //             <p>Phone</p>
            //             <input type="text" name="phone" value={phone} onChange={this.changeHandler} />
            //         </section>
            //         <section>
            //             <p>Company</p>
            //             <input type="text" name="company" value={company} onChange={this.changeHandler} />
            //         </section>
            //         <section>
            //         <p>Is Residential</p>
            //         <input type="checkbox"  name="isResidential" value={isResidential} onChange={this.changeHandler} />
                    
            //         </section>
            //             <button type="submit">Submit</button>
            //     </form>
            // </div>
        
        
        );
    }
}

