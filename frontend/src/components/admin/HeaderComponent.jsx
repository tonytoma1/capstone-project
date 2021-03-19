import React, { Component } from 'react'

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
                    </nav>
                </header>
            </div>
        )
    }
}