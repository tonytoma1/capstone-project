import React from 'react';

import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, 
    TabContent, TabPane, Nav, NavItem, NavLink
  } from 'reactstrap';
import { List } from 'reactstrap';

import history from '../../history';
import {CONDITION, addPhoneComponent} from 'redux-action.js';

import './condition-css.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Phone from '../../images/phonetest.jpg';

import UserService from 'services/user.service';

import {connect} from 'react-redux';

 class Condition extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            modelImage: '',
            activeTab: "1",
            brokenPrice: '',
            fairPrice: '',
            goodPrice: '',
            excellentPrice: ''
        }
    }

    async componentDidMount() {
        try {
            let deviceImageUrl = await UserService.getModelByName(this.props.model);
            let device = await UserService.getDevicesBasedOnModelName(this.props.model);
            let deviceArray = device.data;
            this.setState({modelImage: deviceImageUrl.data.modelImage});


            // Get all of the device prices and place them into the appropriate state.
            for(let i = 0; i < deviceArray.length; i++) {
                let condition = deviceArray[i].deviceCondition.conditonName;
                let price = deviceArray[i].devicePrice;
                
                switch(condition) {
                    case 'Fair':
                        this.setState({fairPrice: price});
                        break;
                    case 'Broken':
                        this.setState({brokenPrice: price});
                        break;
                    case 'Good':
                        this.setState({goodPrice: price});
                        break;
                    case 'Excellent': 
                        this.setState({excellentPrice: price});
                        break;
                }
            
              
            }

            
        }
        catch(e) {

        }
    }

    

    changeTabs = (tabNumber) => {
        this.setState({activeTab: tabNumber});

        document.getElementById("one").style.backgroundColor ="white";
        document.getElementById("one").style.color ="#007bff";

        document.getElementById("two").style.backgroundColor ="white";
        document.getElementById("two").style.color ="#007bff";

        document.getElementById("three").style.backgroundColor ="white";
        document.getElementById("three").style.color ="#007bff";

        document.getElementById("four").style.backgroundColor ="white";
        document.getElementById("four").style.color ="#007bff";

        switch(tabNumber){
            case "1": 
                document.getElementById("one").style.backgroundColor ="#3aafa9";
                document.getElementById("one").style.color ="white";
                document.getElementById("offer-1").style.borderTopLeftRadius = "0px";
            break;
            case "2": 
                document.getElementById("two").style.backgroundColor ="#3aafa9";
                document.getElementById("two").style.color ="white";
            break;
            case "3": 
                document.getElementById("three").style.backgroundColor ="#3aafa9";
                document.getElementById("three").style.color ="white";
            break;
            case "4": 
                document.getElementById("four").style.backgroundColor ="#3aafa9";
                document.getElementById("four").style.color ="white";
                document.getElementById("offer-4").style.borderTopRightRadius = "0px";
            break;
        }


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

    setCondition(condition) {
        this.props.dispatch(addPhoneComponent(CONDITION, condition));

        history.push("/condition");
        window.location.reload();
    }


    render(){
            return(
                <div className="condition-container">
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
                            <img src={this.state.modelImage}/>
                        </figure>

                        <ul>
                            <li>{this.props.model}</li>
                            <li>{this.props.storage}GB</li>
                            <li>{this.props.service_provider}</li>
                        </ul>  
                    </div> 

                    <div className="condition-select">

                        <h2> Select Condition</h2>
                        <form>

                        {/*
                        <Row id="select-row">
                                <Col className="select-col" onClick={this.handleClick}>BROKEN</Col>

                                <Col className="select-col" onClick={this.handleClick}>FAIR</Col>
           
                                <Col className="select-col" onClick={this.handleClick}>GOOD</Col>
                                <Col className="select-col" onClick={this.handleClick}>EXCELLENT</Col>
                            </Row>
                        */}
                        
                       

                            <Nav tabs fill >
                                <NavItem onClick={() => this.changeTabs("1")}>
                                    <NavLink id="one">Broken</NavLink>
                                </NavItem>
                                <NavItem onClick={() => this.changeTabs("2")}>
                                    <NavLink id="two" >Fair</NavLink>
                                </NavItem>
                                <NavItem  onClick={() => this.changeTabs("3")}>
                                    <NavLink id="three">Good</NavLink>
                                </NavItem>
                                <NavItem onClick={() => this.changeTabs("4")}>
                                    <NavLink  id="four">Excellent</NavLink>
                                </NavItem>
                            </Nav>

                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="1">
                                    <Row className="row">
                                        <Col>
                                            <Card className="offer" id="offer-1">
                                                <CardBody>

                                                    <CardText className="list-cont"> 
                                                        
                                                        <List type="unstyled" className="list">
                                                            <li>Select BROKEN if ONE of the following items are true
                                                                <ul>
                                                                    <li>Device does not turn on</li>
                                                                    <li>Device can't connect to Wi-Fi</li>
                                                                    <li>Touchscreen is not responding</li>
                                                                    <li>Device is bent</li>
                                                                </ul>
                                                            </li>
                                                        </List>

                                                    </CardText>

                                                    <hr className="hz-line"></hr>

                                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Your offer</CardSubtitle>
                                                    <CardTitle tag="h5">$ {this.state.brokenPrice}</CardTitle>

                                                    <Button>Sell Device</Button>
                                                </CardBody>
                                            </Card>

                                        </Col>
                                    </Row>
                                </TabPane>

                                <TabPane tabId="2">
                                    <Row>
                                        <Col>
                                        <Card className="offer">
                                                <CardBody >

                                                    <CardText className="list-cont"> 
                                                        
                                                        <List type="unstyled" className="list">
                                                            <li>Select FAIR if ALL the following are true
                                                                <ul>
                                                                    <li>Device shows signs of wear and tear such as scratched screen, and/or wear and tear</li>
                                                                    <li>Device functions without malfunction</li>
                                                                    <li>Device screen has no cracks</li>
                                                                </ul>
                                                            </li>
                                                        </List>

                                                    </CardText>

                                                    <hr className="hz-line"></hr>

                                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Your offer</CardSubtitle>
                                                    <CardTitle tag="h5">$ {this.state.fairPrice}</CardTitle>

                                                    <Button >Sell Device</Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </TabPane>

                                <TabPane tabId="3">
                                    <Row>
                                        <Col>
                                        <Card className="offer">
                                                <CardBody >

                                                    <CardText className="list-cont"> 
                                                        
                                                        <List type="unstyled" className="list">
                                                            <li>Select GOOD if ALL of the following are true
                                                                <ul>
                                                                    <li>Device operates without malfunction</li>
                                                                    <li>Device has no sign of damage</li>
                                                                    <li>Device has above 85% of battery life</li>
                                                                    
                                                                </ul>
                                                            </li>
                                                        </List>

                                                    </CardText>

                                                    <hr className="hz-line"></hr>

                                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Your offer</CardSubtitle>
                                                    <CardTitle tag="h5">$ {this.state.goodPrice}</CardTitle>

                                                    <Button>Sell Device</Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </TabPane>

                                <TabPane tabId="4">
                                    <Row>
                                        <Col>
                                        <Card className="offer" id="offer-4">
                                                <CardBody >

                                                    <CardText className="list-cont"> 
                                                        
                                                        <List type="unstyled" className="list">
                                                            <li>Select EXCELLENT if the following are true
                                                                <ul>
                                                                    <li>Device looks brand new</li>
                                                                    <li>Device is 100% functional</li>
                                                                    <li>Device is not bent</li>
                                                                    <li>Device has above 85% of battery life</li>
                                                                </ul>
                                                            </li>
                                                        </List>

                                                    </CardText>

                                                    <hr className="hz-line"></hr>

                                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Your offer</CardSubtitle>
                                                    <CardTitle tag="h5">$ {this.state.excellentPrice}</CardTitle>

                                                    <Button>Sell Device</Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </TabPane>

                            </TabContent>
                         
                           


                                


                        </form>
                    </div>

                </div>

            );
        }
    
    }

    function mapStateToProps(state) {
        return {
            model: state.model,
            storage: state.storage,
            service_provider: state.service_provider
        };
    }

    export default connect(mapStateToProps) (Condition);

