import React from 'react';
import {useState} from 'react';
import UserService from 'services/user.service';
import  { Link, Redirect } from 'react-router-dom'
import Header from 'components/common/Header/Header';
import Footer from 'components/common/footer/Footer';
import Cookies from 'js-cookie';
import history from '../history';
import Image from 'images/iconimage.png';
import 'css/user-account.css';
import { InputGroup, Form, Col, FormControl, Container} from 'react-bootstrap';
import { Envelope, Person, Building, Telephone, Signpost2, Mailbox, Map, TextParagraph } from 'react-bootstrap-icons';

import 'css/account.css';

export default class Account extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userFound: true,
            user: null,
            orders: [],
            firstName: '',
            lastName: '',
            email: '',
            streetAddress1: '',
            phone: '',
            country: '',
            city: '',
            state: '',
            zip: '',
            isLoading: true
        
        
        };
        this.fNameChange = this.fNameChange.bind(this);
        this.lNameChange = this.lNameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.phoneChange = this.phoneChange.bind(this);
        this.countryChange = this.countryChange.bind(this);
        this.stateChange = this.stateChange.bind(this);
        this.cityChange = this.cityChange.bind(this);
        this.zipChange = this.zipChange.bind(this);
        this.streetAddress1Change = this.streetAddress1Change.bind(this);
    }
    fNameChange(e) {
        this.setState({
            fName: e.target.value
        })
    }
    lNameChange(e) {
        this.setState({
            lName: e.target.value
        })
    }
    emailChange(e) {
        this.setState({
            email: e.target.value
        })
    }
    phoneChange(e) {
        this.setState({
            phone: e.target.value
        })
    }
    countryChange(e) {
        this.setState({
            country: e.target.value
        })
    }
    stateChange(e) {
        this.setState({
            state: e.target.value
        })

    }
    cityChange(e) {
        this.setState({
            city: e.target.value
        })
    }
    zipChange(e) {
        this.setState({
            zip: e.target.value
        })
    }
    streetAddress1Change(e) {
        this.setState({
            streetAddress1: e.target.value
        })
    }
 






    async componentDidMount() {
        // check to see if the user is logged in
        try {
            let userFound = await UserService.isUserLoggedIn();
            console.log(userFound);
            //let ordersFound =  await UserService.getOrdersByUsername(userFound.data.person.email);
              let ordersFound = [];

            this.setState({firstName: userFound.data.person.firstName, 
                          lastName: userFound.data.person.lastName,
                          email: userFound.data.person.email, 
                          streetAddress1: userFound.data.person.streetAddress1, 
                          phone: userFound.data.person.phone,
                          country: userFound.data.person.country, 
                          city: userFound.data.person.city, 
                          state: userFound.data.person.state,
                          zip: userFound.data.person.zip,
                          orders: ordersFound,
                          userFound: true, 
                          user: userFound

                      
                        }); 
            //check to see if user is admin
             if(userFound.data.role.roleName === "ADMIN"){
                history.push("/admin");
                window.location.reload();
            }
        }
        catch(e) {
            console.log(e);
            this.setState({userFound: false, user: null});
            history.push("/");
            window.location.reload();
        }
        
    }

    handleClick() {
        
    }


    render() {

        if(this.state.isLoading) {
            return <p>Loading..</p>;
        }


   let {user, fName, lName, email, streetAddress1, phone, country, city, state, zip} = this.state;
   console.log(user);
            return(
              <div>
                <Header/>
                <Container>
                
                    <h1> Welcome to your account, {user != null ? <p>{user.data.person.firstName}</p> : null} </h1>
                    <div className = "iconImage">
                    <img src = {Image} />
                    <br/>
                    </div>
                    
                        
                        {/* Update user info / *can* edit 
                        https://www.robinwieruch.de/conditional-rendering-react
                        
                        */}
                        <h2>Update information:</h2>
                        <Form>
                

                            <Form.Row>
                                <Col md={5} className="cols">
                                <Form.Label className="label">First Name</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>
                                                <Person/>
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl type="text" placeholder={this.state.user.data.person.firstName}></FormControl>
                                    </InputGroup>
                                </Col>
                                
                            </Form.Row>
                            <Form.Row>
                                <Col md={5} className="cols">
                                    <Form.Label className="label">Last Name</Form.Label>
                                            <InputGroup className="input-group">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text>
                                                        <Person/>
                                                    </InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <FormControl type="text" value={this.state.user.data.person.lastName}></FormControl>
                                            </InputGroup>
                                </Col>
                            </Form.Row>

                            <Form.Row>
                                <Col md={5} className="cols">
                                    <Form.Label className="label">Email</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>
                                                <Mailbox />
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl type="email" value={this.state.user.data.person.email}></FormControl>
                                    </InputGroup>
                                </Col>
                            </Form.Row>
                        
                        <Form.Row>
                                <Col md={5} className="cols">
                                    <Form.Label className="label">Phone Number</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>
                                                <Telephone />
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl type="tel" value={this.state.user.data.person.phone}></FormControl>
                                    </InputGroup>
                                </Col>
                            </Form.Row>

                            <Form.Row>
                                <Col md={5} className="cols">
                                    <Form.Label className="label">City</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>
                                                <Building />
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl type="text" value={this.state.user.data.person.city} className="formControl"></FormControl>
                                    </InputGroup>
                                </Col>
                            </Form.Row>

                            <Form.Row>
                                <Col md={5} className="cols">
                                    <Form.Label className="label">State</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>
                                                <Map />
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl as="select" name="state" className="formControl">
										<option selected={this.state.user.data.person.state}>Please Select a State</option>
										<option value="AL">Alabama</option>
										<option value="AK">Alaska</option>
										<option value="AZ">Arizona</option>
										<option value="AR">Arkansas</option>
										<option value="CA">California</option>
										<option value="CO">Colorado</option>
										<option value="CT">Connecticut</option>
										<option value="DE">Delaware</option>
										<option value="DC">District Of Columbia</option>
										<option value="FL">Florida</option>
										<option value="GA">Georgia</option>
										<option value="HI">Hawaii</option>
										<option value="ID">Idaho</option>
										<option value="IL">Illinois</option>
										<option value="IN">Indiana</option>
										<option value="IA">Iowa</option>
										<option value="KS">Kansas</option>
										<option value="KY">Kentucky</option>
										<option value="LA">Louisiana</option>
										<option value="ME">Maine</option>
										<option value="MD">Maryland</option>
										<option value="MA">Massachusetts</option>
										<option value="MI">Michigan</option>
										<option value="MN">Minnesota</option>
										<option value="MS">Mississippi</option>
										<option value="MO">Missouri</option>
										<option value="MT">Montana</option>
										<option value="NE">Nebraska</option>
										<option value="NV">Nevada</option>
										<option value="NH">New Hampshire</option>
										<option value="NJ">New Jersey</option>
										<option value="NM">New Mexico</option>
										<option value="NY">New York</option>
										<option value="NC">North Carolina</option>
										<option value="ND">North Dakota</option>
										<option value="OH">Ohio</option>
										<option value="OK">Oklahoma</option>
										<option value="OR">Oregon</option>
										<option value="PA">Pennsylvania</option>
										<option value="RI">Rhode Island</option>
										<option value="SC">South Carolina</option>
										<option value="SD">South Dakota</option>
										<option value="TN">Tennessee</option>
										<option value="TX">Texas</option>
										<option value="UT">Utah</option>
										<option value="VT">Vermont</option>
										<option value="VA">Virginia</option>
										<option value="WA">Washington</option>
										<option value="WV">West Virginia</option>
										<option value="WI">Wisconsin</option>
										<option value="WY">Wyoming</option>	
									</FormControl>
                                    </InputGroup>
                                </Col>
                            </Form.Row>

                            <Form.Row>
                                <Col md={5} className="cols">
                                    <Form.Label className="label">StreetAddress1</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>
                                                <Building />
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl type="text" value={this.state.user.data.person.streetAddress1}
                                        className="formControl"></FormControl>
                                    </InputGroup>
                                </Col>

                            </Form.Row>

                            <Form.Row>
                                <Col md={5} className="cols">
                                        <Form.Label className="label">StreetAddress2</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                    <Building />
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl type="text" value={this.state.user.data.person.streetAddress2}
                                            className="formControl"></FormControl>
                                        </InputGroup>
                                    </Col>
                            </Form.Row>


                            <Form.Row>
                                <Col md={5} className="cols">
                                <Form.Label className="label">Zip</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>
                                                <Building />
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl type="text" value={this.state.user.data.person.zip}
                                        className="formControl"></FormControl>
                                    </InputGroup>
                                </Col>
                            </Form.Row>

                            <Form.Row>
                                <Col md={5} className="cols">

                                    <FormControl className="submit-button" type="Submit" value="Update"
                                    className="formControl" ></FormControl>
                                
                                </Col>
                            </Form.Row>

                        
                            
                        </Form>
                        {/* User info / *cannot* edit */}
                        <h2>Current information</h2>
                        <div className = "information">
                            <h5>Contact information</h5>
                            <p><b>First name:</b> {fName} </p>
                            <br/>
                            <p><b>Last name:</b> {lName}</p>
                            <br/>
                            <p><b>Email:</b> {email}</p>
                            <br/>
                            <p><b>Phone number:</b> {phone}</p>
                            <br/>
                            <h5>Shipping information</h5>
                            <p><b>Country:</b> {country}</p>
                            <br/>
                            <p><b>State:</b> {state}</p>
                            <br/>
                            <p><b>City:</b> {city}</p>
                            <br/>
                            <p><b>Zip:</b> {zip}</p>
                            <br/>
                            <p><b>Address:</b> {streetAddress1}</p>
                            <br/>
                        </div>
                        <br/>


                    {/* Order Hisotry for user */}
                        <h2>Order history</h2>
                        <div className = "information">
                        <table className = "orders">
                            <div className = "inTable">
                
                            {
                                this.state.orders.length === 0 ? <tr><td colspan="3">No Orders at this time</td></tr> 
                                                                :  <tr>
                                                                <th> Date</th>
                                                                <th>Item decription</th>
                                                                <th>Price</th>
                                                                </tr>
                            }

                            {
                                this.state.orders.map((ordersFound) => {
                                    return(
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td>ordersFound.totalPrice</td>
                                        </tr>
                                    );
                                })
                            }
                            </div>
                        </table>
               
               
                        </div>
               
                        </Container>

                    <Footer/>

               
               
                </div>  
              
            );
    
    }
}


