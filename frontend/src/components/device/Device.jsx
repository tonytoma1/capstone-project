
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


export default class Device extends React.Component {

    /////////////////////////////////////
    constructor(props) {
        super(props);

        this.state = {
            device: []
        }
    }

    componentDidMount() {
        UserService.getModels()
                    .then((response) => {
                        this.setState({device: response.data});
                    })
                    .catch((error) => {
                        
                    })

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

                {this.state.device.map((devicesObj) => {
                    return (
                        <figure className="phone-image">
                            <img src= {devicesObj.modelImage}/>
                            <p>{devicesObj.modelName}</p>
                        </figure>
                    );
                })

                }
                    
                    

                </div>
            </div>  
            /////////////////////////////////////
        );
    }
}