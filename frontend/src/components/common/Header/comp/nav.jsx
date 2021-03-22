import React, { Component } from "react";
import Logo from 'images/logo.png';
import { Link } from "react-router-dom";

import  { Redirect } from 'react-router-dom'
import { Button, ButtonGroup } from 'reactstrap';




function HeaderLogo(){

  return (
  <div className="explore">
    <ButtonGroup className="explore-buttons">
        <Link to="/" >
            <Button >Home</Button>
        </Link>

        <Link to="/sell-device" >
            <Button >Sell Device</Button>
        </Link>

        <Link to="/about" >
            <Button>About</Button>
        </Link>
    </ButtonGroup>
    </div>
  );
  
}

export default HeaderLogo;
