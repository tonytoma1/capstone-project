import React from 'react';
import UserService from 'services/user.service';
import  { Link, Redirect } from 'react-router-dom'
import Header from 'components/common/Header/Header';
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
           
        }

    }

    async componentDidMount() {
        // check to see if the user is logged in
        try {
            let userFound = await UserService.isUserLoggedIn();
            this.setState({userFound: true, user: userFound});

            this.setState({firstName: userFound.data.person.firstName, 
                          lastName: userFound.data.person.lastName,
                          email: userFound.data.person.email, 
                          streetAddress1: userFound.data.person.streetAddress1, 
                          phone: userFound.data.person.phone,
                          country: userFound.data.person.country, 
                          city: userFound.data.person.city, 
                          state: userFound.data.person.state,
                          zip: userFound.data.person.zip,
                      
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
            history.push("/login");
            window.location.reload();
        }

        // Find the customer's orders
        try {
            
            let ordersFound = await UserService.getOrdersBasedOnEmail(this.state.email);
            this.setState({orders: ordersFound});
                
        }
        catch(e) {
            // No orders found
            console.log("No orders found");
        }
        
    }

    render() {
    /*
    * Need to add user's name to welcome message. 
    *  
    */
   let {user, firstName, lastName, email, streetAddress1, phone, country, city, state, zip} = this.state;
   console.log(user);
            return(<div>
                <Header/>
                <h1> Welcome to your account, {user != null ? <p>{user.data.person.firstName}</p> : null} </h1>
                <div className = "iconImage">
                <img src = {Image} />
                <br/>
                </div>
                    <h2>Current information</h2>
                    <div className = "information">
                        <h5>Contact information</h5>
                        <label> First Name:
                        <input type ="text" value = {firstName}></input>
                        </label>
                        <br/>
                        <label> Last Name:
                            <input type = "text" value = {lastName}></input>
                        </label>
                        <br/>
                        <label> Email: 
                        <input type = "text" value = {email}></input>
                        </label>
                        <br/>
                        <label> Phone Number: 
                        <input type = "text" value = {phone}></input>
                        </label>
                        <br/>
                        <h5>Shipping information</h5>
                        <label> Country: 
                        <input type = "text" value = {country}></input>
                        </label>
                        <br/>
                        <label> State: 
                        <input type = "text" value = {state}></input>
                        </label>
                        <br/>
                        <label> City: 
                        <input type = "text" value = {city}></input>
                        </label>
                        <br/>
                        <label> Zip: 
                        <input type = "text" value = {zip}></input>
                        </label>
                        <br/>
                        <label> Address: 
                        <input type = "text" value = {streetAddress1}></input>
                        </label>
                        <br/>
                        <input type ="button" value = "Update information"></input>
                    </div>
                    <br/>
                    <h2>Order history</h2>
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
                <Footer/>
               
                </div>   
            );
    
    }
}