import React, { Component } from "react";
import Logo from 'images/logo.png';
import { Link } from "react-router-dom";
class HeaderReg extends Component {
  
    render() {
        return (
            <div>
                <header className="Container">
                    <div className="title-container">
                        <img className="I" src={Logo} alt="logo"/>
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
                                <td>
                                <Link to="/login" style={{color:  '#3aafa9'}}>Login</Link>
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

export default HeaderReg;
