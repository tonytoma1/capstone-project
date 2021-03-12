
import React from 'react';
import UserService from 'services/user.service';
import * as Constants from 'constants/global-constants';

// ->> CSS imports
// import './device-css.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import { List } from 'reactstrap';


export default class Strorage extends React.Component {

    /////////////////////////////////////
    constructor(props) {
        super(props);

        this.state = {
            storage: []
        }
    }

    componentDidMount() {
        UserService.getModels()
                    .then((response) => {
                        this.setState({storage: response.data});
                    })
                    .catch((error) => {
                        
                    })

    }

    handleClick = (e) =>{
        
        
    }
    
    /////////////////////////////////////
    render(){
        return(
            //** html page */
            <div className="device-container">
                

                <Breadcrumb className="bc">
                    
                        <BreadcrumbItem  >
                            <Link to="/sell-device" > Device </Link>
                        </BreadcrumbItem>

                        <BreadcrumbItem  >
                             <span  className="current">Storage</span>
                        </BreadcrumbItem>
                </Breadcrumb>

                <h2> Select Storage Capacity </h2>

                <div className="selection">

                {this.state.storage.map((devicesObj) => {
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