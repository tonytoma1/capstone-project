import React, { Component } from "react";
import UP from './UP.css';
import Logo from 'images/logo.png';

class updatePsswrd extends Component {

    render()
    {
        return(
            <div>
                <div className="block">
            <h2>Recommerce</h2>
            <form>
            <table>
                <tr>
                <section>
                    <p>Password</p>
                    <input type="password" id="password" placeholder="New password here"/>
                </section>
                </tr>
                <tr>
                    <section>
                        <p className="CPL">Confirm</p>
                        <input className="CP" type="CPassword" id="CPassword" placeholder="Confirm password"/>
                    </section>
                    </tr>
            </table>
            <button>Update</button>
            </form>
        </div>
            </div>
        )
    }
}