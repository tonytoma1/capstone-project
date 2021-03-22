import React from 'react';
import UserService from 'services/user.service';
import  { Link, Redirect } from 'react-router-dom'
import Header from 'components/common/Header/Header_LP';
import Footer from 'components/common/footer/Footer';
import Cookies from 'js-cookie';
import history from '../history';
import Image from 'images/iconimage.png';
import 'css/user-account.css';

export default class Account extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userFound: true,
            user: null,
            firstName: '',
            lastName: '',
            email: '',
            streetAddress1: '',
            phone: '',
            country: '',
            city: '',
            state: '',
            zip: ''
        }

    }

    componentDidMount() {
        // check to see if the user is logged in
        try {
            UserService.isUserLoggedIn()
            .then((response) => {
                this.setState({userFound: true, user: response});
                this.setState({firstName: response.data.person.firstName, lastName: response.data.person.lastName,
                email: response.data.person.email, streetAddress1: response.data.person.streetAddress1, phone: response.data.person.phone,
                country: response.data.person.country, city: response.data.person.city, state: response.data.person.state,
                zip: response.data.person.zip })   
            })
            .catch((error) => {
                this.setState({userFound: false, user: null});

                console.log(error);
               history.push("/login");
            });
        }
        catch(e) {
            console.log(e);
        }
        
    }
    handleChange(event) {
        this.setState({fName: event.target.value})
      }
    


    render() {
   let {user, firstName, lastName, email, streetAddress1, phone, country, city, state, zip} = this.state;
   console.log(user);
            return(<div>
                <Header/>
                <h1> Welcome to your account, {user != null ? <p>{user.data.person.firstName}</p> : null} </h1>
                <div className = "iconImage">
                <img src = {Image} />
                <br/>
                </div>
                   
                    {/* User info / *cannot* edit */}
                    <h2>Current information</h2>
                    <div className = "information">
                        <h5>Contact information</h5>
                        <p><b>First name:</b> {firstName} </p>
                        <br/>
                        <p><b>Last name:</b> {lastName}</p>
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

                    {/* Update user info / *can* edit */}
                    <h2>Update information:</h2>
                    <div className = "information">
                    <label> First Name:
                        <input type ="text" name="fName" value={this.state.fName}
                        onChange={this.handleChange.bind(this)}></input>
                        </label>
                        <br/>
                        <label> Last Name:
                            <input type = "text"></input>
                        </label>
                        <br/>
                        <label> Email: 
                        <input type = "text"></input>
                        </label>
                        <br/>
                        <label> Phone Number: 
                        <input type = "text"></input>
                        </label>
                        <br/>
                        <h5>Shipping information</h5>
                        <label> Country: 
                        <input type = "text"></input>
                        </label>
                        <br/>
                        <label> State: 
                        <input type = "text"></input>
                        </label>
                        <br/>
                        <label> City: 
                        <input type = "text"></input>
                        </label>
                        <br/>
                        <label> Zip: 
                        <input type = "text"></input>
                        </label>
                        <br/>
                        <label> Address: 
                        <input type = "text"></input>
                        </label>
                        <br/>
                        <button onClick = {this.onClick}>Update information</button>
                    </div>


                  {/* Order Hisotry for user */}
                    <h2>Order history</h2>
                    <div className = "information">
                    <table className = "orders">
                        <div className = "inTable">
                        <tr>
                        <th> Date</th>
                        <th>Item decription</th>
                        <th>Price</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            </tr>
                            <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            </tr>
                            <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            </tr>
                        </div>
                    </table>
                    </div>
                <Footer/>
               
                </div>   
            );
    
    }
}