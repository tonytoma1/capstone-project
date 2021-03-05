import React from 'react';

import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import { List } from 'reactstrap';

import './condition-css.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Phone from '../../images/phonetest.jpg';

export default class Condition extends React.Component {

    constructor(props) {
        super(props);
    }

    /**
     * will change the color of buttons' background to white 
     * and then change the targeted to cyan
     * @param {button} e - this the condition selection 
     */
    handleClick = (e) =>{

        var parentROW = document.getElementById("select-row");
        var childCOL = parentROW.getElementsByClassName("select-col");

        var i;
        for (i = 0; i < childCOL.length; i++) {
            childCOL[i].style.backgroundColor = "white";
            childCOL[i].style.fontWeight = "400";
        }

        e.target.style.backgroundColor = '#3aafa9';
        e.target.style.fontWeight = '700';
        
    }


    render(){
            return(
                <div class="condition-container">
                     <Breadcrumb className="bc">
                    
                        <BreadcrumbItem  >
                            <Link to="/device" > Device </Link>
                        </BreadcrumbItem>


                        <BreadcrumbItem  >
                            <Link to="/storage" >  Storage </Link>
                        </BreadcrumbItem>

                        <BreadcrumbItem >
                            <Link to="/provider" > Provider </Link>
                        </BreadcrumbItem>


                        <BreadcrumbItem>
                            <span  className="current">Condition</span>
                        </BreadcrumbItem>

                    </Breadcrumb>

                    <div className="phone">
                        <figure className="phone-image">
                            <img src={Phone} />
                        </figure>

                        <ul>
                            <li>iPhone 5s</li>
                            <li>64gb</li>
                            <li>Network provider</li>
                        </ul>  
                    </div> 

                    <div className="condition-select">

                        <h2> Select Condition</h2>
                        <form>

                            <Row id="select-row">
                                <Col className="select-col" onClick={this.handleClick}>BROKEN</Col>

                                <Col className="select-col" onClick={this.handleClick}>FAIR</Col>
           
                                <Col className="select-col" onClick={this.handleClick}>GOOD</Col>
                                <Col className="select-col" onClick={this.handleClick}>EXCELLENT</Col>
                            </Row>


                                <Card className="offer">
                                    
                                    <CardBody >

                                        <CardText className="list-cont"> 
                                            
                                            <List type="unstyled" className="list">
                                                <li>Select xxx if the following are true
                                                    <ul>
                                                        <li>condition 1</li>
                                                        <li>condition 2</li>
                                                        <li>condition ...</li>
                                                        <li>condition n</li>
                                                    </ul>
                                                </li>
                                            </List>

                                        </CardText>

                                        <hr className="hz-line"></hr>

                                        <CardSubtitle tag="h6" className="mb-2 text-muted">Your offer</CardSubtitle>
                                        <CardTitle tag="h5">$ xxxx</CardTitle>

                                        <Button>Button</Button>
                                    </CardBody>
                                </Card>


                        </form>
                    </div>

                </div>

            );
        }
    
    }

