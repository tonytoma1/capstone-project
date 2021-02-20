import React, { Component } from "react";
import HeaderS from './HeaderS.css';
import Logo from '../../../images/logo.png';
import Cart from '../../../images/cart.png';
import {Link} from "react-router-dom";
import Cookies from 'js-cookie';
import * as Constants from 'constants/global-constants';
import UserService from "services/user.service";

/*  
            
              <div>
       <header className="Container">
        <div>
        <img className="I" src= {Logo}/>
        <h2 className="Title">Recommerce</h2>
        </div>
        <hr/>
        </header></div>
*/
class Header_LP extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        }
    }

    componentDidMount() {
        // check if the user has a jwt token
        var username;

        try {
            username = UserService.getUsernameFromJwtToken();

            if(username != null) {
                this.setState({isLoggedIn: true});
            }
        }
        catch(e) {
            this.setState({isLoggedIn: false});
        }
    }


    render(){

        const {isLoggedIn} = this.state;

        return(
            <div>
                <header className="Container">
                    <div className="title-container">
                    <img className="I" src= {Logo}/>
                    <h2 className="Title">Recommerce</h2>
                    </div>
            
                    {/* Middle navigation */}
                   
                    <table className="navigational-table">
                        <tbody>
                            <tr>
                                <td>Home</td>
                                <td>Sell Device</td>
                                <td>About</td>
                            </tr>
                        </tbody>
                    </table>


                    {/* Right most navigation */}
                    <table className="login-register-table">
                        <tbody>
                           <tr>
                                {/* Check to see if the user is not logged in */}
                                {!isLoggedIn && 
                                <td> 
                                    <Link to="/login">Login</Link> 
                                </td>
                                }
                                {!isLoggedIn && 
                                    <td className="td-login-register">Register</td>
                                }
                                {/* If the user is logged in, have the option to log out */}
                                {isLoggedIn && 
                                    <td>Logout</td>
                                }
                                    <td>
                                        <img src= {Cart} />
                                    </td>
                            </tr>
                        </tbody>
                    </table>
                <hr/>
                </header>
            </div>
        
      )
    }
}

export default Header_LP;
