import React, { Component } from "react";
import ReactDOM from "react-dom";
import HeaderS from './HeaderS.css'
import Logo from './logo.png'

class Header_LP extends Component
{
    render(){
        return(
        <div>
       <header className="Container">
        <div>
        <img className="I" src= {Logo}/>
        <h2 className="Title">Recommerce</h2>
        </div>
        <hr/>
        </header></div>)
    }
}

export default Header_LP;
