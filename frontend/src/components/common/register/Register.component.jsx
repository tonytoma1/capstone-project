import React, { Component } from 'react'
import Logo from '../../../images/visuals/logo-white.png';
import axios from 'axios';
import history from '../../../history';
import './register.css';

import { InputGroup, InputGroupText, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import Email from '../../../images/visuals/email.png';
import Password from '../../../images/visuals/padlock.png';
import User from 'images/visuals/user.png';

import {Spinner} from 'react-bootstrap';



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
            isResidential: false,
            matchingPass: false,
            complete: false,
            buttonPressed: false,
            error: false

        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
        this.setState({ isResidential: e.target.checked })
    }

    submitHandler = e => {

        e.preventDefault();

        this.setState({buttonPressed: true});

        console.log(this.state);
        axios.post("http://localhost:8080/api/account/register", this.state)
            .then(response => {

                this.setState({buttonPressed: false,
                              error: false});

                console.log(response);
                history.push("/login");
                window.location.reload();

            })
            .catch(error => {
                this.setState({buttonPressed: false,
                    error: true});
                console.log(error);
            })
    }

    goToSign() {
        window.location.href = '/login';
    }

    nextButton = () => {
        var fname = "" + document.getElementById("reg-fname").value;
        var lname = "" + document.getElementById("reg-lname").value;

        var email = "" + document.getElementById("reg-email").value;
        var pass = "" + document.getElementById("reg-pass").value;
        var repass = "" + document.getElementById("reg-re-pass").value;


        if (fname === "" || email === "" || pass === "" || repass === "") {

            this.setState({ complete: true, matchingPass: false });
        }
        else if (pass !== repass) {
            this.setState({ complete: false, matchingPass: true });
        } else {
            this.setState({ complete: false, matchingPass: false });

            document.getElementById('login-info').style.display = "none";
            document.getElementById('return-add').style.display = "inline";

            document.getElementById('sign').style.display = "inline";
            document.getElementById('next').style.display = "none";

        }
    }

    backButton = () => {
        document.getElementById('login-info').style.display = "block";
        document.getElementById('return-add').style.display = "none";

        document.getElementById('sign').style.display = "none";
        document.getElementById('next').style.display = "inline-block";
    }


    render() {
        const { userName, password, streetAddress1, streetAddress2, country, state, zip, city, email, firstName, lastName, phone, company, isResidential } = this.state;
        const { matchingPass } = this.state;
        const { complete } = this.state;
        return (


            <div className="registration-container ">

                <div className="left">
                    <img src={Logo} />
                    <h2> About you</h2>
                    <h5>
                        Enter your information on the right. Required fields will have a ( <span className="asterisk">*</span> ).
                              <br /><br />If you already have an account with us, click the Sign In button below.
                         </h5>

                    <button className="registerBtn" onClick={this.goToSign} > SIGN IN </button>
                </div>


                <div className="right">
                    <h3> Registration</h3>
                    <h4> Enter your details below</h4>

                    <form onSubmit={this.submitHandler} >
                        <div className="first" id="login-info">
                            <div className="name">

                                <div className="name-cont">
                                    <label> First Name <span className="asterisk">*</span></label>
                                    <InputGroup className="ip-group" id="names" type="email" onChange={this.handleEmailChange} >

                                        <Input className="ip" type={"text"}  name="firstName" value={firstName} onChange={this.changeHandler}id="reg-fname" placeholder="enter your firstname here" required />
                                    </InputGroup>
                                </div>
                                <div className="name-cont">
                                    <label> Last Name </label>
                                    <InputGroup className="ip-group" id="names" type="email" onChange={this.handleEmailChange} >
                                        <Input className="ip" type={"text"} name="lastName" value={lastName} onChange={this.changeHandler} placeholder="enter your lastname here" id="reg-lname" />
                                    </InputGroup>
                                </div>
                            </div>

                            <label> Email <span className="asterisk">*</span></label>
                            <InputGroup className="ip-group" type="email" onChange={this.handleEmailChange} >
                                <InputGroupText className="text"><img src={Email} alt="password" /></InputGroupText>
                                <Input className="ip" type={"email"}  name="email" placeholder="enter your email here" id="reg-email" value={email} onChange={this.changeHandler} required />
                            </InputGroup>

                            <label> Password <span className="asterisk">*</span></label>
                            <InputGroup className="ip-group" type="email" onChange={this.handleEmailChange} >
                                <InputGroupText className="text"><img src={Password} alt="password" /></InputGroupText>
                                <Input className="ip"  name="password"  type={"password"} placeholder="enter your password here" value={password} onChange={this.changeHandler} id="reg-pass" required />
                            </InputGroup>

                            <label> Re-enter Password <span className="asterisk">*</span></label>
                            <InputGroup className="ip-group" type="email" onChange={this.handleEmailChange} >
                                <InputGroupText className="text"><img src={Password} alt="password" /></InputGroupText>
                                <Input className="ip" type={"password"} placeholder="Re-enter your password" id="reg-re-pass" required />
                            </InputGroup>
                        </div>



                        <div className="first" id="return-add">

                            <div className="your-return-add">Shipping Information</div>

                            <label> Phone number </label>
                            <InputGroup className="ip-group" >
                                <Input className="ip" name="phone" type={"phone"} placeholder="enter your phone number here"  value={phone} onChange={this.changeHandler} id="reg-phone" />
                            </InputGroup>

                            <label> Street Address 1<span className="asterisk">*</span></label>
                            <InputGroup className="ip-group">
                                <Input className="ip" type={"text"}   name="streetAddress1" placeholder="enter your address 1" value={streetAddress1} onChange={this.changeHandler} id="reg-street1" required />
                            </InputGroup>

                            <label> Street Address 2</label>
                            <InputGroup className="ip-group"  >
                                <Input className="ip" type={"text"}  name="streetAddress2" placeholder="enter your address 2" value={streetAddress2} onChange={this.changeHandler} id="reg-street2" />
                            </InputGroup>

                            <div className="name">
                                <div className="name-cont">
                                    <label> Zip Code <span className="asterisk">*</span></label>
                                    <InputGroup className="ip-group" id="names">
                                        <Input className="ip" type={"text"} name="zip" value={zip} onChange={this.changeHandler} placeholder="enter your zip code here" id="reg-zip" required />
                                    </InputGroup>
                                </div>
                                <div className="name-cont">
                                    <label> City <span className="asterisk">*</span></label>
                                    <InputGroup className="ip-group" id="names"  >
                                        <Input className="ip" type={"text"} name="city" value={city} onChange={this.changeHandler} placeholder="enter your city here" id="reg-city" required />
                                    </InputGroup>
                                </div>
                            </div>
                            <div className="name">
                                <div className="name-cont">
                                    <label> State <span className="asterisk">*</span></label>
                                    <InputGroup className="ip-group" id="names">
                                        <Input className="ip" type={"text"}  name="state" value={state} onChange={this.changeHandler}  placeholder="enter your state here" id="reg-state" required />
                                    </InputGroup>
                                </div>
                                <div className="name-cont">
                                    <label> Country <span className="asterisk">*</span></label>
                                    <InputGroup className="ip-group" id="names"  >
                                        <Input className="ip" type={"text"}  name="country" value={country} onChange={this.changeHandler} placeholder="enter your country here" id="reg-country" required />
                                    </InputGroup>
                                </div>
                            </div>

                            <label> Company</label>
                            <InputGroup className="ip-group"  >
                                <Input className="ip" type={"text"}  name="company" placeholder="enter your company" value={company} onChange={this.changeHandler} id="reg-street2" />
                            </InputGroup>


                            <div className="reg-info">
                                <p className="checkMe">is this a Residential Area?  </p>
                               <input type="checkbox"  className="residential-radio"name="isResidential" value={isResidential} onChange={this.changeHandler} />
                               <label className="reg-info-radio">  YES </label>
                            </div>

                            <div className="reg-info">
                                <p className="checkMe">
                                    By clicking Sign Up, you agree to our Terms and Privaryt Policy.
                                    You may receive e-mail notification from us and can opt out any time.
                            </p>

                            </div>



                        </div>

                        {complete && <p className="login-error">Complete all Required fields <span className="asterisk">*</span></p>}
                        {matchingPass && <p className="login-error">Make sure you enter a matching password</p>}
            
                        {this.state.buttonPressed ? null : <section className="reg-btn back" onClick={this.backButton}> &#8637; Back</section> }
                        <section className="reg-btn" onClick={this.nextButton} id="next"> Next &#8640;</section>
                       
                       {this.state.error ? <p style={{color : 'red'}}>Email already in use</p> : null}
                       {this.state.buttonPressed ? <Spinner className="spinner" animation="border" variant="success" /> : 
                      
                          <input type="submit" value="Sign up" id="sign" className="reg-btn" />

                       }
                        

                        <div id="mobile-reg">
                        <p> Go back to Login  </p>
                        <input type="Submit" className="submitButton registerbtn" onClick={this.goToSign} value=" Login" />
                        </div>

                    </form>
                </div>

















            </div>

            // --> ver 2

            // <div className="log-bg" >
            //     <div className="registration-container">

            //         <div className="left">
            //             <img src={Logo} />
            //             <h2> About you</h2>
            //             <h5>
            //                 Enter your information on the right. Required fields will have a ( <span className="asterisk">*</span> ).
            //                  <br /><br />If you already have an account with us, click the Sign In button below.
            //             </h5>

            //             <button onClick={this.goToSign} > SIGN IN </button>

            //         </div>

            //         <div className="right">
            //             <h3> Registration</h3>
            //             <h4> Enter your details below</h4>


            //             <div className="first">
            //                 <label> First Name <span className="asterisk">*</span></label>
            //                 <InputGroup className="ip-group" type="email" onChange={this.handleEmailChange} >
            //                     <InputGroupText className="text"><img src={User} alt="password" /></InputGroupText>
            //                     <Input className="ip" type={"text"} placeholder="enter your firstname here" id="loginEmail" required />
            //                 </InputGroup>

            //                 <label> Last Name </label>
            //                 <InputGroup className="ip-group" type="email" onChange={this.handleEmailChange} >
            //                     <InputGroupText className="text"><img src={User} alt="password" /></InputGroupText>
            //                     <Input className="ip" type={"text"} placeholder="enter your lastname here" id="loginEmail" />
            //                 </InputGroup>

            //                 <label> Email <span className="asterisk">*</span></label>
            //                 <InputGroup className="ip-group" type="email" onChange={this.handleEmailChange} >
            //                     <InputGroupText className="text"><img src={Email} alt="password" /></InputGroupText>
            //                     <Input className="ip" type={"email"} placeholder="enter your email here" id="loginEmail" required />
            //                 </InputGroup>

            //                 <label> Password <span className="asterisk">*</span></label>
            //                 <InputGroup className="ip-group" type="email" onChange={this.handleEmailChange} >
            //                     <InputGroupText className="text"><img src={Email} alt="password" /></InputGroupText>
            //                     <Input className="ip" type={"email"} placeholder="enter your password here" id="loginEmail" required />
            //                 </InputGroup>

            //                 <label> Re-enter Password <span className="asterisk">*</span></label>
            //                 <InputGroup className="ip-group" type="email" onChange={this.handleEmailChange} >
            //                     <InputGroupText className="text"><img src={Email} alt="password" /></InputGroupText>
            //                     <Input className="ip" type={"email"} placeholder="Re-enter your password" id="loginEmail" required />
            //                 </InputGroup>
            //             </div>


            //             <div className="next"> Next &#8640; </div>

            //         </div>

            //     </div>
            // </div>



            // --> ver 1
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

