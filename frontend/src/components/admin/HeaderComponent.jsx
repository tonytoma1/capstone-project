import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import history from '../../history';

import Cookies from 'js-cookie';

export default class HeaderComponent extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    handleLogout() {
        Cookies.remove("jwtToken");
        history.push("/login");
        window.location.reload();
    }


    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                    <div className="navbar-brand">Admin Management Page</div>
                    <Link to='/admin'>
                    <div className="navbar-brand">View Account</div>
                    </Link>
                    <Link to='/vieworders'>
                    <div className="navbar-brand">View Orders</div>
                    </Link>
                    <Link to='/adddevice'>
                    <div className="navbar-brand">Add Device</div>
                    </Link>
                    <Link to="/login" onClick={this.handleLogout}>
                    <div className="navbar-brand">Logout</div>  
                    </Link>
                    
                    
                    </nav>
                </header>
            </div>
        )
    }
}