import React, { Component } from "react";
import HeaderS from './HeaderS.css';


import Logo from 'images/visuals/logo.png';
import Cart from 'images/shopping-cart.png';
import User from 'images/visuals/user.png';
import Menu from 'images/visuals/menu.png';

import  { Redirect } from 'react-router-dom'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';



import Cookies from 'js-cookie';
import * as Constants from 'constants/global-constants';
import UserService from "services/user.service";
import history from 'history.js';


import Nav from "./comp/nav";
import { Dropdown, ListGroup, Badge } from "react-bootstrap";

import {connect} from 'react-redux';
import {CART, REMOVE_ITEM, addPhoneComponent} from 'redux-action';

class  Header extends React.Component {

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

    removeItemFromCart(index) {
        this.props.dispatch(addPhoneComponent(REMOVE_ITEM, index));
    }


    menu = (e) => {
        var user = document.getElementById("user-links");



            if (user.style.display === "block") {
                user.style.display = "none";
                e.target.style.backgroundColor = 'white';
                e.target.style.opacity = '70%';

            } else {
              user.style.display = "block";
              e.target.style.backgroundColor = '#3aafa9';
              e.target.style.opacity = '100%';
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
                            <Dropdown className="dropdown-box">
                                <Dropdown.Toggle variant="none" id="dropdown-basic">
                                    <img className="cart" src={Cart} alt /> <Badge pill>{this.props.shopping_cart.length}</Badge>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {this.props.shopping_cart.length > 0 ? 
                                    (<Dropdown.Item >
                                        <Link to="/confirm-order">
                                        <Button variant="outline-primary" className="linkText">Proceed to Checkout</Button>
                                        </Link>
                                    </Dropdown.Item>) : null}
                                    {
                                        this.props.shopping_cart.map((device, index) => {
                                            return(
                                                <Dropdown.Item>
                                                    <ListGroup>
                                                        <ListGroup.Item>
                                                        <img src={device.modelImage}/>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item>{device.model}</ListGroup.Item>
                                                        <ListGroup.Item>{device.storage}GB</ListGroup.Item>
                                                        <ListGroup.Item>{device.serviceProvider}</ListGroup.Item>
                                                        <ListGroup.Item>{device.condition}</ListGroup.Item>
                                                        <ListGroup.Item>${device.price}</ListGroup.Item>
                                                       
                                                        <ListGroup.Item><Button onClick={() => {this.removeItemFromCart(index)}}>Remove</Button></ListGroup.Item>
                                                    </ListGroup>
                                                </Dropdown.Item>
                                                
                                            )
                                                    
                                        })
                                    }
                                    
                                    
                                    

                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
    
                        
    
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

                        <div className="not-logged-in" >
                            <span className="button"><Link to="/login">Sign in   </Link> </span>
                            <Dropdown className="dropdown-box">
                                <Dropdown.Toggle variant="none" id="dropdown-basic">
                                    <img className="cart" src={Cart} alt /> <Badge pill>{this.props.shopping_cart.length}</Badge>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {this.props.shopping_cart.length > 0 ? 
                                    (<Dropdown.Item >
                                        <Link to="/confirm-order">
                                        <Button variant="outline-primary" className="linkText">Proceed to Checkout</Button>
                                        </Link>
                                    </Dropdown.Item>) : null}
                                    {
                                        this.props.shopping_cart.map((device, index) => {
                                            return(
                                                <Dropdown.Item>
                                                    <ListGroup>
                                                        <ListGroup.Item>
                                                        <img src={device.modelImage}/>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item>{device.model}</ListGroup.Item>
                                                        <ListGroup.Item>{device.storage}GB</ListGroup.Item>
                                                        <ListGroup.Item>{device.serviceProvider}</ListGroup.Item>
                                                        <ListGroup.Item>{device.condition}</ListGroup.Item>
                                                        <ListGroup.Item>${device.price}</ListGroup.Item>
                                                       
                                                        <ListGroup.Item><Button onClick={() => {this.removeItemFromCart(index)}}>Remove</Button></ListGroup.Item>
                                                    </ListGroup>
                                                </Dropdown.Item>
                                                
                                            )
                                                    
                                        })
                                    }
                                    
                                    
                                    

                                </Dropdown.Menu>
                            </Dropdown>
                            
                           
                        </div>

                    </div>
                
    
                </div>
    
            );
        }

        

         
    }
}

function mapStateToProps(state) {
    return {
        shopping_cart: state.shopping_cart
       
    };
}

export default connect(mapStateToProps) (Header);
