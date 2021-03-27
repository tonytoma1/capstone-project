import React, { Component } from "react";
import HeaderS from './HeaderS.css';


import Logo from 'images/visuals/logo.png';
import Cart from 'images/shopping-cart.png';
import User from 'images/visuals/user.png';
import Menu from 'images/visuals/menu.png';

import  { Redirect } from 'react-router-dom'
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from 'reactstrap';



import Cookies from 'js-cookie';
import * as Constants from 'constants/global-constants';
import UserService from "services/user.service";
import history from 'history.js';


import Nav from "./comp/nav";

export default class  Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        }

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        Cookies.remove("jwtToken");
        history.push("/login");
        window.location.reload();
    }

    componentDidMount() {
        var token = Cookies.get("jwtToken");

        if (token != null) {
            this.setState({ isLoggedIn: true });
        }
        else {
            this.setState({ isLoggedIn: false });
        }

        /*
        UserService.getUser()
                    .then((res) => {
                        this.setState({isLoggedIn: true});
                    })
                    .catch((res) => {
                        this.setState({isLoggedIn: false});
                    })
                    */
    }

    menu = (e) => {
        var menu = document.getElementById("menu-links");
        var user = document.getElementById("user-links");



        if(e.currentTarget.alt === "user"){

            document.getElementById("menu-icon").style.backgroundColor = 'white';
            document.getElementById("menu-icon").style.backgroundColor = '70%';
            menu.style.display = "none";

            if (user.style.display === "block") {
                user.style.display = "none";
                e.target.style.backgroundColor = 'white';
                e.target.style.opacity = '70%';

            } else {
              user.style.display = "block";
              e.target.style.backgroundColor = '#3aafa9';
              e.target.style.opacity = '100%';
            }
        }else{

            document.getElementById("user-icon").style.backgroundColor = 'white';
            document.getElementById("user-icon").style.backgroundColor = '70%';
            user.style.display = "none";

            if (menu.style.display === "block") {
                menu.style.display = "none";
                e.target.style.backgroundColor = 'white';
                e.target.style.opacity = '70%';

            } else {
                menu.style.display = "block";
              e.target.style.backgroundColor = '#3aafa9';
              e.target.style.opacity = '100%';
            }
        }

      }

   

     goToHome(){
        window.location.href = '/';
     }
     
    render() {

        const { isLoggedIn } = this.state;


        if(isLoggedIn){
            return (
                
                <div className="header-container" >
    
                    <Nav />
    
                    <div className="main-width">
    
                        <img src={Logo} alt="Recommerce" className="logo" onClick={this.goToHome}/>
    
                        <div className="logged-in" id="desktop">
                        <span className="button"><Link to="/Account">Account  </Link> </span>
                        <span className="button"><Link to="/login" onClick={this.handleLogout}>Logout  </Link> </span>

                            <img className="cart" src={Cart} alt />
                        </div>
    
                        <div className="not-logged-in" id="mobile">
                            <div>
                                <img src={User} alt='user' onClick={this.menu} id="user-icon"></img>
                                <img src={Menu} alt='menu' onClick={this.menu} id="menu-icon"></img>
                            </div>
                        </div>
    
                    </div>
    
                    <div id="menu-links"  className="myLinks">
                            <Link to="/" className="Link">
                               Home
                            </Link>
    
                            <Link to="/sell-device" className="Link">
                                Sell Device
                            </Link>
    
                            <Link to="/about" className="Link">
                               About
                            </Link>
                    </div>
    
                    <div id="user-links" className="myLinks">
    
                            <Link to="/account" className="Link">
                               My Account
                            </Link>
    
                            <Link to="/register" className="Link" onClick={this.handleLogout}>
                                Log out
                            </Link>
    
                    </div>
    
                </div>
    
            );
        }else{
            return (
                
                <div className="header-container" >


                    <Nav />
    
                    <div className="main-width">
    
                        <img src={Logo} alt="Recommerce" className="logo" onClick={this.goToHome}/>

                        <div className="not-logged-in" id="desktop">
                            <span className="button"><Link to="/login">Sign in   </Link> </span>
                            <img className="cart" src={Cart} alt />
                        </div>

                    </div>
                
    
                </div>
    
            );
        }

        

         
    }
}
