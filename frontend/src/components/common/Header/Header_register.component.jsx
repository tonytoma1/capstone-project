import React, { Component } from "react";
import HeaderS from './HeaderS.css';
import Logo from 'images/logo.png';
import { Link } from "react-router-dom";
class HeaderReg extends Component {
    constructor(props) {
        super(props);
    }
    render() {
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
                                <td>Home</td>
                                <td>Sell Device</td>
                                <td>About</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Right most navigation */}
                    <table className="login-register-table">
                        <tbody>
                            <td>
                                <Link to="/login" style={{color:  '#3aafa9'}}>Login</Link>
                            </td>
                        </tbody>
                    </table>
                    <hr />
                </header>
            </div>

        )
    }
}

export default HeaderReg;
