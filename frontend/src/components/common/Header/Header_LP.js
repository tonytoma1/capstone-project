import React, { Component } from "react";
import HeaderS from './HeaderS.css';
import Logo from 'images/logo.png';
import Cart from 'images/shopping-cart.png';
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import * as Constants from 'constants/global-constants';
import UserService from "services/user.service";
import history from 'history.js';

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
class Header_LP extends Component {
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


    render() {

        const { isLoggedIn } = this.state;

        return (
            <div>
                <header className="Container">
                    <div className="title-container">
                        <img className="I" src={Logo} />
                        <h2 className="Title">Recommerce</h2>
                    </div>

                    {/* Middle navigation */}

                    <table className="navigational-table">
                        <tbody>
                            <tr>
                                <td><Link to="/">Home</Link></td>
                                <td><Link to="/sell-device">Sell Device</Link></td>
                                <td><Link to="/about">About</Link></td>
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
                                    <td className="td-login-register">
                                 <Link to="/register" style={{color:  '#3aafa9'}}>Register</Link>
                                      </td>
                                }
                                {/* If the user is logged in, have the option to log out */}
                                {isLoggedIn &&
                                    <button onClick={this.handleLogout}>Logout</button>
                                }
                                <td>
                                    <img className="shopping-cart-image" src={Cart} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                </header>
            </div>

        )
    }
}

export default Header_LP;
