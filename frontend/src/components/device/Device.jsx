
import React from 'react';
import UserService from 'services/user.service';
import * as Constants from 'constants/global-constants';

// ->> CSS imports
import './device-css.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import { List } from 'reactstrap';

// Files

import six from '../../images/phones/6.png';
import sixPlus from '../../images/phones/6+.png';
import sixSPlus from '../../images/phones/6s+.png';

import seven from '../../images/phones/7.png';
import sevenPlus from '../../images/phones/7+.png';


import eight from '../../images/phones/8.png';
import eightPlus from '../../images/phones/8+.png';

import x from '../../images/phones/X.png';
import xr from '../../images/phones/XR.png';
import xs from '../../images/phones/XS.png';
import xsmax from '../../images/phones/XSmax.png';

import eleven from '../../images/phones/11.png';
import elevenPro from '../../images/phones/11pro.png';
import elevenProMax from '../../images/phones/11promax.png';

import se from '../../images/phones/se.png';

import twelveMini from '../../images/phones/12mini.png';
import twelve from '../../images/phones/12.png';
import twelvePro from '../../images/phones/12pro.png';
import twelveProMax from '../../images/phones/12promax.png';









export default class Login extends React.Component {

    /////////////////////////////////////
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    handleClick = (e) =>{
        console.log("tell:" + e.currentTarget.id)
        
        
    }
    
    /////////////////////////////////////
    render(){
        return(
            //** html page */
            <div className="device-container">
                

                <Breadcrumb className="bc">
                    
                        <BreadcrumbItem  >
                            <span  className="current">Device</span>
                        </BreadcrumbItem>

                </Breadcrumb>

                <h2> Select Model </h2>

                <div className="selection">
                    
                    <figure className="phone-image" id="six" onClick={this.handleClick} >
                        <img src={six} />
                        <figcaption>  6</figcaption>
                    </figure>

                    <figure className="phone-image" id="sixS" onClick={this.handleClick} >
                        <img src={six} />
                        <figcaption>  6s</figcaption>
                    </figure>

                    <figure className="phone-image" id="sixPlus" onClick={this.handleClick} >
                        <img src={sixPlus} />
                        <figcaption>  6 Plus</figcaption>
                    </figure>

                    <figure className="phone-image" id="sixSPlus" onClick={this.handleClick} >
                        <img src={sixSPlus} />
                        <figcaption>  6s Plus</figcaption>
                    </figure>

                    <figure className="phone-image" id="seven" onClick={this.handleClick} >
                        <img src={seven} />
                        <figcaption>  7</figcaption>
                    </figure>

                    <figure className="phone-image" id="sevenPlus" onClick={this.handleClick} >
                        <img src={sevenPlus} />
                        <figcaption>  7 Plus</figcaption>
                    </figure>

                    <figure className="phone-image" id="eight" onClick={this.handleClick} >
                        <img src={eight} />
                        <figcaption>  8 </figcaption>
                    </figure>

                    <figure className="phone-image" id="eightPlus" onClick={this.handleClick}>
                        <img src={eightPlus} />
                        <figcaption>  8 Plus</figcaption>
                    </figure>



                    <figure className="phone-image" id="x" onClick={this.handleClick}>
                        <img src={x} />
                        <figcaption>  X</figcaption>
                    </figure>

                    <figure className="phone-image" id="xr" onClick={this.handleClick}>
                        <img src={xr} />
                        <figcaption>  XR</figcaption >
                    </figure>

                    <figure className="phone-image" id="xs" onClick={this.handleClick}>
                        <img src={xs} />
                        <figcaption>  XS</figcaption>
                    </figure>

                    <figure className="phone-image" id="xsmax" onClick={this.handleClick}>
                        <img src={xsmax} />
                        <figcaption>  XS Max</figcaption>
                    </figure>




                    <figure className="phone-image" id="eleven" onClick={this.handleClick}>
                        <img src={eleven} />
                        <figcaption>  11</figcaption>
                    </figure>

                    
                    <figure className="phone-image" id="elevenPro" onClick={this.handleClick}>
                        <img src={elevenPro} />
                        <figcaption>  11 Pro </figcaption>
                    </figure>

                    
                    <figure className="phone-image" id="elevenProMax" onClick={this.handleClick}>
                        <img src={elevenProMax} />
                        <figcaption>  11 Pro Max</figcaption>
                    </figure>



                    <figure className="phone-image" id="se" onClick={this.handleClick}>
                        <img src={se} />
                        <figcaption>  SE 2020</figcaption>
                    </figure>




                    <figure className="phone-image" id="twelveMini" onClick={this.handleClick}>
                        <img src={twelveMini} />
                        <figcaption>  12 Mini</figcaption>
                    </figure>

                    <figure className="phone-image" id="twelve" onClick={this.handleClick}>
                        <img src={twelve} />
                        <figcaption>  12 </figcaption>
                    </figure> 

                    <figure className="phone-image" id="twelvePro" onClick={this.handleClick}>
                        <img src={twelvePro} />
                        <figcaption>  12 Pro</figcaption>
                    </figure>

                    <figure className="phone-image" id="twelveProMax" onClick={this.handleClick}>
                        <img src={twelveProMax} />
                        <figcaption>  12 Pro Max</figcaption>
                    </figure>


                    


                    



















                </div>
            </div>  
            /////////////////////////////////////
        );
    }
}