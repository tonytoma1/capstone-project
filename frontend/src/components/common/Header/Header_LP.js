import React, { Component } from "react";
import HeaderS from './HeaderS.css';
import Logo from '../../../images/logo.png';
import Cart from '../../../images/cart.png';
import {Link} from "react-router-dom";

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
                                <td> <Link to="/login">Login</Link> </td>
                                    <td className="td-login-register">Register</td>
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
