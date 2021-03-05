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
            user: null
        }

    }

    componentDidMount() {
        // check to see if the user is logged in
        try {
            UserService.isUserLoggedIn()
            .then((response) => {
                this.setState({userFound: true, user: response});
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

    render() {
    /*
    * Need to add user's name to welcome message. 
    *  
    */
            return(<div>
                <Header/>
                <h1> Welcome to your account, Ryan!</h1>
                <div className = "iconImage">
                <img src = {Image} />
                </div>
                <div className = "float">
                    <h2><span>Edit User Information:</span></h2>
                    <div className = "userInfo">
                     <div className = "labels">
                    <label> First name: </label> 
                    <div className = "inputT">
                    <input type = "text"></input> 
                    </div>                           
                    </div>
                    <br />
                    <div className = "labels">
                    <label> Last name: </label> 
                    <div className = "inputT">
                    <input type = "text"></input>
                    </div>
                    </div>
                    <br />
                    <div className = "labels">
                    <label> Email: </label> 
                    <div className = "inputT">
                    <input type = "text"></input>
                    </div>
                    </div>
                    <br />
                    <div className = "labels">
                    <label> Address: </label> 
                    <div className = "inputT">
                    <input type = "text"></input>
                    </div>
                    </div>
                    <br />
                    <div className = "labels">
                    <label> Country: </label> 
                    <div className = "inputT">
                    <input type = "text"></input>
                    </div>
                    </div>
                    <br />
                    <div className = "labels">
                    <label> State: </label> 
                    <div className = "inputT">
                    <input type = "text"></input>
                    </div>
                    </div>
                    <br />
                    <div className = "labels">
                    <label> City: </label> 
                    <div className = "inputT">
                    <input type = "text"></input>
                    </div>
                    </div>
                    <br />
                    <div className = "labels">
                    <label> Zip code: </label> 
                    <div className = "inputT">
                    <input type = "text"></input>
                    </div>
                    </div>
                    <br />
                    <div className = "labels">
                    <label> Phone number: </label> 
                    <div className = "inputT">
                    <input type = "text"></input>
                    </div>
                    </div>
                    <br />
                    <div className = "buttons">
                    <input type = "button" value = "Update information"></input>
                    </div>
                    </div>
                </div>
                <div className = "float">
                    <h2><span>Order history</span></h2>
                    <table className = "orders">
                        <div className = "inTable">
                        <tr>
                        <th>
                            Date
                        </th>
                        <th>
                            Item decription
                        </th>
                        </tr>
                        <tr>
                            <th>
                                March 1, 2021
                            </th>
                            <th>
                                Iphone 7 64GB
                            </th>
                            </tr>
                            <tr>
                            <th>February 12, 2021</th>
                            <th>Iphone 7 32GB</th>
                            </tr>
                            <tr>
                            <th>January 19, 2021</th>
                            <th>Iphone 10 128GB </th>
                            </tr>
                        </div>
                    </table>
                </div>
             
                <Footer/>
               
                </div>   
            );
    
    }
}