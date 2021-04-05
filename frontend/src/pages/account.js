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
                          user: userFound,
                          isLoading: false

                      
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
 

componentDidUpdate(){
    console.log(this.state);
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
                <h1> Welcome to your account, {user != null ? <p>{user.data.person.firstName}</p> : null} </h1>
                <div className = "iconImage">
                <img src = {Image} />
                <br/>
                </div>
                   
                    
                    {/* Update user info / *can* edit */}
                    <h2>Update information:</h2>
                    <form onSubmit={this.handleSubmit}> 
                    <div className = "information">
                    <label> First Name:
                        <input type ="text" name="fName" 
                        value = {this.state.firstName}  onChange={this.fNameChange}></input>
                        </label>
                        <br/>
                        <label> Last Name:
                            <input type = "text" name = "lName" value = {this.state.lastName} onChange={this.lNameChange}></input>
                        </label>
                        <br/>
                        <label> Email: 
                        <input type = "text" name = "email" value = {this.state.email}  onChange={this.emailChange}></input>
                        </label>
                        <br/>
                        <label> Phone Number: 
                        <input type = "text" name = "phone" value = {this.state.phone}  onChange={this.phoneChange}></input>
                        </label>
                        <br/>
                        <h5>Shipping information</h5>
                        <label> Country: 
                        <input type = "text" name = "country" value = {this.state.country}  onChange={this.countryChange}></input>
                        </label>
                        <br/>
                        <label> State: 
                        <input type = "text" name = "state" value = {this.state.state}  onChange={this.stateChange}></input>
                        </label>
                        <br/>
                        <label> City: 
                        <input type = "text" name = "city" value = {this.state.city}  onChange={this.cityChange}></input>
                        </label>
                        <br/>
                        <label> Zip: 
                        <input type = "text" name = "zip" value = {this.state.zip}  onChange={this.zipChange}></input>
                        </label>
                        <br/>
                        <label> Address: 
                        <input type = "text" value = {this.state.streetAddress1}  onChange={this.streetAddress1Change}></input>
                        </label>
                        <br/>
                        <button onClick = {this.handleClick}>Update information</button>
                    </div>
                    </form>

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
                <Footer/>
               
                </div>  
              
            );
    
    }
}