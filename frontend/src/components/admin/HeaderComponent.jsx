import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import history from '../../history';
export default class HeaderComponent extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                    <div className="navbar-brand">Admin Management Page</div>
                    <Link to='/vieworders'>
                    <div className="navbar-brand">View Orders</div>
                    </Link>
                    
                    </nav>
                </header>
            </div>
        )
    }
}