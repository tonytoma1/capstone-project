import React, { Component } from "react";
import ReactDOM from "react-dom";
import HeaderS from './HeaderS.css';
import Logo from '../../../images/logo.png';
import Cart from '../../../images/cart.png';

import {Container, Row, Col} from 'reactstrap';

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
    render(){
        return(
            <div>
                <header className="Container">
                    <div className="title-container">
                    <img className="I" src= {Logo}/>
                    <h2 className="Title">Recommerce</h2>
                    </div>
            
                    {/* Middle navigation */}
                   
                    <table className="navigational-table">
                        <tr>
                            <td>Home</td>
                            <td>Sell Device</td>
                            <td>About</td>
                        </tr>
                    </table>


                    {/* Right most navigation */}
                    <table className="login-register-table">
                        <tr>
                            <td>Login</td>
                            <td className="td-login-register">Register</td>
                            <td>
                                <img src= {Cart} />
                            </td>
                        </tr>
                    </table>
                <hr/>
                </header>
            </div>
        
      )
    }
}

export default Header_LP;
